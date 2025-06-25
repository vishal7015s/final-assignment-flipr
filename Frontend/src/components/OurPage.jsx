// import React, { useEffect, useState } from "react";
// export default function OurProjects() {

//     const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(' https://final-assignment-flipr.onrender.com/api/projects')
//       .then((res) => res.json())
//       .then((data) => {
//         setProjects(data.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching projects:', err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section id="ourprojects" className="py-10 px-6 md:px-20 bg-blue-50">
//       <div className="text-center mb-10">
//         <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Projects</h2>
//         <p className="text-gray-600">
//           We know what buyers are looking for and suggest projects that bring top dollar.
//         </p>
//       </div>

//       {/* Sliding container */}
//       <div className="overflow-x-auto whitespace-nowrap pb-4">
//         <div className="flex gap-6 animate-slide-left">
//           {projects.map((project) => (
//             <div
//               key={project._id}
//               className="flex-row bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
//             >
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="rounded-t-lg h-50 w-60 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-blue-700 font-semibold">{project.name}</h3>
//                 <p className="text-sm text-gray-500 mb-4">{project.location}</p>
//                 <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600">
//                   SEE MORE
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";

export default function OurProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://final-assignment-flipr.onrender.com/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="ourprojects" className="py-20 px-4 sm:px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="text-center mb-16 max-w-5xl mx-auto">
        <span className="inline-block text-orange-500 font-medium mb-3">OUR PORTFOLIO</span>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Exceptional Properties <br className="hidden sm:block" /> Curated for You
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                  <span className="text-sm text-orange-500 font-medium">★ ★ ★ ★ ★</span>
                </div>
                <p className="text-gray-600 mb-4">{project.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-bold">₹{project.price || 'Price on request'}</span>
                  <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center transition-colors">
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}