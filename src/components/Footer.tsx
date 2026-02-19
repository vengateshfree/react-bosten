// import React from "react";
import logo from "../assets/fulllogo.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0E4FA3] via-[#1AA0C8] to-[#17B6A6] text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-black transition duration-300">
              Home
            </a>
            <a href="#about" className="hover:text-black transition duration-300">
              About
            </a>
            <a href="#services" className="hover:text-black transition duration-300">
              Services
            </a>
            <a href="#product" className="hover:text-black transition duration-300">
              Product
            </a>
            <a href="#contact" className="hover:text-black transition duration-300">
              Contact
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 h-[1px] bg-white/30" />

        {/* Bottom */}
        <div className="text-center text-sm text-white/80 py-6">
          © {new Date().getFullYear()} Boston Tech India. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
