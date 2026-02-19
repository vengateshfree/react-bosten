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
import LightPillar from "./components/LightPillar"
import Bottleneck from "./components/Bottleneck"
import Partner from "./components/Partner"
import Service from "./components/Service"
import Suit from "./components/Suit"
import Footer from "./components/Footer"
import logo from "./assets/fulllogo.png"; // replace with your logo path
import Contact from "./components/Contact"

function App() {
  const [open, setOpen] = useState(false)

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home" className="min-h-screen w-full overflow-hidden">

      {/* Navbar */}
  <nav
  className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ${
    scrolled
      ? "bg-black/40 backdrop-blur-md border-white/20"
      : "bg-black/30 backdrop-blur-md border-white/10"
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
    <div className="hidden md:flex items-center gap-8 text-white font-medium">
{/* 
            <a href="#home">Home</a>
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#product">Product</a>
<a href="#contact">Contact</a> */}
      <a href="#home" className="hover:text-cyan-400 transition">
        Home
      </a>

      <a href="#about" className="hover:text-cyan-400 transition">
        About
      </a>

       <a href="#product" className="hover:text-cyan-400 transition">
        Product
      </a>

      <a href="#services" className="hover:text-cyan-400 transition">
        Services
      </a>

     
           <a href="#contact" className="hover:text-cyan-400 transition">
        Contact
      </a>

      {/* Contact Button */}
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
      className="md:hidden text-white text-2xl"
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



      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">

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

        {/* Content */}
     {/* Content */}
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
{/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#0B3C8A]">
   Bridging Infrastructure <br />
   with Intelligent  {" "}
    <span className="bg-gradient-to-r 
      from-[#0B3C8A] 
      via-[#1E5DB3] 
      to-[#14A7B8] 
      bg-clip-text text-transparent">
  Automation
    </span>
  </h1> */}
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

      </div>


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
