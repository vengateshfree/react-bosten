import aboutImg from "../assets/aboutimg.png";
import { Zap, LayoutDashboard, ShieldCheck, ClipboardCheck } from "lucide-react";

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-white py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-0">

        {/* Left Image */}
        <div className="relative w-full md:w-auto">
          <img
            src={aboutImg}
            alt="Boston Tech India Infrastructure"
            className="rounded-3xl shadow-xl w-full object-cover"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-2xl px-6 py-4 text-center md:text-left">
            <h4 className="text-lg md:text-xl font-bold text-[#0E4FA3]">Lead</h4>
            <p className="text-gray-500 text-sm">Tech Experts</p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] bg-clip-text text-transparent">
            About Boston Tech India
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Boston Tech India helps organizations simplify complex
            infrastructure through intelligent automation,
            <span className="font-semibold text-[#0E4FA3]"> cloud platforms, and modern application development</span>. Our team of technology professionals 
            builds <span className="font-semibold text-[#0E4FA3]">scalable infrastructure, DevOps systems, and AI-powered platforms</span> that enable enterprises and institutions to innovate faster.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Zap className="text-[#0E4FA3]" size={22} />
              <span className="text-gray-700 font-medium">One-Touch Provisioning</span>
            </div>

            <div className="flex items-center gap-3">
              <LayoutDashboard className="text-[#0E4FA3]" size={22} />
              <span className="text-gray-700 font-medium">One Click One View Monitoring</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#0E4FA3]" size={22} />
              <span className="text-gray-700 font-medium">Access Level Control</span>
            </div>

            <div className="flex items-center gap-3">
              <ClipboardCheck className="text-[#0E4FA3]" size={22} />
              <span className="text-gray-700 font-medium">Compliance Automation</span>
            </div>
          </div>

          <a href="#services">
            <button className="w-full sm:w-auto px-6 py-3 cursor-pointer bg-[#0E4FA3] text-white rounded-xl font-semibold hover:bg-[#1E73BE] transition">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;