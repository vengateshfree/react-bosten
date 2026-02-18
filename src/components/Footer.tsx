// import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../assets/tlogo.png"; // replace with your logo path


function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
            <span className="text-xl font-bold">Boston Tech <br /> India</span>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <a href="/about" className="hover:text-white transition-colors">About Us</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500 pb-6">
          © {new Date().getFullYear()} Boston Tech India. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
