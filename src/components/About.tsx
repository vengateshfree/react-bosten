import aboutImg from "../assets/aboutimg.png";
import { Cloud, Cpu, Bot, Settings } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="Boston Tech India Infrastructure"
            className="rounded-3xl shadow-xl"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-2xl px-6 py-4">
            <h4 className="text-2xl font-bold text-[#0E4FA3]">10+</h4>
            <p className="text-gray-500 text-sm">Tech Experts</p>
          </div>
        </div>

        {/* Right Content */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] bg-clip-text text-transparent">
            About Boston Tech India
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Boston Tech India helps organizations simplify complex
            infrastructure through intelligent automation, cloud
            platforms, and modern application development.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Our team of <span className="font-semibold text-[#0E4FA3]">10 technology professionals</span>
            builds scalable infrastructure, DevOps systems, and AI-powered
            platforms that enable enterprises and institutions to innovate faster.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mb-8">

            <div className="flex items-center gap-3">
              <Cloud className="text-[#0E4FA3]" size={22} />
              <span className="text-gray-700 font-medium">Cloud Infrastructure</span>
            </div>

            <div className="flex items-center gap-3">
              <Cpu className="text-[#0E4FA3]" size={22} />
              <span className="text-gray-700 font-medium">Automation</span>
            </div>

            <div className="flex items-center gap-3">
              <Bot className="text-[#0E4FA3]" size={22} />
              <span className="text-gray-700 font-medium">AI Integration</span>
            </div>

            <div className="flex items-center gap-3">
              <Settings className="text-[#0E4FA3]" size={22} />
              <span className="text-gray-700 font-medium">DevOps Systems</span>
            </div>

          </div>

          <button className="px-7 py-3 bg-[#0E4FA3] text-white rounded-xl font-semibold hover:bg-[#1E73BE] transition">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}

export default About;