import logo from "../assets/fulllogo.png";
import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0B1E3C] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Company Info */}
          <div>
            <img src={logo} alt="Boston Tech India Logo" className="w-24 mb-6" />
            <p className="text-sm leading-relaxed text-gray-400">
              Boston Tech India delivers intelligent automation and 
              infrastructure solutions designed for modern enterprises. 
              We empower organizations with scalable, secure, and 
              future-ready technology platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-[#1AA0C8] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#1AA0C8] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1AA0C8] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-[#1AA0C8] transition">
                  Product
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1AA0C8] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1AA0C8] mt-1" />
                <p className="text-gray-400">
                  Salem, Tamil Nadu, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1AA0C8]" />
                <p className="text-gray-400">
                  contact@bostontechindia.com
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1AA0C8]" />
                <p className="text-gray-400">
                  +91 98765 43210
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Boston Tech India. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;