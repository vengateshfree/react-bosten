
  import { useEffect, useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import Bottleneck from "./components/Bottleneck";
  import Suit from "./components/Suit";
  import Service from "./components/Service";
  import Partner from "./components/Partner";
  import Contact from "./components/Contact";
  import Footer from "./components/Footer";
  import logo from "./assets/fulllogo.png";
  import Hero from "./components/Hero";
  import Nabar from "./components/Nabar";
  import About from "./components/About";

  function App() {
    const [showWebsite, setShowWebsite] = useState(false);
    const [li, setLi] = useState(false);

    // Automatically hide logo after 2 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowWebsite(true);
      }, 1700);

      return () => clearTimeout(timer);
    }, []);

    const handleScroll = () => {
      setShowWebsite(true);
    };

    useEffect(() => {
      if (!showWebsite) return;

      const timer = setTimeout(() => {
        setLi(true);
      }, 100);

      return () => clearTimeout(timer);
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
              // style={styles.logoSection}
      
    className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-white z-10"

              onWheel={handleScroll}
              onTouchMove={handleScroll}
              onClick={handleScroll}
            >
              <img className="h-60 w-60" src={logo} alt="Logo" />
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
              <div id="home">
                <Hero />
              </div>

              {li && (
                <>
                  <div id="about" className="z-50">
                    <About />
                  </div>

                  <div id="solutions"  className="z-50">
                    <Bottleneck />
                  </div>

                  <div id="product"  className="z-50">
                    <Suit />
                  </div>

                  <div id="services" className="z-50">
                    <Service />
                  </div>

                  <div className="z-50">
                    <Partner />
                  </div>

                  <div id="contact" className="z-50">
                    <Contact />
                  </div>

                  <Footer />
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  // const styles = {
  //   logoSection: {
  //     height: "100vh",
  //     display: "flex",
  //     flexDirection: "column",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     background: "#ffffff",
  //     position: "fixed",
  //     width: "100%",
  //     top: 0,
  //     left: 0,
  //     zIndex: 10,
  //   },
  // };

  export default App;

