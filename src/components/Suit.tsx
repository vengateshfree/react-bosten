// import React from "react";

// function Suit() {
//   const pillars = [
//     {
//       icon: "🚀",
//       title: "One-Touch Provisioning",
//       capability:
//         "Automate OS, application, and Kubernetes/OpenShift deployments on any hardware or VM.",
//       benefit:
//         "Accelerate Time-to-Value: Go from idea to a functional environment in minutes.",
//     },
//     {
//       icon: "📊",
//       title: "One-Dashboard Monitoring",
//       capability:
//         "Get real-time, unified visibility into system health and utilization across all labs and servers.",
//       benefit:
//         "Optimize Resources: Eliminate waste and forecast infrastructure needs.",
//     },
//     {
//       icon: "🔐",
//       title: "Access Level Control",
//       capability:
//         "Implement granular, role-based access control (RBAC) to enforce security policies effortlessly.",
//       benefit:
//         "Minimize Risk: Ensure the right people have the right access at the right time.",
//     },
//     {
//       icon: "🛡️",
//       title: "Compliance Automation",
//       capability:
//         "Automate continuous monitoring and auditing for PCI, SOC 2, and HIPAA standards.",
//       benefit:
//         "Effortless Governance: Turn stressful audit prep into an automated background process.",
//     },
//   ];

//   return (
//     <section className="relative py-24 px-6 bg-white overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1AA0C8] opacity-10 blur-3xl rounded-full"></div>
//       <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#17B6A6] opacity-10 blur-3xl rounded-full"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0E4FA3] via-[#1E73BE] to-[#17B6A6] bg-clip-text text-transparent">
//             Our Flagship Product
//           </h2>

//           <h3 className="mt-4 text-2xl font-semibold text-[#0E4FA3]">
//             Catalyst Suite
//           </h3>

//           <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
//             An advanced observability platform and integrated suite that transforms
//             complex infrastructure management into a seamless, intelligent,
//             one-touch automation experience.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {pillars.map((item, index) => (
//             <div
//               key={index}
//               className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
//             >
//               {/* Gradient Border Effect */}
//               <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#0E4FA3] via-[#1E73BE] to-[#17B6A6] opacity-0 group-hover:opacity-100 transition duration-500">
//                 <div className="h-full w-full bg-white rounded-2xl"></div>
//               </div>

//               <div className="relative z-10">
//                 <div className="text-4xl mb-6">{item.icon}</div>

//                 <h4 className="text-xl font-semibold text-[#0E4FA3] mb-4">
//                   {item.title}
//                 </h4>

//                 <div className="mb-5">
//                   <p className="text-xs uppercase tracking-widest text-[#1E73BE] font-semibold">
//                     Capability
//                   </p>
//                   <p className="text-gray-700 mt-2 leading-relaxed">
//                     {item.capability}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-xs uppercase tracking-widest text-[#17B6A6] font-semibold">
//                     Key Benefit
//                   </p>
//                   <p className="text-gray-900 mt-2 leading-relaxed font-medium">
//                     {item.benefit}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Suit;


import React, { useEffect, useRef, useState } from "react";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4.5 16.5c-1.5 1.5-1.5 4 0 5.5s4 1.5 5.5 0l9-9c1.5-1.5 1.5-4 0-5.5s-4-1.5-5.5 0l-9 9z"/>
        <path d="m13.5 6.5 4 4"/>
        <path d="M10.5 2.5 8 5l2 4-4-2-2.5 2.5"/>
        <path d="M21.5 13.5 19 16l-4-2 2 4-2.5 2.5"/>
      </svg>
    ),
    accent: "#1AA0C8",
    number: "01",
    title: "One-Touch Provisioning",
    capability: "Automate OS, application, and Kubernetes/OpenShift deployments on any hardware or VM.",
    benefit: "Go from idea to a functional environment in minutes, not days.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
        <path d="m7 13 2 2 4-4"/>
      </svg>
    ),
    accent: "#1E73BE",
    number: "02",
    title: "One-Dashboard Monitoring",
    capability: "Real-time, unified visibility into system health and utilization across all labs and servers.",
    benefit: "Eliminate waste and forecast infrastructure needs with precision.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
    accent: "#0E4FA3",
    number: "03",
    title: "Access Level Control",
    capability: "Granular, role-based access control (RBAC) to enforce security policies effortlessly.",
    benefit: "Ensure the right people have the right access at the right time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    accent: "#17B6A6",
    number: "04",
    title: "Compliance Automation",
    capability: "Continuous monitoring and auditing for PCI, SOC 2, and HIPAA standards.",
    benefit: "Turn stressful audit prep into an automated background process.",
  },
];

function PillarCard({ item, index }: { item: typeof pillars[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
      className="group relative"
    >
      {/* Card */}
      <div
        className="relative h-full rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          transition: "border-color 0.3s ease, transform 0.3s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = item.accent + "55";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {/* Glow corner */}
        <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${item.accent}22 0%, transparent 70%)`,
            transform: "translate(30%, -30%)",
            transition: "opacity 0.4s ease",
          }}
        />

        <div className="p-7">
          {/* Top row */}
          <div className="flex items-start justify-between mb-6">
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${item.accent}22, ${item.accent}11)`,
                border: `1px solid ${item.accent}44`,
                color: item.accent,
              }}
            >
              {item.icon}
            </div>
            {/* Number */}
            <span
              className="text-xs font-mono font-bold tracking-widest"
              style={{ color: item.accent + "88" }}
            >
              {item.number}
            </span>
          </div>

          {/* Title */}
          <h4 className="text-lg font-semibold text-white mb-4 leading-snug">
            {item.title}
          </h4>

          {/* Divider */}
          <div
            className="h-px mb-4"
            style={{ background: `linear-gradient(to right, ${item.accent}44, transparent)` }}
          />

          {/* Capability */}
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
            {item.capability}
          </p>

          {/* Benefit badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{
              background: `${item.accent}15`,
              border: `1px solid ${item.accent}33`,
              color: item.accent,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: item.accent }}
            />
            {item.benefit}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Suite() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#070D1A" }}
    >
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, #0E4FA322 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, #17B6A622 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-5">
            <div
              className="h-px w-8"
              style={{ background: "linear-gradient(to right, transparent, #1AA0C8)" }}
            />
            <span
              className="text-xs font-mono tracking-[0.2em] uppercase font-semibold"
              style={{ color: "#1AA0C8" }}
            >
              Flagship Product
            </span>
            <div
              className="h-px w-8"
              style={{ background: "linear-gradient(to left, transparent, #1AA0C8)" }}
            />
          </div>

          {/* Main heading */}
          <h2
            className="text-5xl md:text-6xl font-bold tracking-tight mb-3"
            style={{
              background: "linear-gradient(135deg, #ffffff 30%, #1AA0C8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Georgia', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Catalyst Suite
          </h2>

          <p
            className="mt-4 max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            An advanced observability platform that transforms complex infrastructure
            management into a seamless, one-touch experience.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((item, i) => (
            <PillarCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-12 rounded-2xl p-px"
          style={{
            background: "linear-gradient(135deg, #0E4FA333, #17B6A633)",
          }}
        >
          {/* <div
            className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: "rgba(7,13,26,0.9)" }}
          >
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Ready to simplify your infrastructure?
            </p>
            <button
              className="text-sm font-semibold px-6 py-2.5 rounded-xl transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #1E73BE, #17B6A6)",
                color: "#fff",
                boxShadow: "0 0 20px #1AA0C844",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px #1AA0C877";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px #1AA0C844";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Get Early Access →
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}