function Hero() {
  return (
    <section className="relative text-white py-24 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        
        <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
          Bridging the Gap:
          <span className="text-blue-500 block">
            Infrastructure Meets Intelligent Automation
          </span>
        </h1>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Boston Tech India is bridging the gap between complex infrastructure 
          and intelligent automation. As a product-and-service hybrid, we build 
          powerful web applications and scalable IaaS solutions integrated with 
          cutting-edge GenAI to drive transformation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300">
            Get Started
          </button>
          <button className="border border-gray-400 hover:border-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
