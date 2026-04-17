import { useEffect, useRef, useState } from 'react';
import {
  Download, Shield, Sparkles, Zap, ChevronRight,
  FileDown, Upload, LayoutGrid, ExternalLink, Star,
  MessageSquare, Mail, Send, Users, Code
} from 'lucide-react';

/* ─── Phone Mockup SVG Widget ─── */
function PhoneMockup() {
  const periods = [
    { 
      time: '07:30 — 08:25', 
      period: 'PERIOD 1', 
      subjectLines: ['علم أسرار الشريعة (حجة الله', 'البالغة)'], 
      room: 'LT-08',
      y: 75
    },
    { 
      time: '12:05 — 13:00', 
      period: 'PERIOD 6', 
      subjectLines: ['Introduction to', 'Institution Leadership', 'and Management'], 
      room: 'LT-10',
      y: 135
    },
    { 
      time: '13:00 — 13:55', 
      period: 'PERIOD 7', 
      subjectLines: ['Medieval Muslim', 'Scholarship in Study', 'of Religion'], 
      room: 'LT-09',
      y: 215
    }
  ];

  return (
    <div className="relative flex justify-center items-end h-full animate-float">
      {/* Glow underneath the phone */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-20 rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(123,122,255,0.35) 0%, transparent 70%)' }} />

      {/* Phone shell (Android Pixel Concept) */}
      <div className="relative z-10 w-[240px] sm:w-[260px]" style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.7))' }}>
        <svg viewBox="0 0 260 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {/* Phone body */}
          <rect x="2" y="2" width="256" height="516" rx="28" fill="#0D0D0F" stroke="#2A2A30" strokeWidth="2.5" />
          {/* Screen background */}
          <rect x="8" y="8" width="244" height="504" rx="22" fill="#0A0A0C" />
          
          {/* Hole punch camera */}
          <circle cx="130" cy="24" r="5" fill="#040405" />
          
          {/* Android Status bar */}
          <text x="24" y="28" fill="#F0F0F5" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">10:00</text>
          
          {/* Battery, Wifi, Signal Dummy */}
          <g transform="translate(195, 20)">
             {/* Signal */}
             <path d="M2.5 7.5 L5 0 L7.5 7.5 Z" fill="#F0F0F5"/>
             <path d="M8.5 7.5 L11 0 L13.5 7.5 Z" fill="#F0F0F5"/>
             {/* Wifi */}
             <path d="M19 1 C21 1 23 2 24.5 3 C25.5 4 25.5 5 24.5 6 L19 11 L13.5 6 C12.5 5 12.5 4 13.5 3 C15 2 17 1 19 1 Z" fill="#F0F0F5"/>
             {/* Battery */}
             <rect x="29" y="1.5" width="14" height="7.5" rx="1.5" fill="none" stroke="#F0F0F5" strokeWidth="1" />
             <rect x="30.5" y="3" width="9" height="4.5" rx="0.5" fill="#F0F0F5" />
             <rect x="44" y="3.5" width="2" height="3.5" rx="0.5" fill="#F0F0F5" />
          </g>

          {/* Abstract background hint */}
          <rect x="8" y="8" width="244" height="504" rx="22" fill="url(#wallGrad)" opacity="0.4" />

          {/* Android Search Bar */}
          <rect x="20" y="44" width="220" height="36" rx="18" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          
          <g transform="translate(36, 54)">
            {/* Google G Logo simplified */}
            <path d="M7.7 4.2C7.7 3.8 7.6 3.5 7.6 3.1H4.1V5.2H6.2C6.1 5.8 5.7 6.4 5.2 6.8V8.1H6.4C7.1 7.4 7.7 6.0 7.7 4.2Z" fill="#4285F4"/>
            <path d="M4.1 7.9C5.1 7.9 6.0 7.5 6.4 7.0L5.2 5.7C4.8 5.9 4.5 6.0 4.1 6.0C3.3 6.0 2.5 5.5 2.2 4.7H0.9V6.0C1.5 7.2 2.7 7.9 4.1 7.9Z" fill="#34A853"/>
            <path d="M2.2 4.7C2.1 4.5 2.1 4.2 2.1 3.9C2.1 3.7 2.1 3.4 2.2 3.2V1.9H0.9C0.6 2.5 0.5 3.2 0.5 3.9C0.5 4.7 0.6 5.4 0.9 6.0L2.2 4.7Z" fill="#FBBC05"/>
            <path d="M4.1 1.9C4.6 1.9 5.1 2.1 5.5 2.5L6.5 1.5C6.0 1.0 5.1 0.6 4.1 0.6C2.7 0.6 1.5 1.4 0.9 2.6L2.2 3.9C2.5 3.1 3.3 1.9 4.1 1.9Z" fill="#EA4335"/>
          </g>

          {/* Target Timetable Widget */}
          <g transform="translate(14, 100)">
            <rect width="232" height="320" rx="18" fill="#1C1B22" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            
            {/* Header */}
            <text x="18" y="26" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="0.5">WEDNESDAY</text>
            
            {/* Chevron down */}
            <path d="M96 17 L101 22 L106 17" stroke="#A0A0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

            {/* "NO MORE CLASSES" Badge */}
            <rect x="136" y="12" width="78" height="18" rx="9" fill="#29283F" />
            <text x="142" y="24" fill="#8C8BFF" fontSize="6.5" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.5">NO MORE CLASSES</text>

            <line x1="18" y1="42" x2="214" y2="42" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

            {/* Period rows */}
            {periods.map((p, i) => (
              <g key={i}>
                <text x="18" y={p.y + 10} fill="#9BA1A6" fontSize="8" fontFamily="Inter, sans-serif">{p.time}</text>
                
                <text x="76" y={p.y} fill="#8C8BFF" fontSize="6.5" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="0.5">
                  {p.period}
                </text>
                
                {p.subjectLines.map((line, li) => (
                  <text key={li} 
                    x="76" 
                    y={p.y + 14 + (li * 12.5)} 
                    fill="#FFFFFF" 
                    fontSize="9.5" 
                    fontWeight="700" 
                    fontFamily="system-ui, -apple-system, sans-serif"
                  >
                    {line}
                  </text>
                ))}

                <text x="214" y={p.y + 12} fill="#9BA1A6" fontSize="8" fontFamily="Inter, sans-serif" textAnchor="end">{p.room}</text>
              </g>
            ))}

            {/* Bottom Actions */}
            <g transform="translate(18, 290)">
              {/* Trash icon */}
              <circle cx="2" cy="2" r="0.5" fill="#A0A0B0" />
              <path d="M2.5 -1.5 H 6.5 M 1.5 0 H 7.5 M 2.5 0 V 8.5 H 6.5 V 0 M 4.5 -1.5 V 0" stroke="#9BA1A6" strokeWidth="1" fill="none"/>
              <text x="12" y="7" fill="#9BA1A6" fontSize="6.5" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="1.2">CLEAR</text>
            </g>
            
            <text x="116" y="296" fill="#6B6B7B" fontSize="6.5" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="2" textAnchor="middle">
              · PRIVACY SECURED ·
            </text>
          </g>

          {/* Android Navigation Dock Area */}
          <g transform="translate(26, 436)">
            {[0, 1, 2, 3].map(i => (
              <circle key={i} cx={24 + i * 53} cy="18" r="18"
                fill={i === 0 ? 'rgba(123,122,255,0.2)' : 'rgba(255,255,255,0.06)'}
              />
            ))}
          </g>

          {/* Bottom home bar */}
          <rect x="95" y="500" width="70" height="3" rx="1.5" fill="#F0F0F5" opacity="0.6" />

          <defs>
            <linearGradient id="wallGrad" x1="130" y1="0" x2="130" y2="520" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(123,122,255,0.6)" />
              <stop offset="0.7" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative floating badge */}
      <div className="absolute top-6 -right-2 sm:right-0 glass rounded-2xl px-3 py-2 flex items-center gap-2 shadow-glow"
        style={{ animationDelay: '1s', animation: 'float 5s ease-in-out infinite' }}>
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-semibold text-text-primary whitespace-nowrap">Live Widget</span>
      </div>

      {/* Star rating badge */}
      <div className="absolute -left-2 sm:left-0 top-20 glass rounded-2xl px-3 py-2 flex items-center gap-1.5 shadow-glass"
        style={{ animation: 'float 7s ease-in-out 0.5s infinite' }}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>
  );
}

/* ─── Feature Card ─── */
function FeatureCard({ icon: Icon, title, description, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`glass card-hover rounded-3xl p-6 sm:p-7 flex flex-col gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{ background: 'rgba(123,122,255,0.15)', border: '1px solid rgba(123,122,255,0.25)' }}>
        <Icon className="w-6 h-6" style={{ color: '#7B7AFF' }} />
      </div>
      <div>
        <h3 className="text-base font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
      </div>
    </div>
  );
}

/* ─── Step Card ─── */
function StepCard({ number, icon: Icon, title, description, link, linkText, isLast, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative flex gap-5 sm:gap-6">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-5 sm:left-6 top-14 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, rgba(123,122,255,0.4), transparent)' }} />
      )}

      {/* Number bubble */}
      <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(123,122,255,0.25), rgba(123,122,255,0.08))',
          border: '2px solid rgba(123,122,255,0.4)',
          boxShadow: '0 0 20px rgba(123,122,255,0.2)'
        }}>
        <span className="text-sm font-black" style={{ color: '#7B7AFF' }}>{number}</span>
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`pb-10 last:pb-0 flex-1 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="glass rounded-3xl p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-3">
            <Icon className="w-5 h-5 flex-shrink-0" style={{ color: '#7B7AFF' }} />
            <h3 className="font-bold text-text-primary text-base">{title}</h3>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-4 py-2.5 transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                color: '#7B7AFF',
                background: 'rgba(123,122,255,0.12)',
                border: '1px solid rgba(123,122,255,0.25)'
              }}
            >
              {linkText}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Main App ─── */
export default function App() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [downloads, setDownloads] = useState(0);
  const [showBeta, setShowBeta] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Fetch initial download count silently
    fetch('https://api.counterapi.dev/v1/dhiu-tt-downloads/apk')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === 'number') {
          setDownloads(data.count);
        }
      })
      .catch(() => { });

    // Fetch site config (to check if beta channel is enabled)
    fetch(`/config.json?t=${Date.now()}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.showBeta) setShowBeta(true);
      })
      .catch(() => { });
  }, []);

  const handleDownloadClick = () => {
    // Optimistic UI update
    setDownloads(prev => prev + 1);

    // Fire-and-forget API increment
    fetch('https://api.counterapi.dev/v1/dhiu-tt-downloads/apk/up')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === 'number') setDownloads(data.count);
      })
      .catch(() => { });
  };

  const features = [
    {
      icon: Shield,
      title: '100% Private & Local',
      description: 'No accounts. No logins. No servers. Your timetable data lives entirely on your device — never uploaded anywhere.',
    },
    {
      icon: Sparkles,
      title: 'Elegant Design',
      description: 'A gorgeous glassmorphism widget that auto-highlights your current period in real-time. Your home screen, elevated.',
    },
    {
      icon: Zap,
      title: 'Zero Friction',
      description: 'Set it up in under 30 seconds. Import once, glance always. Never open the clunky DHIU portal just to check your schedule again.',
    },
  ];

  const steps = [
    {
      icon: FileDown,
      title: 'Download Your Timetable',
      description: 'Visit the official DHIU student portal and download your personal timetable as a CSV file.',
      link: 'https://pgportal.dhiu.in/my-timetable',
      linkText: 'Open DHIU Portal',
    },
    {
      icon: Upload,
      title: 'Import into the App',
      description: 'Open the DHIU Timetable app, tap "Upload CSV", and select the file you just downloaded. That\'s it.',
    },
    {
      icon: LayoutGrid,
      title: 'Add Widget to Home Screen',
      description: 'Long-press your home screen, add the DHIU Timetable widget, and enjoy your schedule at a glance — always. Voilà!',
    },
  ];

  return (
    <div className="min-h-screen noise-bg" style={{ background: '#121214' }}>

      {/* ── Ambient background glows ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7B7AFF 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #7B7AFF 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="relative z-10">

        {/* ──────────────────────── HERO ──────────────────────── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-5 pt-16 pb-12 sm:pt-20 sm:pb-16">
          {/* Badge */}
          <div
            className={`mb-8 inline-flex items-center gap-2 glass rounded-full px-4 py-2 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7B7AFF' }} />
            <span className="text-xs font-semibold" style={{ color: '#7B7AFF' }}>Now Available — Free Download</span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-black text-center leading-[1.1] tracking-tight max-w-2xl transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Your DHIU Timetable,{' '}
            <span className="text-gradient">Right on Your<br />Home Screen.</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-6 text-base sm:text-lg text-center leading-relaxed max-w-md transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ color: '#A0A0B0' }}
          >
            A beautiful, native Android home screen widget for DHIU students.
            See your daily schedule at a glance — no apps to open, no portals to log into.
          </p>

          {/* CTA Buttons */}
          <div className={`mt-10 flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <a
              href="/dhTimetable.apk"
              download="dhTimetable.apk"
              id="download-apk-btn-stable"
              onClick={handleDownloadClick}
              className="btn-primary inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-bold text-white text-base select-none w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              Download Stable
            </a>
            
            {showBeta && (
              <a
                href="/dhTimetableBeta.apk"
                download="dhTimetableBeta.apk"
                id="download-apk-btn-beta"
                className="inline-flex glass-strong items-center justify-center gap-3 rounded-2xl px-8 py-4 font-bold text-base select-none transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
                style={{ color: '#F0F0F5', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Code className="w-5 h-5 text-amber-400" />
                Get Beta Version
              </a>
            )}
          </div>

          {/* Stats Badge */}
          <div
            className={`mt-5 inline-flex items-center gap-2 glass px-4 py-2 rounded-full transition-all duration-700 delay-400 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <Users className="w-4 h-4 text-text-primary" style={{ color: '#7B7AFF' }} />
            <span className="text-xs font-semibold text-text-secondary">
              Trusted by <strong className="text-text-primary">{downloads > 0 ? downloads : '...'}</strong> students
            </span>
          </div>

          <p
            className={`mt-4 text-xs transition-all duration-700 delay-500 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: '#6B6B7B' }}
          >
            Free · Android 8+ · ~10 MB
          </p>

          {/* Phone Mockup */}
          <div
            className={`mt-16 sm:mt-20 h-[380px] sm:h-[440px] w-full flex justify-center transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <PhoneMockup />
          </div>
        </section>

        {/* ──────────────────────── FEATURES ──────────────────────── */}
        <section id="features" className="px-5 py-16 sm:py-24 max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#7B7AFF' }}>
              Why Use This App?
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-text-primary leading-tight">
              Built for students who hate<br />
              <span className="text-gradient">unnecessary complexity.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} delay={i * 120} />
            ))}
          </div>
        </section>

        {/* ──────────────────────── HOW IT WORKS ──────────────────────── */}
        <section id="how-it-works" className="px-5 py-16 sm:py-24">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12 sm:mb-14">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#7B7AFF' }}>
                How It Works
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-text-primary leading-tight">
                Up and running in{' '}
                <span className="text-gradient">30 seconds.</span>
              </h2>
              <p className="mt-4 text-sm text-text-secondary">Three simple steps. No account required.</p>
            </div>

            <div className="flex flex-col">
              {steps.map((step, i) => (
                <StepCard
                  key={i}
                  number={i + 1}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  link={step.link}
                  linkText={step.linkText}
                  isLast={i === steps.length - 1}
                  delay={i * 150}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────── FINAL CTA ──────────────────────── */}
        <section className="px-5 py-16 sm:py-24">
          <div className="max-w-2xl mx-auto">
            <div className="glass-strong rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
              style={{ boxShadow: '0 0 60px rgba(123,122,255,0.15), 0 30px 80px rgba(0,0,0,0.5)' }}>
              {/* Inner glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123,122,255,0.12), transparent)' }} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-3xl mx-auto mb-6 flex items-center justify-center"
                  style={{ background: 'rgba(123,122,255,0.15)', border: '1px solid rgba(123,122,255,0.3)' }}>
                  <LayoutGrid className="w-8 h-8" style={{ color: '#7B7AFF' }} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-text-primary mb-4 leading-tight">
                  Ready to upgrade<br />your home screen?
                </h2>
                <p className="text-text-secondary text-sm sm:text-base mb-8 leading-relaxed">
                  Join DHIU students who've made checking their timetable<br className="hidden sm:block" /> effortless.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/dhTimetable.apk"
                    download="dhTimetable.apk"
                    id="download-apk-btn-2-stable"
                    onClick={handleDownloadClick}
                    className="btn-primary inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-bold text-white text-base select-none w-full sm:w-auto"
                  >
                    <Download className="w-5 h-5" />
                    Download Stable
                  </a>
                  {showBeta && (
                    <a
                      href="/dhTimetableBeta.apk"
                      download="dhTimetableBeta.apk"
                      id="download-apk-btn-2-beta"
                      className="inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 font-bold text-base select-none transition-all duration-200 hover:bg-white/5 w-full sm:w-auto border"
                      style={{ color: '#F0F0F5', borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <Code className="w-5 h-5 text-amber-400" />
                      Beta Version
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────── FEEDBACK ──────────────────────── */}
        <section id="feedback" className="px-5 py-16 sm:py-24">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#7B7AFF' }}>
                Feedback
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-text-primary leading-tight">
                Got ideas or{' '}
                <span className="text-gradient">found a bug?</span>
              </h2>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-md mx-auto">
                We'd love to hear from you. Share suggestions, report issues, or just say hello — your feedback makes this app better for everyone.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center"
                  style={{ background: 'rgba(123,122,255,0.15)', border: '1px solid rgba(123,122,255,0.25)' }}>
                  <MessageSquare className="w-7 h-7" style={{ color: '#7B7AFF' }} />
                </div>

                {/* Text */}
                <div className="text-center sm:text-left flex-1">
                  <h3 className="font-bold text-text-primary text-base mb-1">Send Us Your Feedback</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Drop us an email with your thoughts, feature requests, or bug reports. We read every single message.
                  </p>
                </div>

                {/* Email Button */}
                <a
                  href="mailto:officialcreative.grp@gmail.com?subject=DHIU%20Timetable%20Widget%20Feedback"
                  id="feedback-email-btn"
                  className="flex-shrink-0 inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95 select-none"
                  style={{
                    color: '#7B7AFF',
                    background: 'rgba(123,122,255,0.12)',
                    border: '1px solid rgba(123,122,255,0.3)',
                    boxShadow: '0 0 20px rgba(123,122,255,0.1)'
                  }}
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                  <Send className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>

              {/* Email display */}
              <div className="mt-5 pt-5 text-center" style={{ borderTop: '1px solid rgba(123,122,255,0.1)' }}>
                <p className="text-xs text-text-muted">
                  Or email us directly at{' '}
                  <a href="mailto:officialcreative.grp@gmail.com" className="font-semibold transition-colors hover:underline" style={{ color: '#7B7AFF' }}>
                    officialcreative.grp@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────── FOOTER ──────────────────────── */}
        <footer className="px-5 py-10 sm:py-12 text-center border-t"
          style={{ borderColor: 'rgba(123,122,255,0.08)' }}>
          <div className="max-w-md mx-auto">
            {/* Logo mark */}
            <div className="w-10 h-10 rounded-2xl mx-auto mb-5 flex items-center justify-center"
              style={{ background: 'rgba(123,122,255,0.12)', border: '1px solid rgba(123,122,255,0.2)' }}>
              <LayoutGrid className="w-5 h-5" style={{ color: '#7B7AFF' }} />
            </div>
            <p className="font-bold text-text-primary mb-2">DHIU Timetable Widget</p>
            <p className="text-sm mb-5" style={{ color: '#7B7AFF' }}>Made with ❤️ for DHIU Students</p>
            <p className="text-xs leading-relaxed" style={{ color: '#6B6B7B' }}>
              This is an unofficial, community-built app and is not affiliated with or endorsed by
              DHIU (Darul Huda Islamic University) or any official body. All timetable data comes
              directly from the official student portal.
            </p>
            <p className="mt-6 text-xs" style={{ color: '#3D3D4D' }}>
              © {new Date().getFullYear()} DHIU Timetable Widget
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
