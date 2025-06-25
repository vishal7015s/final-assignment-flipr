import React, { useState } from "react";
import { FaTwitter, FaYoutube, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://final-assignment-flipr.onrender.com/api/newsletter/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      setMessage(data.message);
      
      if (data.message === 'Subscribed successfully') {
        setEmail('');
      }
    } catch (err) {
      console.error('Error subscribing to newsletter:', err);
      setMessage('Failed to subscribe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="font-sans">
      {/* CTA Background Section */}
      <div
        className="bg-cover bg-center py-20 px-6 text-white text-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dhoqrms16/image/upload/v1750833888/Rectangle_q5cl9m.svg')",
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
      <div className="bg-blue-600 py-8 px-6 md:px-20 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 font-medium">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Projects</li>
            <li className="hover:underline cursor-pointer">Testimonials</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
          
          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
              <div className="flex gap-2 w-full border">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="px-4 py-2 rounded text-black focus:outline-none flex-1 min-w-[200px]"
                  required
                />
                <button 
                  type="submit"
                  className="bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-gray-100 disabled:opacity-50 whitespace-nowrap"
                  disabled={loading}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <div className={`text-center w-full text-sm ${
                  message.includes('successfully') ? 'text-green-200' : 'text-red-200'
                }`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-6 px-6 md:px-20 text-white flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© All Rights Reserved {new Date().getFullYear()}</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}