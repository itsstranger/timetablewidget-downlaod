import { useEffect, useRef, useState } from 'react';
import {
  Download, Shield, Sparkles, Zap, ChevronRight,
  FileDown, Upload, LayoutGrid, ExternalLink, Star,
  MessageSquare, Mail, Send, Users, Code, AlertCircle, Wrench
} from 'lucide-react';

/* ─── "Now & Next" Phone Mockup SVG Widget ─── */
function PhoneMockupFocus() {
  return (
    <div className="relative flex justify-center items-end h-full animate-float" style={{ animationDelay: '0.2s' }}>
      {/* Glow underneath the phone */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-20 rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(140,139,255,0.30) 0%, transparent 70%)' }} />

      {/* Phone shell (Android Pixel Concept) */}
      <div className="relative z-10 w-[250px] sm:w-[270px]" style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.7))' }}>
        <svg viewBox="0 0 260 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {/* Phone body */}
          <rect x="2" y="2" width="256" height="516" rx="28" fill="#121214" stroke="#2A2A30" strokeWidth="2.5" />
          <rect x="8" y="8" width="244" height="504" rx="22" fill="#0A0A0C" />
          <circle cx="130" cy="24" r="5" fill="#040405" />
          
          {/* Status bar */}
          <text x="24" y="28" fill="#F0F0F5" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">10:45</text>
          <g transform="translate(195, 20)">
            <path d="M2.5 7.5 L5 0 L7.5 7.5 Z" fill="#F0F0F5" />
            <path d="M8.5 7.5 L11 0 L13.5 7.5 Z" fill="#F0F0F5" />
            <path d="M19 1 C21 1 23 2 24.5 3 C25.5 4 25.5 5 24.5 6 L19 11 L13.5 6 C12.5 5 12.5 4 13.5 3 C15 2 17 1 19 1 Z" fill="#F0F0F5" />
            <rect x="29" y="1.5" width="14" height="7.5" rx="1.5" fill="none" stroke="#F0F0F5" strokeWidth="1" />
            <rect x="30.5" y="3" width="9" height="4.5" rx="0.5" fill="#F0F0F5" />
            <rect x="44" y="3.5" width="2" height="3.5" rx="0.5" fill="#F0F0F5" />
          </g>

          {/* Background Wallpaper */}
          <rect x="8" y="8" width="244" height="504" rx="22" fill="url(#wallGrad)" opacity="0.6" />
          
          {/* Search bar */}
          <rect x="20" y="44" width="220" height="36" rx="18" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <g transform="translate(36, 54)">
            <path d="M7.7 4.2C7.7 3.8 7.6 3.5 7.6 3.1H4.1V5.2H6.2C6.1 5.8 5.7 6.4 5.2 6.8V8.1H6.4C7.1 7.4 7.7 6.0 7.7 4.2Z" fill="#4285F4" />
            <path d="M4.1 7.9C5.1 7.9 6.0 7.5 6.4 7.0L5.2 5.7C4.8 5.9 4.5 6.0 4.1 6.0C3.3 6.0 2.5 5.5 2.2 4.7H0.9V6.0C1.5 7.2 2.7 7.9 4.1 7.9Z" fill="#34A853" />
            <path d="M2.2 4.7C2.1 4.5 2.1 4.2 2.1 3.9C2.1 3.7 2.1 3.4 2.2 3.2V1.9H0.9C0.6 2.5 0.5 3.2 0.5 3.9C0.5 4.7 0.6 5.4 0.9 6.0L2.2 4.7Z" fill="#FBBC05" />
            <path d="M4.1 1.9C4.6 1.9 5.1 2.1 5.5 2.5L6.5 1.5C6.0 1.0 5.1 0.6 4.1 0.6C2.7 0.6 1.5 1.4 0.9 2.6L2.2 3.9C2.5 3.1 3.3 1.9 4.1 1.9Z" fill="#EA4335" />
          </g>

          {/* FOCUS WIDGET */}
          <g transform="translate(14, 100)">
            {/* Widget Base Surface */}
            <rect width="232" height="236" rx="32" fill="#2A2B32" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

            {/* NOW Badge */}
            <circle cx="26" cy="30" r="3.5" fill="#3EE58E" />
            <text x="35" y="32.5" fill="#D0D0D5" fontSize="8" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="1">NOW</text>

            {/* Time Pill */}
            <rect x="166" y="22" width="48" height="18" rx="9" fill="#1C1D22" />
            <text x="171" y="34" fill="#D0D0D5" fontSize="8" fontFamily="Inter, sans-serif">10:45 AM</text>

            {/* Title & Subtitle */}
            <text x="22" y="68" fill="#FFFFFF" fontSize="21" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="-0.5">Quantum Physics</text>
            <path d="M 27 77 C 25 77 24 78 24 80 C 24 83 27 86 27 86 C 27 86 30 83 30 80 C 30 78 29 77 27 77 Z M 27 81.5 C 26 81.5 25.5 81 25.5 80 C 25.5 79 26 78.5 27 78.5 C 28 78.5 28.5 79 28.5 80 C 28.5 81 28 81.5 27 81.5 Z" fill="#8C8BFF" />
            <text x="36" y="85" fill="#8C8BFF" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">Room 402 - Science Block</text>

            {/* Progress Bar Region */}
            <text x="22" y="117" fill="#A0A0B0" fontSize="8.5" fontFamily="Inter, sans-serif">Started 10:00</text>
            <text x="210" y="117" fill="#A0A0B0" fontSize="8.5" fontFamily="Inter, sans-serif" textAnchor="end">Ends 11:30</text>
            
            <rect x="22" y="124" width="188" height="5" rx="2.5" fill="#1C1D22" />
            <rect x="22" y="124" width="112" height="5" rx="2.5" fill="#8C8BFF" />

            <text x="210" y="142" fill="#8C8BFF" fontSize="8.5" fontFamily="Inter, sans-serif" textAnchor="end">45 mins left</text>
            
            {/* Divider shadow hack via rect */}
            <rect x="22" y="160" width="188" height="1" fill="rgba(0,0,0,0.1)" />

            {/* NEXT UP Block */}
            <circle cx="34" cy="192" r="14" fill="#1C1D22" />
            {/* Clock icon */}
            <circle cx="34" cy="192" r="6" fill="none" stroke="#D0D0D5" strokeWidth="1.5" />
            <path d="M 34 189 V 192 L 36 193.5" stroke="#D0D0D5" fill="none" strokeWidth="1.5" />

            <text x="56" y="184" fill="#A0A0B0" fontSize="7" fontWeight="bold" fontFamily="Inter, sans-serif" letterSpacing="1.2">NEXT UP • 12:00 PM</text>
            <text x="56" y="196" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="Inter, sans-serif">Advanced Calculus</text>
            <text x="56" y="208" fill="#A0A0B0" fontSize="8" fontFamily="Inter, sans-serif">Room 105 - Main Building</text>
          </g>

          {/* Nav Dock */}
          <g transform="translate(26, 436)">
            {[0, 1, 2, 3].map(i => (
              <circle key={i} cx={24 + i * 53} cy="18" r="18"
                fill={i === 0 ? 'rgba(140,139,255,0.2)' : 'rgba(255,255,255,0.06)'}
              />
            ))}
          </g>
          {/* Bottom home bar */}
          <rect x="90" y="492" width="80" height="4" rx="2" fill="#FFFFFF" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

/* ─── List View Phone Mockup SVG Widget ─── */

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
            <path d="M2.5 7.5 L5 0 L7.5 7.5 Z" fill="#F0F0F5" />
            <path d="M8.5 7.5 L11 0 L13.5 7.5 Z" fill="#F0F0F5" />
            {/* Wifi */}
            <path d="M19 1 C21 1 23 2 24.5 3 C25.5 4 25.5 5 24.5 6 L19 11 L13.5 6 C12.5 5 12.5 4 13.5 3 C15 2 17 1 19 1 Z" fill="#F0F0F5" />
            {/* Battery */}
            <rect x="29" y="1.5" width="14" height="7.5" rx="1.5" fill="none" stroke="#F0F0F5" strokeWidth="1" />
            <rect x="30.5" y="3" width="9" height="4.5" rx="0.5" fill="#F0F0F5" />
            <rect x="44" y="3.5" width="2" height="3.5" rx="0.5" fill="#F0F0F5" />
          </g>

          {/* Abstract background hint */}
          <rect x="8" y="8" width="244" height="504" rx="22" fill="url(#wallGrad)" opacity="0.4" />

          {/* Android Search Bar */}
          <rect x="20" y="44" width="220" height="36" rx="18" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

          <g transform="translate(36, 54)">
            {/* Google G Logo simplified */}
            <path d="M7.7 4.2C7.7 3.8 7.6 3.5 7.6 3.1H4.1V5.2H6.2C6.1 5.8 5.7 6.4 5.2 6.8V8.1H6.4C7.1 7.4 7.7 6.0 7.7 4.2Z" fill="#4285F4" />
            <path d="M4.1 7.9C5.1 7.9 6.0 7.5 6.4 7.0L5.2 5.7C4.8 5.9 4.5 6.0 4.1 6.0C3.3 6.0 2.5 5.5 2.2 4.7H0.9V6.0C1.5 7.2 2.7 7.9 4.1 7.9Z" fill="#34A853" />
            <path d="M2.2 4.7C2.1 4.5 2.1 4.2 2.1 3.9C2.1 3.7 2.1 3.4 2.2 3.2V1.9H0.9C0.6 2.5 0.5 3.2 0.5 3.9C0.5 4.7 0.6 5.4 0.9 6.0L2.2 4.7Z" fill="#FBBC05" />
            <path d="M4.1 1.9C4.6 1.9 5.1 2.1 5.5 2.5L6.5 1.5C6.0 1.0 5.1 0.6 4.1 0.6C2.7 0.6 1.5 1.4 0.9 2.6L2.2 3.9C2.5 3.1 3.3 1.9 4.1 1.9Z" fill="#EA4335" />
          </g>

          {/* Target Timetable Widget */}
          <g transform="translate(14, 100)">
            <rect width="232" height="320" rx="18" fill="#1C1B22" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

            {/* Header */}
            <text x="18" y="26" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="0.5">WEDNESDAY</text>

            {/* Chevron down */}
            <path d="M96 17 L101 22 L106 17" stroke="#A0A0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

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

                {p.subjectLines.map((line, li) => {
                  const isArabic = /[\u0600-\u06FF]/.test(line);
                  return (
                    <text key={li}
                      x={isArabic ? "214" : "76"}
                      y={p.y + 14 + (li * 12.5)}
                      fill="#FFFFFF"
                      fontSize="9.5"
                      fontWeight="700"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      textAnchor={isArabic ? "end" : "start"}
                    >
                      {line}
                    </text>
                  );
                })}

                <text x="214" y={p.y + 12} fill="#9BA1A6" fontSize="8" fontFamily="Inter, sans-serif" textAnchor="end">{p.room}</text>
              </g>
            ))}

            {/* Bottom Actions */}
            <g transform="translate(18, 290)">
              {/* Trash icon */}
              <circle cx="2" cy="2" r="0.5" fill="#A0A0B0" />
              <path d="M2.5 -1.5 H 6.5 M 1.5 0 H 7.5 M 2.5 0 V 8.5 H 6.5 V 0 M 4.5 -1.5 V 0" stroke="#9BA1A6" strokeWidth="1" fill="none" />
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
      className={`glass card-hover rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-2xl flex flex-shrink-0 items-center justify-center"
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
    <div className="relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 w-full">
      {/* Connector line - hidden on mobile logic since it's centered, or adjust to center line */}
      {!isLast && (
        <div className="absolute left-1/2 sm:left-6 -translate-x-1/2 sm:translate-x-0 top-14 bottom-0 w-px hidden sm:block"
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
        className={`pb-10 sm:pb-10 last:pb-0 flex-1 w-full transition-all duration-700 ${visible ? 'opacity-100 translate-y-0 sm:translate-x-0' : 'opacity-0 translate-y-6 sm:translate-x-6'}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="glass rounded-3xl p-5 sm:p-6 flex flex-col items-center sm:items-start">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
            <Icon className="w-5 h-5 flex-shrink-0" style={{ color: '#7B7AFF' }} />
            <h3 className="font-bold text-text-primary text-base">{title}</h3>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-xl px-4 py-2.5 transition-all duration-200 hover:scale-105 active:scale-95"
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
  const [visits, setVisits] = useState(0);
  const [showBeta, setShowBeta] = useState(false);
  const [showLucky, setShowLucky] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Fetch initial download count silently
    fetch('https://api.counterapi.dev/v1/dhiu-tt-downloads/apk/')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === 'number') {
          setDownloads(data.count);
        }
      })
      .catch(() => { });

    // Record site visit and fetch total visits
    fetch('https://api.counterapi.dev/v1/dhiu-tt-downloads/site_visits/up')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === 'number') {
          setVisits(data.count);
        }
      })
      .catch(() => { });

    // Fetch site config
    fetch(`/config.json?t=${Date.now()}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          if (data.showBeta) setShowBeta(true);
          if (data.showLucky) setShowLucky(true);
          setMaintenanceMode(!!data.maintenanceMode);
        } else {
          setMaintenanceMode(false);
        }
      })
      .catch(() => { setMaintenanceMode(false); });
  }, []);

  if (maintenanceMode === null) {
    return <div className="min-h-screen bg-[#060608]"></div>;
  }

  if (maintenanceMode === true) {
    return (
      <div className="min-h-screen bg-[#060608] flex items-center justify-center p-6 text-center font-sans relative overflow-hidden">
        {/* Glow underneath */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 60%)' }}></div>
        
        <div className="relative z-10 glass rounded-3xl p-8 sm:p-12 max-w-lg shadow-2xl flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
            <Wrench className="w-8 h-8 text-red-500 animate-bounce" />
          </div>
          <h1 className="text-3xl font-black text-white mb-4">Under Maintenance</h1>
          <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
            We're currently squashing some bugs and adding shiny new features! The site will be back online shortly. Please check back soon.
          </p>

          <div className="bg-[#121214] border border-[#2a2a30] rounded-2xl p-5 mb-8 w-full text-left shadow-lg">
             <h4 className="font-bold text-text-primary text-sm mb-2 flex items-center justify-between">
               A Huge Thank You! 
               <span className="text-red-500 text-lg">❤️</span>
             </h4>
             <p className="text-text-muted text-xs leading-relaxed mb-4">
               We deeply appreciate every single one of you who has supported the widget by downloading and using it!
             </p>
             <div className="flex gap-3">
               <div className="bg-white/5 border border-white/5 flex-1 px-4 py-3 rounded-xl flex flex-col items-center">
                 <p className="text-[#7B7AFF] font-black text-xl mb-1">{downloads > 0 ? downloads : '...'}</p>
                 <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Downloads</p>
               </div>
               <div className="bg-white/5 border border-white/5 flex-1 px-4 py-3 rounded-xl flex flex-col items-center">
                 <p className="text-fuchsia-400 font-black text-xl mb-1">{visits > 0 ? visits : '...'}</p>
                 <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Site Visits</p>
               </div>
             </div>
          </div>

          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-[bounce_1s_infinite_0ms]"></div>
            <div className="w-2 h-2 rounded-full bg-red-500 animate-[bounce_1s_infinite_200ms]"></div>
            <div className="w-2 h-2 rounded-full bg-red-500 animate-[bounce_1s_infinite_400ms]"></div>
          </div>
        </div>
      </div>
    );
  }

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
              className="relative btn-primary inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-bold text-white text-base select-none w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              Download Simple
              <div className="absolute -top-2.5 -right-2 bg-fuchsia-500 text-white text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full shadow-lg border border-fuchsia-400 rotate-12 animate-pulse">
                New Update
              </div>
            </a>

            {showBeta && (
              <a
                href="/dhTimetableBeta.apk"
                download="dhTimetableBeta.apk"
                id="download-apk-btn-beta"
                className="relative inline-flex glass-strong items-center justify-center gap-3 rounded-2xl px-8 py-4 font-bold text-base select-none transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
                style={{ color: '#F0F0F5', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Star className="w-5 h-5 text-amber-400" />
                Download Pro
                <div className="absolute -top-3 -right-2 bg-amber-500 text-white text-[10px] uppercase font-black px-2 py-0.5 rounded-full shadow-md border border-amber-400 rotate-12">
                  BETA
                </div>
              </a>
            )}

            {showLucky && (
              <a
                href="/dhTimetableTest.apk"
                download="dhTimetableTest.apk"
                id="download-apk-btn-lucky"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold text-sm select-none transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto text-text-secondary hover:text-fuchsia-100"
                title="Secret Test Sandbox"
              >
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                I'm Feeling Lucky
              </a>
            )}
          </div>

          {/* Stats Badge */}
          <div
            className={`mt-5 inline-flex items-center gap-2 glass px-4 py-2 rounded-full transition-all duration-700 delay-400 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <Download className="w-4 h-4 text-text-primary" style={{ color: '#7B7AFF' }} />
            <span className="text-xs font-semibold text-text-secondary">
              <strong className="text-text-primary">{downloads > 0 ? downloads : '...'}</strong> Downloads
            </span>
          </div>

          <div className={`mt-4 flex flex-col items-center gap-3 transition-all duration-700 delay-500 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xs" style={{ color: '#6B6B7B' }}>
              Free · Android 8+ · ~10 MB
            </p>
            
            {/* Update Notice */}
            <div className="flex items-start justify-center text-left sm:items-center sm:text-center gap-2.5 bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 rounded-xl max-w-sm mt-1 mx-4">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-xs text-amber-200/90 leading-relaxed font-medium">
                <strong>Updating?</strong> You must uninstall your previous version before installing a new update.
              </p>
            </div>
          </div>

          {/* Phone Mockups Container */}
          <div
            className={`mt-16 sm:mt-24 w-full flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="h-[380px] sm:h-[440px] flex-shrink-0 z-20">
              <PhoneMockupFocus />
            </div>
            
            <div className="h-[380px] sm:h-[440px] flex-shrink-0 hidden md:block opacity-60 hover:opacity-100 transition-opacity duration-500 hover:z-30 relative md:-ml-8 lg:ml-0 group">
              <PhoneMockup />
            </div>
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

        {/* ──────────────────────── WALKTHROUGH ──────────────────────── */}
        <section id="walkthrough" className="px-5 py-16 sm:py-24 max-w-5xl mx-auto border-t border-white/5">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#7B7AFF' }}>
              Deep Dive
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-text-primary leading-tight">
              Functions & <span className="text-gradient">Widgets</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
              A complete walkthrough of the app’s functions and a breakdown of the two specialized home-screen widgets included.
            </p>
          </div>

          <div className="space-y-16">
            {/* 1. Core App Experience */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-6 flex items-center justify-center sm:justify-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#7B7AFF]/10 border border-[#7B7AFF]/20 flex items-center justify-center text-[#7B7AFF] text-sm hidden sm:flex">1</div>
                1. The Core App Experience
              </h3>
              <div className="grid sm:grid-cols-3 gap-5 text-left">
                <div className="glass rounded-3xl p-6">
                  <h4 className="font-bold text-text-primary mb-3 text-sm">A. Atmospheric Timeline</h4>
                  <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
                    <li><strong className="text-text-primary">Live Tracking:</strong> Auto-highlights your current activity with a "LIVE" indicator and countdown bar.</li>
                    <li><strong className="text-text-primary">Vertical Flow:</strong> Upcoming periods are linked by a sleek vertical timeline layout.</li>
                    <li><strong className="text-text-primary">Quick Scan:</strong> Tap the weekday selector to instantly preview tomorrow or later.</li>
                  </ul>
                </div>
                <div className="glass rounded-3xl p-6">
                  <h4 className="font-bold text-text-primary mb-3 text-sm">B. Schedule Editor</h4>
                  <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
                    <li><strong className="text-text-primary">Drag-and-Drop:</strong> Long-press to logically rearrange any subject smoothly.</li>
                    <li><strong className="text-text-primary">Rapid Entry:</strong> Tap to edit details in-line without any complex separate menus.</li>
                    <li><strong className="text-text-primary">Smart Sync:</strong> Changes instantly auto-sync to your widgets in real-time.</li>
                  </ul>
                </div>
                <div className="glass rounded-3xl p-6">
                  <h4 className="font-bold text-text-primary mb-3 text-sm">C. Onboarding & Settings</h4>
                  <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
                    <li><strong className="text-text-primary">CSV Import:</strong> Skip manual entry completely by uploading your schedule directly.</li>
                    <li><strong className="text-text-primary">Customization:</strong> Toggle 12h/24h formats, class notifications, and "Interface Scale".</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. The Widgets */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-6 flex items-center justify-center sm:justify-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 text-sm hidden sm:flex">2</div>
                2. Your Home Screen Command Center
              </h3>
              <p className="text-sm text-text-secondary mb-6 text-center sm:text-left">The app provides two distinct widgets, each serving a specific psychological use case:</p>
              <div className="grid sm:grid-cols-2 gap-5 text-left">
                <div className="glass rounded-3xl p-6 sm:border-l-4 border-l-fuchsia-500/50">
                  <h4 className="font-bold text-text-primary mb-2 text-base">Widget #1: The Full Timeline</h4>
                  <p className="text-xs text-fuchsia-400 font-semibold mb-4 uppercase tracking-wider">List View</p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    <strong className="text-text-primary">The Function:</strong> A scrollable list of your entire day’s schedule.
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">The Use Case:</strong> Best for users who want the "Big Picture". Placed on a secondary home screen, it details your 8:00 AM to 5:00 PM day without unlocking the app.
                  </p>
                </div>
                <div className="glass rounded-3xl p-6 sm:border-l-4 border-l-[#7B7AFF]/50">
                  <h4 className="font-bold text-text-primary mb-2 text-base">Widget #2: "Now & Next"</h4>
                  <p className="text-xs text-[#7B7AFF] font-semibold mb-4 uppercase tracking-wider">Focus View</p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    <strong className="text-text-primary">The Function:</strong> A high-contrast display showing exactly what you are doing right now and what happens immediately after.
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">The Use Case:</strong> For the high-pressure user rushing between classes. Minimizes cognitive load by filtering out the rest of the day.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Summary of Use Cases */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-6 flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm hidden sm:flex">3</div>
                3. Summary of Use Cases
              </h3>
              <div className="glass rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10">
                        <th className="p-4 sm:p-5 text-sm font-semibold text-text-primary w-1/3">Feature</th>
                        <th className="p-4 sm:p-5 text-sm font-semibold text-text-primary">Best For...</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-text-secondary divide-y divide-white/5">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 sm:p-5 font-semibold text-text-primary">CSV Upload</td>
                        <td className="p-4 sm:p-5">New users migrating from a spreadsheet or school portal.</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 sm:p-5 font-semibold text-text-primary">"Now & Next" Widget</td>
                        <td className="p-4 sm:p-5">Between-class transitions where speed is everything.</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 sm:p-5 font-semibold text-text-primary">Timeline Progress Bar</td>
                        <td className="p-4 sm:p-5">Knowing exactly how much time is left in a boring lecture or meeting.</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 sm:p-5 font-semibold text-text-primary">Drag-and-Drop Editor</td>
                        <td className="p-4 sm:p-5">Quick adjustments when a class is canceled or moved.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-center text-sm text-text-secondary mt-10 italic max-w-2xl mx-auto px-4">
                With these tools, dhTimetable ensures you spend less time looking at your schedule and more time being present in your day.
              </p>
            </div>

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

            <div className="flex flex-col items-center">
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
                    className="relative btn-primary inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-bold text-white text-base select-none w-full sm:w-auto"
                  >
                    <Download className="w-5 h-5" />
                    Download Simple
                    <div className="absolute -top-2.5 -right-2 bg-fuchsia-500 text-white text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full shadow-lg border border-fuchsia-400 rotate-12 animate-pulse">
                      New Update
                    </div>
                  </a>
                  {showBeta && (
                    <a
                      href="/dhTimetableBeta.apk"
                      download="dhTimetableBeta.apk"
                      id="download-apk-btn-2-beta"
                      className="relative inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 font-bold text-base select-none transition-all duration-200 hover:bg-white/5 w-full sm:w-auto border"
                      style={{ color: '#F0F0F5', borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <Star className="w-5 h-5 text-amber-400" />
                      Download Pro
                      <div className="absolute -top-3 -right-2 bg-amber-500 text-white text-[10px] uppercase font-black px-2 py-0.5 rounded-full shadow-md border border-amber-400 rotate-12">
                        BETA
                      </div>
                    </a>
                  )}

                  {showLucky && (
                    <a
                      href="/dhTimetableTest.apk"
                      download="dhTimetableTest.apk"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold text-sm select-none transition-all duration-200 hover:bg-white/5 w-full sm:w-auto text-text-secondary hover:text-fuchsia-100"
                      title="Secret Test Sandbox"
                    >
                      <Sparkles className="w-4 h-4 text-fuchsia-400" />
                      I'm Feeling Lucky
                    </a>
                  )}
                </div>

                {/* Secondary Update Notice */}
                <div className="mt-6 flex justify-center">
                  <div className="flex items-start justify-center text-left sm:items-center sm:text-center gap-2.5 bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 rounded-xl max-w-sm">
                    <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <p className="text-xs text-amber-200/90 leading-relaxed font-medium">
                      <strong>Updating?</strong> You must uninstall your previous version before installing a new update.
                    </p>
                  </div>
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
