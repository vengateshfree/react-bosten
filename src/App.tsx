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
    <div id="home" className="min-h-screen w-screen overflow-hidden">

      {/* Navbar */}
    <nav
  className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ${
    scrolled
      ? "bg-black/30 backdrop-blur-md border-white/20"
      : "bg-black/30 backdrop-blur-md border-white/20"
  }`}
>
      <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center">

          {/* Logo */}
          {/* Logo */}
          <div className="flex items-center space-x-3 text-white">
            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
            {/* <span className="text-lg font-bold">Boston Tech <br /> India</span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-white font-medium">
            <a href="#home">Home</a>
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#product">Product</a>
<a href="#contact">Contact</a>

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg px-6 pb-6 space-y-4 text-black font-medium">
            <a href="#home">Home</a>
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#product">Product</a>
<a href="#contact">Contact</a>

          </div>
        )}
      </nav>


      {/* Hero Section */}
      <div className="relative h-screen w-screen overflow-hidden">

        <LightPillar
          topColor="#000dff"
          bottomColor="#32bdf0"
          intensity={1.1}
          rotationSpeed={1.3}
          glowAmount={0.010}
          pillarWidth={4}
          pillarHeight={0.4}
          noiseIntensity={0}
          pillarRotation={100}
          interactive={false}
          mixBlendMode="luminosity"
          quality="medium"
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
