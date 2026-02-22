// import LightPillar from "./LightPillar"

// function App() {
//   return (
//     <div className="min-h-screen w-screen overflow-hidden">

//       <div className="relative h-screen w-screen overflow-hidden">

//         {/* Background Animation */}
//         <LightPillar
//           topColor="#000dff"
//           bottomColor="#32bdf0"
//           intensity={1.1}
//           rotationSpeed={1.3}
//           glowAmount={0.009}
//           pillarWidth={6}
//           pillarHeight={0.4}
//           noiseIntensity={0}
//           pillarRotation={360}
//           interactive={false}
//           mixBlendMode="luminosity"
//           quality="high"
//         />

//         {/* Content Overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">

//           <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
//             Build Something Powerful
//           </h1>

//           <p className="max-w-2xl text-lg md:text-xl text-gray-700 mb-8">
//             Create immersive web experiences with high-performance animations,
//             clean design, and modern UI architecture.
//           </p>

//           <div className="flex gap-4">
//             <button className="px-6 py-3 bg-black text-white rounded-lg hover:scale-105 transition">
//               Start Now
//             </button>

//             <button className="px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition">
//               Learn More
//             </button>
//           </div>

//         </div>
//       </div>

//       <div className="h-screen w-screen"></div>

//     </div>

//   )
// }

// export default App


// #0E4FA3	

// #1E73BE	

// #1AA0C8	

// #17B6A6 this is logo color  


import { useEffect, useState } from "react"
// import LightPillar from "./components/LightPillar"
import Bottleneck from "./components/Bottleneck"
import Partner from "./components/Partner"
import Service from "./components/Service"
import Suit from "./components/Suit"
import Footer from "./components/Footer"
import logo from "./assets/fulllogo.png"; // replace with your logo path
import Contact from "./components/Contact"

function App() {
  const [open, setOpen] = useState(false)

    // const [scrolled, setScrolled] = useState(false);

    const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // background change
      setScrolled(currentScrollY > 50);

      // hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // show navbar when mouse near top
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (window.scrollY < 50)  return setShowNav(true);
      if (e.clientY < 50) {
        setShowNav(true);
      }
      else if(e.clientY > 50){        
        
        setShowNav(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home" className="min-h-screen w-full overflow-hidden">

      {/* Navbar */}
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b 
      transition-all duration-500 transform
      ${showNav ? "translate-y-0" : "-translate-y-full"}
      ${
        scrolled
          ? "bg-white backdrop-blur-md border-white/20 shadow-lg"
          : "bg-white/50 backdrop-blur-md border-white/10"
      }`}
    >
  <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

    {/* Logo */}
    <div className="flex items-center space-x-3 text-white">
      <img
        src={logo}
        alt="Logo"
        className="w-14 h-14 object-contain"
      />
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex justify-center items-center gap-8 text-white font-medium">

      <a href="#home" className="hover:text-cyan-400 text-[#1E73BE] transition">
        Home
      </a>

      <a href="#about" className="hover:text-cyan-400 text-[#1E73BE] transition">
        About
      </a>

       <a href="#product" className="hover:text-cyan-400 text-[#1E73BE] transition">
        Product
      </a>

      <a href="#services" className="hover:text-cyan-400 text-[#1E73BE] transition">
        Services
      </a>

     
           <a href="#contact" className="hover:text-cyan-400 text-[#1E73BE] transition">
        Contact
      </a>

    
    </div>

      {/* Contact Button */}
        <div className="hidden md:block" >
      <a
        href="#contact"
        className="ml-4 px-6 py-2 rounded-xl font-semibold text-white 
        bg-gradient-to-r from-[#1E73BE] via-[#1E73BE] to-[#17B6A6] 
        hover:scale-105 transition-transform duration-300 shadow-lg"
      >
        Contact
      </a>
      </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-blue-600 text-2xl"
      onClick={() => setOpen(!open)}
    >
      ☰
    </button>
  </div>

  {/* Mobile Menu */}
  {open && (
    <div className="md:hidden bg-white/95 backdrop-blur-lg px-6 pb-6 pt-4 space-y-4 text-black font-medium shadow-xl">

      <a href="#home" onClick={() => setOpen(false)} className="block">
        Home
      </a>

      <a href="#about" onClick={() => setOpen(false)} className="block">
        About
      </a>

  <a href="#product" onClick={() => setOpen(false)} className="block">
        Product
      </a>

      <a href="#services" onClick={() => setOpen(false)} className="block">
        Services
      </a>

    
       <a href="#contact" onClick={() => setOpen(false)} className="block">
            Contact
      </a>

      {/* Mobile Contact Button */}
      <a
        href="#contact"
        onClick={() => setOpen(false)}
        className="block text-center mt-4 px-5 py-2 rounded-lg bg-black text-white font-semibold"
      >
      Visit Us
      </a>

    </div>
  )}
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#f0f7ff] to-[#e6fbff] text-gray-900">

      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-[#1E73BE]/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#17B6A6]/30 blur-[140px] rounded-full"></div>

      <div className="absolute inset-0 backdrop-blur-2xl"></div>

      <div className="relative z-10 text-center max-w-5xl px-6">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] bg-clip-text text-transparent">
          Bridging Infrastructure with Intelligent Automation
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          Boston Tech India bridges the gap between complex infrastructure and intelligent automation. 
          As a product-and-service hybrid, we build scalable web applications and IaaS solutions 
          integrated with cutting-edge GenAI — helping organizations scale efficiently while 
          significantly lowering total cost of ownership.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <button className="px-8 py-4 rounded-2xl bg-[#0E4FA3] text-white hover:bg-[#1E73BE] transition-all duration-300 font-semibold shadow-lg hover:shadow-[#0E4FA3]/30">
            Explore Solutions
          </button>
 <a href="#contact">
          <button className="px-8 py-4 rounded-2xl border border-[#0E4FA3]/30 text-[#0E4FA3] hover:bg-[#0E4FA3]/10 transition-all duration-300 font-semibold">
            Talk to Us
          </button>
          </a>

        </div>

      </div>
    </section>
 

{/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050A18] text-white">

  <div className="absolute inset-0 bg-gradient-to-br from-[#0E4FA3]/40 via-[#1E73BE]/30 to-[#17B6A6]/30"></div>

  <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#1AA0C8] opacity-20 blur-[150px] rounded-full"></div>
  <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#17B6A6] opacity-20 blur-[150px] rounded-full"></div>

  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

  <div className="relative z-10 text-center max-w-4xl px-6">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Bridging Infrastructure with Intelligent Automation
    </h1>
    <p className="mt-6 text-lg text-gray-300">
      Boston Tech India bridges the gap between complex infrastructure and intelligent automation.
      As a product-and-service hybrid, we build scalable web applications and IaaS solutions integrated
      with cutting-edge GenAI — helping organizations scale efficiently while significantly lowering total cost of ownership.
    </p>

    <div className="mt-8 flex justify-center gap-4">
      <button className="px-6 py-3 rounded-xl bg-[#1AA0C8] hover:bg-[#17B6A6] transition">
        Explore Solutions
      </button>
      <button className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition">
        Talk to Us
      </button>
    </div>
  </div>

</section> */}


    {/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,79,163,0.45),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(23,182,166,0.45),transparent_40%)]"></div>

      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#1E73BE] opacity-30 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#17B6A6] opacity-30 blur-[150px] rounded-full"></div>

      <div className="absolute inset-0 backdrop-blur-2xl"></div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Bridging Infrastructure with Intelligent Automation
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
          Boston Tech India bridges the gap between complex infrastructure and intelligent automation. 
          As a product-and-service hybrid, we build scalable web applications and IaaS solutions 
          integrated with cutting-edge GenAI — helping organizations scale efficiently while 
          significantly lowering total cost of ownership.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          
          <button className="px-8 py-4 rounded-2xl bg-[#1AA0C8] hover:bg-[#17B6A6] transition-all duration-300 font-semibold shadow-lg hover:shadow-[#1AA0C8]/40">
            Explore Solutions
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/30 hover:bg-white/10 transition-all duration-300 font-semibold">
            Talk to Us
          </button>

        </div>

      </div>
    </section> */}

      {/* Hero Section */}
      {/* <div className="relative h-screen w-full overflow-hidden">

        <LightPillar
          topColor="#000dff"
          bottomColor="#32bdf0"
          intensity={1.1}
          rotationSpeed={1.3}
          glowAmount={0.005}
          pillarWidth={6}
          pillarHeight={0.4}
          noiseIntensity={0}
          pillarRotation={100}
          interactive={false}
          mixBlendMode="luminosity"
          quality="high"
        />

<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">

  <h1 className="text-4xl md:text-7xl font-bold text-black mb-6 leading-tight">
    Bridging Infrastructure <br className="hidden md:block" />
    with Intelligent Automation
  </h1>

  <p className="max-w-3xl text-base md:text-xl text-gray-900 font-semibold mb-8">
    Boston Tech India bridges the gap between complex infrastructure and intelligent automation.
    As a product-and-service hybrid, we build scalable web applications and IaaS solutions
    integrated with cutting-edge GenAI — helping organizations scale efficiently while
    significantly lowering total cost of ownership.
  </p>

  <div className="flex flex-col sm:flex-row gap-4">
    <button className="px-6 py-3 bg-black text-white rounded-lg hover:scale-105 transition">
      Explore Solutions
    </button>

    <button className="px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition">
      Talk to Us
    </button>
  </div>

</div>

      </div> */}
      {/* <div className="relative h-screen w-full overflow-hidden">

        <LightPillar
          topColor="#000dff"
          bottomColor="#32bdf0"
          intensity={1.1}
          rotationSpeed={1.3}
          glowAmount={0.005}
          pillarWidth={6}
          pillarHeight={0.4}
          noiseIntensity={0}
          pillarRotation={100}
          interactive={false}
          mixBlendMode="luminosity"
          quality="high"
        />

<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">

  <h1 className="text-4xl md:text-7xl font-bold text-black mb-6 leading-tight">
    Bridging Infrastructure <br className="hidden md:block" />
    with Intelligent Automation
  </h1>

  <p className="max-w-3xl text-base md:text-xl text-gray-900 font-semibold mb-8">
    Boston Tech India bridges the gap between complex infrastructure and intelligent automation.
    As a product-and-service hybrid, we build scalable web applications and IaaS solutions
    integrated with cutting-edge GenAI — helping organizations scale efficiently while
    significantly lowering total cost of ownership.
  </p>

  <div className="flex flex-col sm:flex-row gap-4">
    <button className="px-6 py-3 bg-black text-white rounded-lg hover:scale-105 transition">
      Explore Solutions
    </button>

    <button className="px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition">
      Talk to Us
    </button>
  </div>

</div>

      </div> */}


<div>
 

<div id="about">
  <Bottleneck />
</div>

<div id="product">
  <Suit />
</div>

<div id="services">
  <Service />
</div>

<div>
  <Partner />
</div>

<div id="contact">
  <Contact />
</div>

<Footer />


</div>

    </div>
  )
}

export default App
