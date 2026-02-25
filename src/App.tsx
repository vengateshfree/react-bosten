import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Home from "./components/Home";
import Bottleneck from "./components/Bottleneck";
import Suit from "./components/Suit";
import Service from "./components/Service";
import Partner from "./components/Partner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import logo from "./assets/fulllogo.png";
import Hero from "./components/Hero";
import Nabar from "./components/Nabar";

// #0E4FA3	

// #1E73BE	

// #1AA0C8	

// #17B6A6 this is logo color

function App() {
  const [showWebsite, setShowWebsite] = useState(false);

  const handleScroll = () => {
    setShowWebsite(true);
  };

 const [li, setLi] = useState(false);

useEffect(() => {
  if (!showWebsite) return; // just return undefined/void

  const timer = setTimeout(() => {
    setLi(true);
  }, 800);

  return () => clearTimeout(timer); // cleanup function
}, [showWebsite]);
  return (
    <div>
      {/* Logo overlay */}
      <AnimatePresence>
        {!showWebsite && (
          <motion.div

            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={styles.logoSection}
            onWheel={handleScroll}
            onTouchMove={handleScroll}
            onClick={() => setShowWebsite(true)}
          >
            <img className="h-60 w-60" src={logo} alt="" />
          
          </motion.div>
        )}
      </AnimatePresence>

      {/* Website content */}
      {showWebsite && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Nabar />
          <div className="flex flex-col overflow-x-hidden w-screen">
            <Hero />

            {
              li && ( 
                <>
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

            <div id="contact" className="overflow-hidden" >
              <Contact />
            </div>

            <Footer />
                
                </>
              )
            }

        
          </div>
        </motion.div>
      )}
    </div>
  );
}

const styles = {
  logoSection: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 10,
  },
} as const;

export default App;