// // src/components/HappyClients.js
// import React, { useEffect, useState } from "react";
// export default function HappyClients() {

//   const [clients, setClients] = useState([]);
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       fetch(' https://final-assignment-flipr.onrender.com/api/clients')
//         .then((res) => res.json())
//         .then((data) => {
//           setClients(data.data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error('Error fetching clients:', err);
//           setLoading(false);
//         });
//     }, []);

//   return (
//     <section id="happyclients" className="py-20 px-6 md:px-20 bg-white">
//       <h2 className="text-2xl font-bold text-center text-blue-700 mb-10">
//         Happy Clients
//       </h2>

//       <div className="overflow-x-auto whitespace-nowrap pb-4">
//         <div className="flex gap-6 animate-slide-left">
//           {clients.map((client) => (
//             <div
//               key={client._id}
//               className="text-wrap inline-block w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 text-center"
//             >
//               <img
//                 src={client.image}
//                 alt={client.name}
//                 className="mx-auto mb-3 w-16 h-16 rounded-full object-cover"
//               />
//               <p className="text-sm text-gray-600 mb-4">{client.name}</p>
//               <h3 className="font-semibold text-blue-700">{client.designation}</h3>
//               <p className="text-sm text-gray-500">{client.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useState, useRef } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HappyClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    fetch('https://final-assignment-flipr.onrender.com/api/clients')
      .then((res) => res.json())
      .then((data) => {
        setClients(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching clients:', err);
        setLoading(false);
      });
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (clients.length > 3 && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % (clients.length - 2));
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [clients.length, isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + clients.length) % (clients.length - 2));
    resetInterval();
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % (clients.length - 2));
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (clients.length - 2));
    }, 5000);
  };

  return (
    <section id="happyclients" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={sliderRef}
          >
            {/* Slider container */}
            <div className="whitespace-nowrap transition-transform duration-700 ease-[cubic-bezier(0.645,0.045,0.355,1)]"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {clients.map((client) => (
                <div 
                  key={client._id}
                  className="inline-block whitespace-normal align-top w-1/3 px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full">
                    <div className="flex items-center mb-6">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold text-blue-800">{client.name}</h3>
                        <p className="text-sm text-blue-600">{client.designation}</p>
                      </div>
                    </div>
                    <FaQuoteLeft className="text-blue-200 text-2xl mb-4" />
                    <p className="text-gray-600 mb-6 flex-grow">{client.description}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-500">4.0/5.0</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            {clients.length > 3 && (
              <>
                <button 
                  onClick={goToPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors z-10"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft className="text-blue-600 text-xl" />
                </button>
                <button 
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors z-10"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight className="text-blue-600 text-xl" />
                </button>
              </>
            )}

            {/* Indicator dots */}
            {clients.length > 3 && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: Math.ceil(clients.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index * 3)}
                    className={`w-3 h-3 rounded-full transition-all ${currentIndex >= index * 3 && currentIndex < (index + 1) * 3 ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial group ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}