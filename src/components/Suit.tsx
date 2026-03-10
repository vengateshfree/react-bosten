// import {ExternalLink } from "lucide-react";
import { useRef } from "react";

import {
  Server,
  Container,
  LayoutDashboard,
  BellRing,
  ScrollText,
  Settings,
} from "lucide-react";
// #1E5DB3
const features = [
  {
    number: "01",
    title: "Real-Time Host Monitoring",
    capability:
      "Watch CPU, memory, and disk usage stream live with sub-second latency across Linux and Windows servers.",
    benefit: "Live Telemetry & Process Insights",
    accent: "#06B6D4",
    icon: <Server size={22} />,
  },
  {
    number: "02",
    title: "Application & Container Metrics",
    capability:
      "Automatically discover Docker containers and monitor APIs, databases, and microservices in real-time.",
    benefit: "Deep Service Visibility",
    accent: "#06B6D4",
    icon: <Container size={22} />,
  },
  {
    number: "03",
    title: "Custom Dashboard Builder",
    capability:
      "Build powerful NOC dashboards with drag-and-drop widgets and combine metrics across multiple hosts.",
    benefit: "Unified Infrastructure Analytics",
    accent: "#06B6D4",
    icon: <LayoutDashboard size={22} />,
  },
  {
    number: "04",
    title: "Intelligent Alerting",
    capability:
      "Trigger automated alerts through Slack, PagerDuty, or Email when critical thresholds are reached.",
    benefit: "Proactive Incident Response",
    accent: "#06B6D4",
    icon: <BellRing size={22} />,
  },
  {
    number: "05",
    title: "Centralized System Logging",
    capability:
      "Aggregate logs, system events, and application outputs into one powerful viewer with smart filtering.",
    benefit: "Faster Root Cause Analysis",
    accent: "#06B6D4",
    icon: <ScrollText size={22} />,
  },
  {
    number: "06",
    title: "Lifecycle Management",
    capability:
      "Deploy monitoring agents remotely with secure SSH provisioning and enterprise-grade authentication.",
    benefit: "1-Click Infrastructure Deployment",
    accent: "#06B6D4",
    icon: <Settings size={22} />,
  },
];


interface Pillar {
  icon: React.ReactNode;
  accent: string;
  number: string;
  title: string;
  capability: string;
  benefit: string;
}



const pillars2: Pillar[] = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M4 7l8-4 8 4-8 4-8-4z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 17l8 4 8-4" />
      </svg>
    ),
    accent: "#1E73BE",
    number: "01",
    title: "Academic",
    capability:
      "Purpose-built for universities, research labs, and educational institutions to manage campus IT infrastructure efficiently.",
    benefit:
      "Enable students, researchers, and faculty to access reliable infrastructure for innovation and learning.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    accent: "#0EA5A4",
    number: "02",
    title: "Learning Hub",
    capability:
      "In-depth technical guides, tutorials, and insights designed to help learners understand modern infrastructure and monitoring tools.",
    benefit:
      "Empower developers, students, and IT professionals with practical knowledge and real-world learning resources.",
  },
];

const pillars: Pillar[] = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M4.5 16.5c-1.5 1.5-1.5 4 0 5.5s4 1.5 5.5 0l9-9c1.5-1.5 1.5-4 0-5.5s-4-1.5-5.5 0l-9 9z" />
        <path d="m13.5 6.5 4 4" />
      </svg>
    ),
    accent: "#1AA0C8",
    number: "01",
    title: "One-Touch Provisioning",
    capability:
      "Automate OS, application, and Kubernetes/OpenShift deployments on any hardware or VM.",
    benefit:
      "Go from idea to a functional environment in minutes, not days.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    accent: "#1E73BE",
    number: "02",
    title: "One-Dashboard Monitoring",
    capability:
      "Real-time, unified visibility into system health and utilization across all labs and servers.",
    benefit:
      "Eliminate waste and forecast infrastructure needs with precision.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    accent: "#0E4FA3",
    number: "03",
    title: "Access Level Control",
    capability:
      "Granular, role-based access control (RBAC) to enforce security policies effortlessly.",
    benefit:
      "Ensure the right people have the right access at the right time.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    accent: "#17B6A6",
    number: "04",
    title: "Compliance Automation",
    capability:
      "Continuous monitoring and auditing for PCI, SOC 2, and HIPAA standards.",
    benefit:
      "Turn stressful audit prep into an automated background process.",
  },
];

interface PillarCardProps {
  item: Pillar;
  index: number;
}

function PillarCard({ item, index }: PillarCardProps) {
  // const [visible, setVisible] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setVisible(true);
  //       }
  //     },
  //     { threshold: 0.15 }
  //   );

  //   if (ref.current) observer.observe(ref.current);

  //   return () => observer.disconnect();
  // }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: true ? 1 : 0,
        transform: true ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.12}s`,
      }}
    >

      <a href="https://catalystsuite.bostontechindia.in/" target="_blank" >
        <div className="group relative h-full rounded-2xl bg-white border border-cyan-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

          {/* Hover Glow */}
          {/* <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none transition duration-300"
          style={{
            background: `radial-gradient(circle, ${item.accent}20 0%, transparent 70%)`,
            transform: "translate(30%, -30%)",
          }}
        /> */}

          <div className="p-7 relative">
            <div className="flex items-start justify-between mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `${item.accent}15`,
                  border: `1px solid ${item.accent}33`,
                  color: item.accent,
                }}
              >
                {item.icon}
              </div>

              <span
                className="text-xs font-mono font-bold tracking-widest"
                style={{ color: item.accent + "88" }}
              >
                {item.number}
              </span>
            </div>
            <h3
              className={`text-xl font-semibold text-[#1E5DB3] mb-4  transition-colors duration-300`}
            >
              {item.title}
            </h3>


            <p className="text-gray-600 leading-relaxed mb-4 "> {item.capability}
            </p>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{
                background: `${item.accent}10`,
                border: `1px solid ${item.accent}22`,
                color: item.accent,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: item.accent }}
              />
              {item.benefit}
            </div>

            {/* Learn More Link */}
            {/* <a className="absolute bottom-8 right-5"  href="https://catalystsuite.bostontechindia.in/" target="_blank" >
                           <div className="flex mt-10 justify-center cursor-pointer items-center gap-2 text-sm font-medium text-cyan-600  transition-opacity duration-300">
                            <span>Visit Website</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                          </a> */}
          </div>
        </div>
      </a>
    </div>
  );
}

function PillarCard2({ item, index }: PillarCardProps) {
  // const [visible, setVisible] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setVisible(true);
  //       }
  //     },
  //     { threshold: 0.15 }
  //   );

  //   if (ref.current) observer.observe(ref.current);

  //   return () => observer.disconnect();
  // }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: true ? 1 : 0,
        transform: true ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.12}s`,
      }}
    >
      <a href="https://catalystsuite.bostontechindia.in/" target="_blank">
        <div className="group relative h-full rounded-2xl bg-white border border-cyan-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

          {/* Top Gradient Accent */}
          <div
            className="absolute top-0 left-0 w-full h-1"
            style={{
              // background: `linear-gradient(90deg, ${item.accent}, transparent)`,
            }}
          />

          <div className="p-7">

            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-5">

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${item.accent}15`,
                  border: `1px solid ${item.accent}40`,
                  color: item.accent,
                }}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#1E5DB3] transition-colors">
                {item.title}
              </h3>

            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {item.capability}
            </p>

            {/* Benefit Tag */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium mb-6"
              style={{
                background: `${item.accent}12`,
                border: `1px solid ${item.accent}30`,
                color: item.accent,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: item.accent }}
              />
              {item.benefit}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-sm font-medium text-cyan-600 group-hover:text-cyan-700 transition-colors">
              <span>Visit Website</span>

              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>

          </div>
        </div>
      </a>
    </div>
  );
}

export default function Suite() {
  return (
    <section className="relative py-24 px-6 bg-sky-50 overflow-hidden">

      {/* Soft Background Glow */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-200/40 blur-3xl" />
      </div> */}
      {/* <div className="flex justify-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 
  bg-gradient-to-r from-[#1E5DB3] to-[#2EC4C7]
  text-white rounded-full shadow-lg">

          <span className="text-sm font-semibold tracking-wider uppercase">
            The Future of Infrastructure Management
          </span>

        </div>
      </div> */}
      {/* <div className="flex justify-center">
        <div className="inline-flex items-center gap-3 px-6 py-3
  bg-white/10 backdrop-blur-lg
  border border-white/20
  rounded-full shadow-md">

          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>

          <span className="text-sm font-semibold text-white tracking-wide uppercase">
            The Future of Infrastructure Management
          </span>

        </div>
      </div> */}

      {/* <div className="flex justify-center">
        <div className="px-6 py-3 rounded-full
  border border-[#14A7B8]
  shadow-[0_0_15px_rgba(20,167,184,0.4)]
  bg-[#14A7B8]/10">

          <span className="text-sm font-semibold text-[#14A7B8] tracking-widest uppercase">
            The Future of Infrastructure Management
          </span>

        </div>
      </div>
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-3 px-6 py-3
  bg-white border border-gray-200 rounded-full shadow-sm">

          <div className="w-6 h-6 flex items-center justify-center
    bg-[#2EC4C7]/20 text-[#2EC4C7] rounded-full text-xs font-bold">
            AI
          </div>

          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            The Future of Infrastructure Management
          </span>

        </div>
      </div>
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-3 px-6 py-3
  bg-white border border-gray-200 rounded-full shadow-sm">

          <div className="w-6 h-6 flex items-center justify-center
    bg-[#2EC4C7]/20 text-[#2EC4C7] rounded-full text-xs font-bold">
            AI
          </div>

          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            The Future of Infrastructure Management
          </span>

        </div>
      </div> */}

      <div className="flex justify-center" >
        <div className="inline-flex items-center gap-3 px-6 py-3 
      bg-gradient-to-r from-[#0B3C8A]/10 to-[#14A7B8]/10 
      border border-[#1E5DB3]/20 
      rounded-full mb-8 backdrop-blur-sm">

          <div className="relative">
            <div className="w-3 h-3 bg-[#14A7B8] rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-[#2EC4C7] rounded-full blur-md opacity-60"></div>
          </div>

          <span className="text-sm font-semibold tracking-wide text-[#0B3C8A] uppercase">
            The Future of Infrastructure Management
          </span>
        </div>
      </div>
      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">


          <a
            href="https://catalystsuite.bostontechindia.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <h2 className="flex justify-center items-center gap-3 text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#0B3C8A] transition-all duration-300 ">

              <span>
                Flagship Product{" "}
                <span className="bg-gradient-to-r 
        from-[#0B3C8A] 
        via-[#1E5DB3] 
        to-[#14A7B8] 
        bg-clip-text text-transparent 
        relative"
                >
                  Catalyst Suite
                </span>

              </span>

              {/* <ExternalLink
      size={28}
      className="opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
    /> */}

            </h2>
          </a>



          <div className="w-24 h-1 mx-auto mb-8 rounded-full 
      bg-gradient-to-r from-[#1E5DB3] to-[#2EC4C7]">
          </div>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            An advanced observability platform that transforms complex
            infrastructure management into a seamless, one-touch experience.
          </p>
        </div>



        <div className="flex items-center justify-center gap-6 mb-5 mt-20">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#2EC4C7]"></div>

          <span className="text-2xl font-semibold text-[#0B3C8A] tracking-wider uppercase">
            Academy
          </span>

          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#2EC4C7]"></div>
        </div>


        <p className="mt-6 max-w-xl mx-auto text-lg md:text-lg text-gray-600 leading-relaxed text-center mb-15">
     Explore technical guides, tutorials, and expert insights designed to simplify modern infrastructure and monitoring concepts.
      </p>


        <div className="grid md:grid-cols-2 gap-6">
          {pillars2.map((item, index) => (
            <PillarCard2 key={index} item={item} index={index} />
          ))}
        </div>


        <div className="flex items-center justify-center gap-6 mb-5 mt-20">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#2EC4C7]"></div>

          <span className="text-2xl font-semibold text-[#0B3C8A] tracking-wider uppercase">
            Enterprise Infrastructure Monitoring
          </span>

          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#2EC4C7]"></div>
        </div>


        <p className="mt-6 max-w-xl mx-auto text-lg md:text-lg text-gray-600 leading-relaxed text-center mb-15">
          Designed for large enterprises managing multi-cloud, DevOps pipelines, and distributed infrastructure environments
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div key={index}>
              <a
                href="https://catalystsuite.bostontechindia.in/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="group relative h-full rounded-2xl bg-white border border-cyan-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

                  <div className="p-7">

                    {/* Icon + Number */}
                    <div className="flex items-start justify-between mb-6">

                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${item.accent}15`,
                          border: `1px solid ${item.accent}33`,
                          color: item.accent,
                        }}
                      >
                        {item.icon}
                      </div>

                      <span
                        className="text-xs font-mono font-bold tracking-widest"
                        style={{ color: item.accent + "88" }}
                      >
                        {item.number}
                      </span>

                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[#1E5DB3] mb-4">
                      {item.title}
                    </h3>

                    {/* Capability */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.capability}
                    </p>

                    {/* Benefit Tag */}
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{
                        background: `${item.accent}10`,
                        border: `1px solid ${item.accent}22`,
                        color: item.accent,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: item.accent }}
                      />
                      {item.benefit}
                    </div>

                  </div>
                </div>
              </a>
            </div>
          ))}

        </div>

        <div className="flex items-center justify-center gap-6 mb-5 mt-20">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#2EC4C7]"></div>

          <span className="text-2xl font-semibold text-[#0B3C8A] tracking-wider uppercase">
            PLATFORM CAPABILITIES
          </span>

          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#2EC4C7]"></div>
        </div>


        <p className="mt-6 max-w-xl mx-auto text-lg md:text-lg text-gray-600 leading-relaxed text-center mb-15">
          Designed for large enterprises managing multi-cloud, DevOps pipelines, and distributed infrastructure environments
        </p>



        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {pillars.map((item, index) => (
            <PillarCard key={index} item={item} index={index} />
          ))}
        </div>



      </div>
    </section>
  );
}
