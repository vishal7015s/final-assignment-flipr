import React from "react";
import OurProjects from "../components/OurPage";
import HappyClients from "../components/HappyClient";
import Footer from "../components/Footer";
import { useState , useRef} from "react";
import toast from "react-hot-toast";

const ConsultationPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     city: "",
//   });
const formRef = useRef()
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    console.log("Form submitted", formData); // Debug log
    setLoading(true);
    setMessage(""); // Clear previous message

    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        // Removed trailing slash
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      setMessage(data.message);
      formRef.current.reset();
      toast.success("Form submitted successfully");

    } catch (err) {
        toast.error("Something went wrong")
      console.error("Error submitting contact form:", err.message, err);
      setMessage(
        err.message === "Failed to submit form"
          ? err.message
          : "Network error or server issue"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans w-full overflow-x-hidden">
      {/* Navbar */}
      {/* <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
        <div className="text-2xl font-bold text-blue-700">
          <span className="inline-block mr-2">
            <svg
              className="w-6 h-6 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9l9-7 9 7v11a2 2 0 002 2H1a2 2 0 002-2z"
              />
            </svg>
          </span>
          Real <span className="text-gray-800">Trust</span>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Services
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Projects
          </a>
          <a href="#" className="hover:text-blue-600">
            Testimonials
          </a>
        </nav>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded">
          Contact
        </button>
      </header> */}

      {/* Hero Section */}
      <section
      id="home"
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-between px-10"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dhoqrms16/image/upload/v1750841365/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home_1_przzwc.svg')",
        }}
      >
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Consultation, <br /> Design, <br /> & Marketing
          </h1>
        </div>
        {/* Form Card */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 bg-opacity-90 text-white p-8 rounded-xl shadow-2xl w-full max-w-sm transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold mb-6 text-yellow-300 border-b-2 border-yellow-400 pb-2">
            Get a Free Consultation
          </h2>
          <form className="flex flex-col gap-6" ref={formRef} onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="px-4 py-3 rounded-lg text-gray-900 bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              className="px-4 py-3 rounded-lg text-gray-900 bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              className="px-4 py-3 rounded-lg text-gray-900 bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
            />
            <input
              type="text"
              name="city"
              placeholder="Area/City"
              className="px-4 py-3 rounded-lg text-gray-900 bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>

      {/* Realtor Section */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Text Block */}
          <div>
            <h2 className="text-blue-700 text-2xl font-semibold mb-4">
              Not Your Average Realtor
            </h2>
            <p className="text-gray-600">
              Real Trust is the agency for selling top property, exceptional
              consulting design, and effective marketing to get homeowners top
              dollar with less stress.
            </p>
          </div>

          {/* Image Block */}
          <div className="flex justify-center relative">
            <div className="relative w-[320px] h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
                alt="Main Realtor"
                className="rounded-full border-4 border-white shadow-lg w-48 h-48 object-cover absolute left-16 top-0"
              />
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=300&q=80"
                alt="Couple"
                className="rounded-full border-4 border-white shadow-md w-32 h-32 object-cover absolute right-0 top-8"
              />
              <img
                src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=300&q=80"
                alt="Agent"
                className="rounded-full border-4 border-white shadow-md w-28 h-28 object-cover absolute left-8 bottom-0"
              />
            </div>
          </div>
        </div>
        {/* Why Choose Us */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex justify-center mb-2">
                <img src="https://res.cloudinary.com/dhoqrms16/image/upload/v1750838140/home_zhnywh.svg"></img>
              </div>
              <h3 className="font-bold text-blue-800">Potential ROI</h3>
              <p className="text-sm text-gray-600 mt-2">
                Gain better returns on selling by leveraging our research and
                pricing strategies.
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <img src="https://res.cloudinary.com/dhoqrms16/image/upload/v1750838140/paintbrush-2_ez8lbq.svg"></img>
              </div>
              <h3 className="font-bold text-blue-800">Design</h3>
              <p className="text-sm text-gray-600 mt-2">
                Our interior design services elevate your space for the best
                showing experience.
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <img src="https://res.cloudinary.com/dhoqrms16/image/upload/v1750838139/circle-dollar-sign_icqwuy.svg"></img>
              </div>
              <h3 className="font-bold text-blue-800">Marketing</h3>
              <p className="text-sm text-gray-600 mt-2">
                Strong branding, smart advertising, and market exposure across
                channels.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="aboutus" className="bg-white py-20 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fifteen years of experience in real estate, excellent customer
            service and a commitment to work hard, listen and follow through. We
            provide quality services to build relationships with clients and,
            more importantly, maintain those relationships by communicating
            effectively.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=300&q=80"
            alt="Client Meeting"
            className="w-56 h-40 object-cover rounded shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=300&q=80"
            alt="Property Tour"
            className="w-56 h-40 object-cover rounded shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=300&q=80"
            alt="Customer Service"
            className="w-56 h-40 object-cover rounded shadow-md"
          />
        </div>
        <div className="text-center mt-8">
          <button className="border border-blue-600 text-blue-600 font-medium px-6 py-2 rounded hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </section>
      <OurProjects />
      <HappyClients />
      <Footer />
    </div>
  );
};

export default ConsultationPage;
