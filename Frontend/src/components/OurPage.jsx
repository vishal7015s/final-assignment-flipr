// src/components/OurProjects.js
import React, { useEffect, useState } from "react";

// const projects = [
//   {
//     title: "Consultation",
//     location: "Project Name • Location",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     title: "Design",
//     location: "Project Name • Location",
//     image:
//       "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     title: "Marketing & Design",
//     location: "Project Name • Location",
//     image:
//       "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     title: "Consultation & Marketing",
//     location: "Project Name • Location",
//     image:
//       "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     title: "Consultation & Marketing",
//     location: "Project Name • Location",
//     image:
//       "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     title: "Consultation & Marketing",
//     location: "Project Name • Location",
//     image:
//       "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     title: "Consultation",
//     location: "Project Name • Location",
//     image:
//       "https://images.unsplash.com/photo-1600585153964-4e0bb0645e39?auto=format&fit=crop&w=400&q=80",
//   },
// ];



export default function OurProjects() {

    const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(' https://final-assignment-flipr.onrender.com/api/projects')
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
    <section id="ourprojects" className="py-10 px-6 md:px-20 bg-blue-50">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Projects</h2>
        <p className="text-gray-600">
          We know what buyers are looking for and suggest projects that bring top dollar.
        </p>
      </div>

      {/* Sliding container */}
      <div className="overflow-x-auto whitespace-nowrap pb-4">
        <div className="flex gap-6 animate-slide-left">
          {projects.map((project) => (
            <div
              key={project._id}
              className="flex-row bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-t-lg h-50 w-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-blue-700 font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{project.location}</p>
                <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600">
                  SEE MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
