import  { useState } from "react";
import contactimg from "../assets/contactimg.png"
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="flex justify-center" >
        <div className="inline-flex items-center gap-3 px-6 py-3 
      bg-gradient-to-r from-[#0B3C8A]/10 to-[#14A7B8]/10 
      border border-[#1E5DB3]/20 
      rounded-full mb-8 backdrop-blur-sm">

    <div className="relative">
      <div className="w-3 h-3 bg-[#14A7B8] rounded-full animate-pulse"></div>
      <div className="absolute inset-0 w-3 h-3 bg-[#2EC4C7] rounded-full blur-md opacity-60"></div>
    </div>

    <span className="text-sm font-semibold tracking-wide text-[#0B3C8A] uppercase">
    Get In Touch
    </span>
  </div>
  </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        

        {/* LEFT SIDE - IMAGE */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#1AA0C8] opacity-10 blur-3xl rounded-full"></div>
          
          <img
            src={contactimg}  // 🔥 replace with your image
            alt="Contact Boston Tech India"
            className="relative z-10 rounded-3xl shadow-2xl"
          />
        </div>

        {/* RIGHT SIDE - FORM */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0E4FA3] via-[#1E73BE] to-[#17B6A6] bg-clip-text text-transparent">
            Let’s Talk Infrastructure
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Tell us about your automation goals and infrastructure challenges.
          </p>

          <div className="mt-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            {success ? (
              <div className="text-center py-6">
                <h3 className="text-2xl font-semibold text-[#0E4FA3]">
                  ✅ Message Sent!
                </h3>
                <p className="mt-2 text-gray-600">
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                />

                <textarea
                  name="message"
                //   rows="4"
                  placeholder="Tell us about your requirements..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#0E4FA3] via-[#1E73BE] to-[#17B6A6] hover:opacity-90 transition"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
