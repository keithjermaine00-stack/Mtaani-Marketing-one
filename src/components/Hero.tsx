import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Target } from 'lucide-react';

function useCounter(target: number, duration = 2000, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);
  return val;
}

const barData = [
  { month: 'May',  heights: [28, 42, 22] },
  { month: 'Jun',  heights: [36, 28, 44] },
  { month: 'Jul',  heights: [52, 38, 48] },
  { month: 'Aug',  heights: [82, 74, 88] },
  { month: 'Sep',  heights: [44, 34, 52] },
];

type Phase = 'idle' | 'abstract' | 'campaign' | 'goal' | 'settled';

export default function Hero() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [active, setActive] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateOffset = () => {
      if (rightPanelRef.current && cardsContainerRef.current) {
        const rightRect = rightPanelRef.current.getBoundingClientRect();
        const cardsRect = cardsContainerRef.current.getBoundingClientRect();
        if (rightRect.width > 0) {
          const dx = rightRect.left - cardsRect.left;
          const rightCenter = rightRect.top + rightRect.height / 2;
          const cardsCenter = cardsRect.top + cardsRect.height / 2;
          const dy = rightCenter - cardsCenter;
          setOffset({ x: dx, y: dy });
        }
      }
    };

    requestAnimationFrame(() => requestAnimationFrame(calculateOffset));

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase('abstract'), 100));
    timers.push(setTimeout(() => setPhase('campaign'), 500));
    timers.push(setTimeout(() => setPhase('goal'), 1100));
    timers.push(setTimeout(() => setPhase('settled'), 1900));

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (phase === 'campaign') setActive(true);
  }, [phase]);

  const impressions = useCounter(18256, 2200, active);
  const goalVal = useCounter(11560, 2400, active);

  const getCardStyle = (cardPhase: 'campaign' | 'goal') => {
    const isVisible =
      phase === 'settled' ||
      (cardPhase === 'campaign' && (phase === 'campaign' || phase === 'goal')) ||
      (cardPhase === 'goal' && phase === 'goal');
    const isOnAbstract = isVisible && phase !== 'settled';
    const extraY = cardPhase === 'goal' && !isVisible ? 30 : 0;

    return {
      opacity: isVisible ? 1 : 0,
      transform: !isVisible
        ? `translate(${offset.x}px, ${offset.y + extraY}px) scale(0.92)`
        : isOnAbstract
        ? `translate(${offset.x}px, ${offset.y}px) scale(1.03)`
        : 'translate(0px, 0px) scale(1)',
      transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease',
    };
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-spotify-dark-base"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 30% 60%, rgba(29,185,84,0.07) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-spotify-black to-transparent z-10 pointer-events-none" />

      {/* ── Main grid ─────────────────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-10 xl:gap-16 items-center">

          {/* ── LEFT ──────────────────────────────────────────────── */}
          <div className="flex flex-col">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass self-start mb-6"
              style={{ animation: 'fadeUp 0.6s ease forwards', animationDelay: '2.5s', opacity: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-spotify-green animate-pulse" />
              <span className="section-label">Nairobi, Kenya — Digital Ecosystems</span>
            </div>

            {/* Giant headline */}
            <h1 className="font-black tracking-tighter leading-[0.92] mb-7"
              style={{ fontSize: 'clamp(3.4rem, 8vw, 6.5rem)' }}>
              <span
                className="block text-white overflow-hidden"
                style={{ animation: 'slideUp 0.7s cubic-bezier(.16,1,.3,1) forwards', animationDelay: '2.6s', opacity: 0 }}
              >
                Data
              </span>
              <span
                className="block gradient-text overflow-hidden"
                style={{ animation: 'slideUp 0.7s cubic-bezier(.16,1,.3,1) forwards', animationDelay: '2.74s', opacity: 0 }}
              >
                Driven
              </span>
              <span
                className="block text-white overflow-hidden"
                style={{ animation: 'slideUp 0.7s cubic-bezier(.16,1,.3,1) forwards', animationDelay: '2.88s', opacity: 0 }}
              >
                Marketing.
              </span>
            </h1>

            {/* ── Dashboard cards ─────────────────────────────────── */}
            <div
              ref={cardsContainerRef}
              className="relative mb-8 h-[260px] sm:h-[280px]"
              style={{ zIndex: 30 }}
            >
              {/* Campaign Report card */}
              <div
                className="absolute top-0 left-0 glass-card rounded-2xl p-5 w-[270px] sm:w-[300px] z-10"
                style={getCardStyle('campaign')}
              >
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">
                  Campaign Report
                </p>

                {/* Main number */}
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-white font-black text-3xl">
                    {impressions.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 text-spotify-green text-xs font-bold bg-spotify-green/15 px-2 py-0.5 rounded-full">
                    <ArrowUpRight size={11} />
                    23%
                  </span>
                  <span className="text-white/30 text-xs">vs last month</span>
                </div>
                <p className="text-white/30 text-[11px] mb-4">Impressions · October 2025</p>

                {/* Target line label */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] text-white font-semibold bg-white/10 px-2 py-0.5 rounded-full">
                    Target: 13K
                  </span>
                  <div className="flex-1 border-t border-dashed border-white/15" />
                </div>

                {/* Bar chart */}
                <div className="flex items-end justify-between gap-2 mt-1">
                  {barData.map((d, gi) => {
                    const isHighlight = gi === 3;
                    return (
                      <div key={d.month} className="flex flex-col items-center gap-1 flex-1">
                        <div className="flex items-end gap-[2px] h-14">
                          {d.heights.map((h, bi) => (
                            <div
                              key={bi}
                              className={`w-[6px] rounded-sm transition-all duration-700 ${
                                isHighlight
                                  ? bi === 2
                                    ? 'bg-spotify-green'
                                    : 'bg-spotify-green/50'
                                  : bi === 2
                                  ? 'bg-white/30'
                                  : 'bg-white/12'
                              }`}
                              style={{
                                height: active ? `${h * 0.56}px` : '4px',
                                transitionDelay: `${gi * 0.08 + bi * 0.03}s`,
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-white/30 text-[9px]">{d.month}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Goal Achievement card */}
              <div
                className="absolute bottom-0 left-[230px] sm:left-[280px] z-20 rounded-2xl p-5 w-[200px] sm:w-[220px]"
                style={{
                  ...getCardStyle('goal'),
                  background: 'linear-gradient(135deg, #1DB954 0%, #15a347 100%)',
                  boxShadow: '0 20px 60px rgba(29,185,84,0.35)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Target size={14} className="text-black/60" />
                  <p className="text-black/70 text-xs font-bold uppercase tracking-wider">
                    Goal Achievement
                  </p>
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-black font-black text-2xl">
                    {goalVal.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 bg-black/15 text-black/80 text-xs font-bold px-2 py-0.5 rounded-full">
                    <ArrowUpRight size={10} />
                    54%
                  </span>
                </div>
                <p className="text-black/50 text-[11px]">October 2025</p>

                {/* Progress bar */}
                <div className="mt-3 h-1.5 rounded-full bg-black/15 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-black/40 transition-all duration-1000 ease-out"
                    style={{ width: active ? '54%' : '0%', transitionDelay: '0.3s' }}
                  />
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <p
              className="text-spotify-subdued text-base sm:text-lg leading-relaxed max-w-md mb-8"
              style={{ animation: 'fadeUp 0.7s ease forwards', animationDelay: '3s', opacity: 0 }}
            >
              We help businesses attract the right audience through data-driven digital ecosystems — built for measurable, compounding growth.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3"
              style={{ animation: 'fadeUp 0.7s ease forwards', animationDelay: '3.1s', opacity: 0 }}
            >
              <a href="#services" className="btn-primary text-sm px-7 py-3.5 group">
                Explore Services
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-outline text-sm px-7 py-3.5">
                Let's Talk
              </a>
            </div>
          </div>

          {/* ── RIGHT – abstract visual panel ──────────────────────── */}
          <div
            ref={rightPanelRef}
            className="hidden lg:block"
            style={{ animation: 'fadeUp 0.8s cubic-bezier(.16,1,.3,1) forwards', animationDelay: '0.1s', opacity: 0 }}
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 rounded-3xl bg-spotify-green/10 blur-2xl" />

              {/* Main abstract visual card */}
              <div className="relative rounded-3xl overflow-hidden" style={{ height: '580px' }}>
                {/* Abstract gradient base */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 20%, #1DB954 0%, transparent 50%), radial-gradient(circle at 80% 70%, #15a347 0%, transparent 45%), radial-gradient(circle at 50% 90%, #0d5c2e 0%, transparent 40%), linear-gradient(135deg, #0d0d0d 0%, #181818 100%)',
                  }}
                />
                {/* Flowing wave shapes */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 580" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="wave1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1DB954" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#1DB954" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="wave2" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1ed760" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#1ed760" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="wave3" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0d5c2e" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0d5c2e" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M-50,150 Q100,100 200,180 T450,160 L450,0 L-50,0 Z"
                    fill="url(#wave1)"
                  />
                  <path
                    d="M-50,300 Q120,250 220,320 T450,290 L450,200 T-50,220 Z"
                    fill="url(#wave2)"
                  />
                  <path
                    d="M-50,500 Q100,440 200,500 T450,470 L450,580 L-50,580 Z"
                    fill="url(#wave3)"
                  />
                  {/* Floating circles */}
                  <circle cx="320" cy="120" r="50" fill="#1DB954" opacity="0.08" />
                  <circle cx="80" cy="400" r="70" fill="#1ed760" opacity="0.06" />
                  <circle cx="280" cy="450" r="35" fill="#1DB954" opacity="0.1" />
                </svg>
                {/* Subtle noise texture */}
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }} />
                {/* Dark overlay to integrate with theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-spotify-dark-base via-transparent to-spotify-dark-base/10" />

                {/* Floating stat – top right */}
                <div
                  className="absolute top-6 right-6 glass-dark rounded-2xl px-4 py-3"
                  style={{ animation: 'fadeUp 0.6s ease forwards', animationDelay: '1.4s', opacity: 0 }}
                >
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Active Campaigns</p>
                  <p className="text-white font-black text-xl">340+</p>
                </div>

                {/* Floating stat – bottom left */}
                <div
                  className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl px-4 py-3 flex items-center justify-between"
                  style={{ animation: 'fadeUp 0.6s ease forwards', animationDelay: '1.6s', opacity: 0 }}
                >
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Avg. ROI</p>
                    <p className="text-spotify-green font-black text-xl">3.8×</p>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Markets</p>
                    <p className="text-white font-black text-xl">15+</p>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Clients</p>
                    <p className="text-white font-black text-xl">120+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{ animation: 'fadeUp 0.5s ease forwards', animationDelay: '3.4s', opacity: 0 }}>
        <span className="text-[10px] text-white/25 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
