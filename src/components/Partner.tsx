import { useEffect, useRef, useState } from "react";

const segments = [
  {
    accent: "#1AA0C8",
    label: "Academic Research",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: "Academic Research Institutions",
    description: "Providing the specialized infrastructure needed for high-level research and discovery.",
  },
  {
    accent: "#17B6A6",
    label: "Mid-Market Enterprise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Mid-Market Enterprises",
    description: "Delivering enterprise-grade automation and proactive insights without the enterprise-level cost.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.3);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Partner() {
  const { ref: heroRef, visible: heroVisible } = useInView(0.1);
  const { ref: cardsRef, visible: cardsVisible } = useInView(0.1);

  return (
    <section
      className="relative overflow-hidden py-28 px-6"
      style={{ background: "#060C18" }}
    >
      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.04 }}>
          <defs>
            <pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)"/>
        </svg>
        {/* Glow blobs */}
        <div style={{ position:"absolute", top:"-10%", left:"60%", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle, #0E4FA318 0%, transparent 70%)", filter:"blur(80px)" }}/>
        <div style={{ position:"absolute", bottom:"-10%", left:"10%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, #17B6A614 0%, transparent 70%)", filter:"blur(80px)" }}/>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ── Two-column hero layout ── */}
        <div
          ref={heroRef}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Left: text */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.75s ease, transform 0.75s ease",
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "linear-gradient(to right, transparent, #1AA0C8)" }}/>
              <span className="text-xs font-mono tracking-[0.22em] uppercase font-semibold" style={{ color: "#1AA0C8" }}>
                Why Partner With Us
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{
                fontFamily: "'Georgia', serif",
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #ffffff 40%, #1AA0C8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Positioned at the&nbsp;Center of a&nbsp;$25B Shift
            </h2>

            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
              The global IT automation and Infrastructure as Code market is on a breakout trajectory.
              Boston Tech India is uniquely built to capture this growth — for institutions and enterprises alike.
            </p>

            {/* CTA */}
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #1E73BE, #17B6A6)",
                color: "#fff",
                boxShadow: "0 0 24px #1AA0C844",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px #1AA0C866";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px #1AA0C844";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Partner With Us
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </button>
          </div>

          {/* Right: stat card */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s",
            }}
          >
            <div
              className="relative rounded-3xl p-px"
              style={{ background: "linear-gradient(135deg, #1E73BE33, #17B6A633)" }}
            >
              <div
                className="rounded-3xl p-8"
                style={{ background: "rgba(6,12,24,0.95)" }}
              >
                {/* Market size stat */}
                <div className="mb-8">
                  <p className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Market Projection by 2030
                  </p>
                  <p
                    className="text-6xl font-bold"
                    style={{
                      fontFamily: "'Georgia', serif",
                      background: "linear-gradient(135deg, #1AA0C8, #17B6A6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    $<AnimatedCounter target={25} suffix="B+" />
                  </p>
                  <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                    IT Automation & IaC Global Market
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px mb-8" style={{ background: "linear-gradient(to right, #1AA0C844, transparent)" }}/>

                {/* Mini stats row */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "10x", label: "Faster Deployment", accent: "#1AA0C8" },
                    { value: "60%", label: "Cost Reduction", accent: "#17B6A6" },
                  ].map((s, i) => (
                    <div key={i}>
                      <p className="text-3xl font-bold mb-1" style={{ color: s.accent, fontFamily:"'Georgia',serif" }}>
                        {s.value}
                      </p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Segment cards ── */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-5">
          {segments.map((seg, i) => (
            <div
              key={i}
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div
                className="group relative h-full rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.3s, transform 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = seg.accent + "55";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(to right, ${seg.accent}, transparent)` }}
                />

                {/* Hover glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${seg.accent}1A 0%, transparent 70%)`,
                    transform: "translate(30%,-30%)",
                    transition: "opacity 0.4s",
                  }}
                />

                <div className="p-7">
                  {/* Icon + label */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${seg.accent}18`,
                        border: `1px solid ${seg.accent}44`,
                        color: seg.accent,
                      }}
                    >
                      {seg.icon}
                    </div>
                    <span
                      className="text-xs font-mono font-semibold tracking-widest uppercase"
                      style={{ color: seg.accent }}
                    >
                      {seg.label}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    {seg.title}
                  </h3>

                  <div className="h-px mb-4" style={{ background: `linear-gradient(to right, ${seg.accent}44, transparent)` }}/>

                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {seg.description}
                  </p>

                  {/* Arrow link */}
                  <div
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold"
                    style={{ color: seg.accent }}
                  >
                    Learn more
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                      <path d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}