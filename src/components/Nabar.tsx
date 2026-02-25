import React, { useEffect, useState } from 'react'
import logo from "../assets/fulllogo.png";
function Nabar() {
    
      const [open, setOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const [showNav, setShowNav] = useState(true);
      const [lastScrollY, setLastScrollY] = useState(0);

      
      
        // Scroll handling for navbar
        useEffect(() => {
          const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 50);
            setShowNav(currentScrollY < lastScrollY || currentScrollY < 100);
            setLastScrollY(currentScrollY);
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, [lastScrollY]);
      
        // Mouse move handling for navbar
        useEffect(() => {
          const handleMouseMove = (e: MouseEvent) => {
            if (window.scrollY < 50 || e.clientY < 50) setShowNav(true);
            else setShowNav(false);
          };
          window.addEventListener("mousemove", handleMouseMove);
          return () => window.removeEventListener("mousemove", handleMouseMove);
        }, []);



  return (
   <>
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
   </>
  )
}

export default Nabar