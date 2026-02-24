import React, { useEffect, useState, useCallback } from "react";
import logo from "../assets/fulllogo.png";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

function Hero() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [init, setInit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

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

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (window.scrollY < 50) return setShowNav(true);
      if (e.clientY < 50) setShowNav(true);
      else if (e.clientY > 50) setShowNav(false);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <div className="relative min-h-screen">
      
  <div className="relative min-h-screen">
  {/* Gradient Background */}
  <div
    className="absolute inset-0 -z-20"
    style={{
      background: "linear-gradient(to bottom right, #f0f7ff, #e6fbff, #f0f7ff)"

    }}
  ></div>

  {/* Particles */}
  {init && (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: false, mode: "repulse" },
          },
          modes: { push: { quantity: 4 }, repulse: { distance: 120, duration: 0.4 } },
        },
        particles: {
          color: { value: ["#007bff", "#00ffff"] },
          links: { color: "#007bff", distance: 100, enable: true, opacity: 0.3, width: 1 },
          move: { direction: "none", enable: true, outModes: { default: "bounce" }, speed: 1.2 },
          number: { density: { enable: true }, value: 150 },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 2, max: 5 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  )}

  {/* Hero Content */}
  <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] bg-clip-text text-transparent">
      Bridging Infrastructure with Intelligent Automation
    </h1>
    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl">
      Boston Tech India bridges the gap between complex infrastructure and intelligent automation...
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
  </section>
</div>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 transform
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? "bg-white backdrop-blur-md border-white/20 shadow-lg" : "bg-white/50 backdrop-blur-md border-white/10"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-3 text-white">
            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
          </div>
          <div className="hidden md:flex justify-center items-center gap-8 text-white font-medium">
            <a href="#home" className="hover:text-cyan-400 text-[#1E73BE] transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 text-[#1E73BE] transition">About</a>
            <a href="#product" className="hover:text-cyan-400 text-[#1E73BE] transition">Product</a>
            <a href="#services" className="hover:text-cyan-400 text-[#1E73BE] transition">Services</a>
            <a href="#contact" className="hover:text-cyan-400 text-[#1E73BE] transition">Contact</a>
          </div>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="ml-4 px-6 py-2 rounded-xl font-semibold text-white 
              bg-gradient-to-r from-[#1E73BE] via-[#1E73BE] to-[#17B6A6] 
              hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Contact
            </a>
          </div>
          <button className="md:hidden text-blue-600 text-2xl" onClick={() => setOpen(!open)}>☰</button>
        </div>
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg px-6 pb-6 pt-4 space-y-4 text-black font-medium shadow-xl">
            <a href="#home" onClick={() => setOpen(false)} className="block">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="block">About</a>
            <a href="#product" onClick={() => setOpen(false)} className="block">Product</a>
            <a href="#services" onClick={() => setOpen(false)} className="block">Services</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block">Contact</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-center mt-4 px-5 py-2 rounded-lg bg-black text-white font-semibold">
              Visit Us
            </a>
          </div>
        )}
      </nav>


    </div>
  );
}

export default Hero;