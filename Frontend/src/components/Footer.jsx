import React from "react";

export default function Footer() {
  return (
    <footer className="">
      {/* CTA Background Section */}
      <div
        className="bg-cover bg-center py-20 px-6 text-white text-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dhoqrms16/image/upload/v1750833888/Rectangle_q5cl9m.svg')",
          
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold max-w-2xl mx-auto mb-6">
          Learn more about our listing process, as well as our additional staging and design work.
        </h2>
        <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded hover:bg-gray-100">
          LEARN MORE
        </button>
      </div>

      {/* Blue Middle Bar */}
      <div className="bg-blue-600 py-6 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 font-medium">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Projects</li>
          <li className="hover:underline cursor-pointer">Testimonials</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
        <div className="flex gap-2 flex-wrap justify-center md:justify-end border">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="px-4 py-2 rounded text-black focus:outline-none"
          />
          <button className="bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-gray-100">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-6 px-6 md:px-20 text-white flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© All Rights Reserved 2025</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
