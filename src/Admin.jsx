import React, { useState, useEffect } from 'react';
import { UploadCloud, CheckCircle, AlertCircle, Key, Loader2, ArrowLeft, ShieldCheck, User, Code, CheckCircle2, Settings, Sparkles, Wrench } from 'lucide-react';

export default function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [versionType, setVersionType] = useState('stable'); // 'stable' or 'beta'
  const [file, setFile] = useState(null);
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  // Feature toggles state
  const [showBeta, setShowBeta] = useState(false);
  const [showLucky, setShowLucky] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [isTogglingContent, setIsTogglingContent] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('admin_user');
    const savedPass = localStorage.getItem('admin_pass');
    if (savedUser) setUsername(savedUser);
    if (savedPass) setPassword(savedPass);

    // Fetch initial config for the toggle
    fetch(`/config.json?v=${Date.now()}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          if (typeof data.showBeta !== 'undefined') setShowBeta(data.showBeta);
          if (typeof data.showLucky !== 'undefined') setShowLucky(data.showLucky);
          if (typeof data.maintenanceMode !== 'undefined') setMaintenanceMode(data.maintenanceMode);
        }
      })
      .catch(() => {});
  }, []);

  const handleCredentialsSave = () => {
    localStorage.setItem('admin_user', username);
    localStorage.setItem('admin_pass', password);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (f) => {
    if (!f.name.endsWith('.apk')) {
      setStatus('error');
      setErrorMsg('Only .apk files are allowed.');
      return;
    }
    setFile(f);
    setStatus('idle');
    setErrorMsg('');
  };

  const convertToBase64 = (f) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(f);
      reader.onload = () => {
        const b64 = reader.result.split(',')[1];
        resolve(b64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // Helper to get GitHub token securely
  const getAuthToken = async () => {
    handleCredentialsSave();
    const authRes = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const rawAuthText = await authRes.text();
    let authData;
    try {
      authData = JSON.parse(rawAuthText);
    } catch (e) {
      throw new Error('Server returned an invalid response. API route may be misconfigured.');
    }
    if (!authRes.ok) {
      throw new Error(authData.message || 'Authentication failed');
    }
    return authData.token;
  };

  const updateConfigValue = async (key, newValue) => {
    if (!username || !password) {
      setStatus('error');
      setErrorMsg(`Please enter your admin credentials to toggle this setting.`);
      return;
    }
    setIsTogglingContent(true);
    setStatus('idle');
    setErrorMsg('');

    try {
      const token = await getAuthToken();
      const repo = 'itsstranger/timetablewidget-downlaod';
      const filePath = 'public/config.json';
      const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;

      const getRes = await fetch(`${url}?ref=main&t=${Date.now()}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        },
        cache: 'no-store'
      });
      
      let sha = null;
      let existingConfig = {};
      if (getRes.ok) {
         const fileData = await getRes.json();
         sha = fileData.sha;
         try {
             // GitHub fileData.content is Base64 encoded
             const decoded = decodeURIComponent(escape(atob(fileData.content.replace(/\n/g, ''))));
             existingConfig = JSON.parse(decoded);
         } catch(e) {
             console.error("Could not parse existing config, creating new.");
         }
      }

      // Merge new value into existing config
      const updatedConfig = { ...existingConfig, [key]: newValue };
      
      // Convert json to base64 securely resolving utf-8
      const jsonContent = JSON.stringify(updatedConfig, null, 2);
      const base64Content = btoa(unescape(encodeURIComponent(jsonContent)));

      const bodyPayload = {
        message: `Toggle ${key} to ${newValue ? 'ON' : 'OFF'} via Admin Portal`,
        content: base64Content,
        branch: 'main'
      };
      if (sha) bodyPayload.sha = sha;

      const putRes = await fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyPayload)
      });

      if (!putRes.ok) {
         const err = await putRes.json();
         throw new Error(err.message || 'Failed to update config.json on GitHub');
      }

      if (key === 'showBeta') setShowBeta(newValue);
      if (key === 'showLucky') setShowLucky(newValue);
      if (key === 'maintenanceMode') setMaintenanceMode(newValue);
      
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg(err.message);
    } finally {
      setIsTogglingContent(false);
    }
  };

  const uploadToBackend = async () => {
    if (!file || !username || !password) return;
    setStatus('loading');
    setErrorMsg('');

    try {
      const token = await getAuthToken();

      const base64Content = await convertToBase64(file);
      const repo = 'itsstranger/timetablewidget-downlaod';
      let filePath = 'public/dhTimetable.apk';
      if (versionType === 'beta') filePath = 'public/dhTimetableBeta.apk';
      if (versionType === 'test') filePath = 'public/dhTimetableTest.apk';
      const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;

      const getRes = await fetch(`${url}?ref=main&t=${Date.now()}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        },
        cache: 'no-store'
      });
      
      let sha = null;
      if (getRes.ok) {
         const fileData = await getRes.json();
         sha = fileData.sha;
      }

      const bodyPayload = {
        message: `Update ${versionType.toUpperCase()} APK via Admin Portal`,
        content: base64Content,
        branch: 'main'
      };
      if (sha) bodyPayload.sha = sha; 

      const putRes = await fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyPayload)
      });

      if (!putRes.ok) {
         const err = await putRes.json();
         throw new Error(err.message || 'Upload to GitHub failed');
      }

      setStatus('success');
      setFile(null);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="min-h-screen noise-bg px-5 py-12 flex items-center justify-center" style={{ background: '#121214' }}>
      <div className="max-w-xl w-full relative z-10">
        
        <button 
          onClick={() => window.location.href = '/'}
          className="mb-8 flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
          style={{ color: '#A0A0B0' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Website
        </button>

        <div className="glass-strong rounded-3xl p-6 sm:p-10 shadow-glass">
          <div className="mb-8 text-center">
            <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-glow"
              style={{ background: 'rgba(123,122,255,0.15)', border: '1px solid rgba(123,122,255,0.3)' }}>
              <ShieldCheck className="w-7 h-7" style={{ color: '#7B7AFF' }} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-text-primary mb-2">Admin Portal</h1>
            <p className="text-text-secondary text-sm">Manage file versions and live feature flags.</p>
          </div>

          <div className="space-y-8">
            
            {/* Credentials Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-text-muted" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="admin"
                    className="w-full bg-[#0D0D0F] border focus:ring-2 focus:outline-none rounded-xl text-sm px-10 py-3 transition-colors"
                    style={{ borderColor: 'rgba(123,122,255,0.2)', color: '#F0F0F5' }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Key className="h-4 w-4 text-text-muted" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#0D0D0F] border focus:ring-2 focus:outline-none rounded-xl text-sm px-10 py-3 transition-colors"
                    style={{ borderColor: 'rgba(123,122,255,0.2)', color: '#F0F0F5' }}
                  />
                </div>
              </div>
            </div>

            {/* Feature Flags Section */}
            <div className="bg-[#121214] border border-[#2a2a30] rounded-2xl p-5 space-y-5">
              
              {/* Beta Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex flex-shrink-0 items-center justify-center">
                    <Settings className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary">Enable Pro Downloads</h3>
                    <p className="text-xs text-text-muted">Show the Pro Download button to all users publicly.</p>
                  </div>
                </div>
                
                <button
                  onClick={() => updateConfigValue('showBeta', !showBeta)}
                  disabled={isTogglingContent || status === 'loading'}
                  className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-50 ${
                    showBeta ? 'bg-orange-500' : 'bg-[#2a2a30]'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      showBeta ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <hr className="border-[#2a2a30] opacity-50" />

              {/* Lucky/Test Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex flex-shrink-0 items-center justify-center">
                    <Sparkles className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary">Enable "I'm Feeling Lucky"</h3>
                    <p className="text-xs text-text-muted">Show the secret test build download button.</p>
                  </div>
                </div>
                
                <button
                  onClick={() => updateConfigValue('showLucky', !showLucky)}
                  disabled={isTogglingContent || status === 'loading'}
                  className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-50 ${
                    showLucky ? 'bg-fuchsia-500' : 'bg-[#2a2a30]'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      showLucky ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <hr className="border-[#2a2a30] opacity-50" />

              {/* Maintenance Mode Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex flex-shrink-0 items-center justify-center">
                    <Wrench className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary">Maintenance Mode</h3>
                    <p className="text-xs text-text-muted">Disable public access and show maintenance screen.</p>
                  </div>
                </div>
                
                <button
                  onClick={() => updateConfigValue('maintenanceMode', !maintenanceMode)}
                  disabled={isTogglingContent || status === 'loading'}
                  className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-50 ${
                    maintenanceMode ? 'bg-red-500' : 'bg-[#2a2a30]'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      maintenanceMode ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

            </div>

            <hr className="border-t border-[#2a2a30]" />

            {/* Version Type Selector */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Target Upload Version</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setVersionType('stable')}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                    versionType === 'stable' 
                      ? 'bg-blue-600/20 border-blue-500 text-blue-400' 
                      : 'bg-[#0D0D0F] border-white/10 text-text-secondary hover:bg-white/5'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Simple Release
                </button>
                <button
                  onClick={() => setVersionType('beta')}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                    versionType === 'beta' 
                      ? 'bg-amber-600/20 border-amber-500 text-amber-400' 
                      : 'bg-[#0D0D0F] border-white/10 text-text-secondary hover:bg-white/5'
                  }`}
                >
                  <Code className="w-4 h-4" />
                  Pro Channel
                </button>
                <button
                  onClick={() => setVersionType('test')}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                    versionType === 'test' 
                      ? 'bg-fuchsia-600/20 border-fuchsia-500 text-fuchsia-400' 
                      : 'bg-[#0D0D0F] border-white/10 text-text-secondary hover:bg-white/5'
                  }`}
                >
                  <AlertCircle className="w-4 h-4" />
                  Test (Lucky)
                </button>
              </div>
            </div>

            {/* Drag and Drop Zone */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Upload New {versionType === 'stable' ? 'Simple' : versionType === 'beta' ? 'Pro' : 'Test'} APK
              </label>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all ${
                  isDragging ? 'bg-[#1a1a24] scale-[1.02]' : 'bg-[#0D0D0F]'
                }`}
                style={{
                  borderColor: isDragging 
                    ? (versionType === 'stable' ? '#3B82F6' : '#F59E0B') 
                    : 'rgba(123,122,255,0.2)'
                }}
              >
                <input 
                  type="file" 
                  accept=".apk" 
                  onChange={handleFileChange} 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <UploadCloud className={`w-10 h-10 mb-3 ${isDragging ? 'animate-bounce' : ''}`} 
                  style={{ color: versionType === 'stable' ? '#3B82F6' : '#F59E0B' }} 
                />
                
                {file ? (
                  <div className="text-text-primary font-bold text-sm bg-[#121214] px-4 py-2 rounded-lg border border-[#2a2a30]">
                    {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                  </div>
                ) : (
                  <>
                    <p className="font-semibold text-text-primary text-sm mb-1">Click to browse or drag file here</p>
                    <p className="text-xs text-text-muted">Must be a valid Android .apk file</p>
                  </>
                )}
              </div>
            </div>

            {/* Status Messages */}
            {status === 'error' && (
              <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-200">{errorMsg}</p>
              </div>
            )}

            {status === 'success' && (
              <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-green-200">
                  <p className="font-bold mb-1">Update Action Successful!</p>
                  <p className="text-green-300 pointer-events-auto">
                    Vercel is now processing the changes. It should be live in 1-2 minutes.
                  </p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={uploadToBackend}
              disabled={!username || !password || !file || status === 'loading' || isTogglingContent}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-white transition-all shadow-glow"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Deploying...
                </>
              ) : (
                `Deploy New ${versionType === 'stable' ? 'Simple' : versionType === 'beta' ? 'Pro' : 'Test'} APK`
              )}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
