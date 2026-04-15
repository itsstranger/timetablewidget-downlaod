import { useEffect, useRef, useState } from 'react';
import {
  Download, Shield, Sparkles, Zap, ChevronRight,
  FileDown, Upload, LayoutGrid, ExternalLink, Star
} from 'lucide-react';

/* ─── Phone Mockup SVG Widget ─── */
function PhoneMockup() {
  const now = new Date();
  const currentHour = now.getHours();

  const periods = [
    { time: '08:00', subject: 'Islamic Studies', room: 'Hall A', active: currentHour === 8 },
    { time: '09:30', subject: 'Data Structures', room: 'Lab 3', active: currentHour === 9 },
    { time: '11:00', subject: 'Linear Algebra', room: 'Room 204', active: currentHour === 11 },
    { time: '12:30', subject: 'Lunch Break', room: '—', active: currentHour === 12 },
    { time: '14:00', subject: 'Web Dev', room: 'Lab 1', active: currentHour === 14 },
  ];

  // Always highlight one for demo
  const demoActive = periods.findIndex(p => p.active);
  const activeIdx = demoActive !== -1 ? demoActive : 2;

  return (
    <div className="relative flex justify-center items-end h-full animate-float">
      {/* Glow underneath the phone */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-20 rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(123,122,255,0.35) 0%, transparent 70%)' }} />

      {/* Phone shell */}
      <div className="relative z-10 w-[220px] sm:w-[240px]" style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.7))' }}>
        <svg viewBox="0 0 240 490" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {/* Phone body */}
          <rect x="2" y="2" width="236" height="486" rx="36" fill="#0D0D0F" stroke="#2A2A30" strokeWidth="3" />
          {/* Screen background */}
          <rect x="10" y="10" width="220" height="470" rx="30" fill="#121214" />
          {/* Notch */}
          <rect x="85" y="14" width="70" height="16" rx="8" fill="#0D0D0F" />
          {/* Status bar */}
          <text x="22" y="40" fill="#A0A0B0" fontSize="9" fontFamily="Inter, sans-serif">9:41</text>
          <text x="210" y="40" fill="#A0A0B0" fontSize="9" fontFamily="Inter, sans-serif" textAnchor="end">●●●</text>

          {/* Wallpaper hint */}
          <rect x="10" y="10" width="220" height="470" rx="30" fill="url(#wallGrad)" opacity="0.3" />

          {/* Home screen icons grid - tiny */}
          {[0,1,2,3].map(i => (
            <rect key={i} x={22 + i * 52} y="60" width="38" height="38" rx="10"
              fill={i === 0 ? 'rgba(123,122,255,0.25)' : 'rgba(255,255,255,0.05)'}
              stroke={i === 0 ? 'rgba(123,122,255,0.5)' : 'none'}
            />
          ))}
          {/* Widget area on home screen */}
          {/* Widget background glass */}
          <rect x="16" y="112" width="208" height="230" rx="22"
            fill="rgba(30,30,33,0.85)" stroke="rgba(123,122,255,0.2)" strokeWidth="1" />
          {/* Widget header */}
          <text x="30" y="137" fill="#7B7AFF" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">
            DHIU TIMETABLE
          </text>
          <text x="30" y="149" fill="#6B6B7B" fontSize="7.5" fontFamily="Inter, sans-serif">
            Mon, 15 April
          </text>
          {/* Divider */}
          <line x1="30" y1="156" x2="210" y2="156" stroke="rgba(123,122,255,0.12)" strokeWidth="1" />

          {/* Period rows */}
          {periods.map((p, i) => (
            <g key={i}>
              {/* Active highlight */}
              {i === activeIdx && (
                <rect x="16" y={162 + i * 36} width="208" height="34"
                  fill="rgba(123,122,255,0.15)" />
              )}
              {i === activeIdx && (
                <rect x="16" y={162 + i * 36} width="3" height="34"
                  fill="#7B7AFF" rx="1.5" />
              )}
              {/* Time */}
              <text x="27" y={173 + i * 36}
                fill={i === activeIdx ? '#7B7AFF' : '#6B6B7B'}
                fontSize="7" fontFamily="Inter, sans-serif" fontWeight={i === activeIdx ? '600' : '400'}>
                {p.time}
              </text>
              {/* Subject */}
              <text x="65" y={173 + i * 36}
                fill={i === activeIdx ? '#F0F0F5' : '#A0A0B0'}
                fontSize="8.5" fontFamily="Inter, sans-serif" fontWeight={i === activeIdx ? '600' : '400'}>
                {p.subject}
              </text>
              {/* Room */}
              <text x="65" y={183 + i * 36}
                fill={i === activeIdx ? '#7B7AFF' : '#6B6B7B'}
                fontSize="7" fontFamily="Inter, sans-serif">
                {p.room}
              </text>
              {/* NOW badge */}
              {i === activeIdx && (
                <rect x="178" y={165 + i * 36} width="28" height="12" rx="6"
                  fill="rgba(123,122,255,0.3)" />
              )}
              {i === activeIdx && (
                <text x="192" y={174 + i * 36}
                  fill="#7B7AFF" fontSize="6.5" fontFamily="Inter, sans-serif"
                  fontWeight="700" textAnchor="middle">NOW</text>
              )}
            </g>
          ))}

          {/* Bottom home bar */}
          <rect x="90" y="468" width="60" height="4" rx="2" fill="#2A2A30" />

          <defs>
            <linearGradient id="wallGrad" x1="120" y1="10" x2="120" y2="480" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7B7AFF" stopOpacity="0.4" />
              <stop offset="1" stopColor="#121214" stopOpacity="0" />
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

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

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

          {/* CTA Button */}
          <a
            href="/DHIU Timetable.apk"
            download="DHIU-Timetable.apk"
            id="download-apk-btn"
            className={`mt-10 btn-primary inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-bold text-white text-base sm:text-lg select-none transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <Download className="w-5 h-5" />
            Download APK
            <ChevronRight className="w-4 h-4 opacity-70" />
          </a>
          <p
            className={`mt-3 text-xs transition-all duration-700 delay-400 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
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
                <a
                  href="/DHIU Timetable.apk"
                  download="DHIU-Timetable.apk"
                  id="download-apk-btn-2"
                  className="btn-primary inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-bold text-white text-base select-none"
                >
                  <Download className="w-5 h-5" />
                  Download Free APK
                </a>
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
