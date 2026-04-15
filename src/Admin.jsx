import React, { useState, useEffect } from 'react';
import { UploadCloud, CheckCircle, AlertCircle, Key, Loader2, ArrowLeft, ShieldCheck, User, Code, CheckCircle2 } from 'lucide-react';

export default function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [versionType, setVersionType] = useState('stable'); // 'stable' or 'beta'
  const [file, setFile] = useState(null);
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('admin_user');
    const savedPass = localStorage.getItem('admin_pass');
    if (savedUser) setUsername(savedUser);
    if (savedPass) setPassword(savedPass);
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

  const uploadToBackend = async () => {
    if (!file || !username || !password) return;
    setStatus('loading');
    setErrorMsg('');
    handleCredentialsSave();

    try {
      const base64Content = await convertToBase64(file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
          type: versionType,
          fileBase64: base64Content,
          filename: file.name
        })
      });

      const data = await res.json();

      if (!res.ok) {
         throw new Error(data.message || 'Upload failed');
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
            <p className="text-text-secondary text-sm">Securely update the Stable or Beta APK files.</p>
          </div>

          <div className="space-y-6">
            
            {/* Split row for Credentials */}
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

            {/* Version Type Selector */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Target Version</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setVersionType('stable')}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                    versionType === 'stable' 
                      ? 'bg-blue-600/20 border-blue-500 text-blue-400' 
                      : 'bg-[#0D0D0F] border-white/10 text-text-secondary hover:bg-white/5'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Stable Release
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
                  Beta Channel
                </button>
              </div>
            </div>

            {/* Drag and Drop Zone */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Upload New {versionType === 'stable' ? 'Stable' : 'Beta'} APK</label>
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
                  <p className="font-bold mb-1">Update Pushed Successfully!</p>
                  <p className="text-green-300 pointer-events-auto">
                    Vercel is now rebuilding the site with the new {versionType === 'stable' ? 'Stable' : 'Beta'} APK. It should be live in 1-2 minutes.
                  </p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={uploadToBackend}
              disabled={!username || !password || !file || status === 'loading'}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-white transition-all shadow-glow"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Deploying...
                </>
              ) : (
                `Deploy New ${versionType === 'stable' ? 'Stable' : 'Beta'} APK`
              )}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
