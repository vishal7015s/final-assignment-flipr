// src/components/HappyClients.js
import React, { useEffect, useState } from "react";

// const clients = [
//   {
//     name: "Rawan Smith",
//     title: "1245, New York",
//     image: "https://randomuser.me/api/portraits/women/65.jpg",
//     feedback:
//       "I was extremely pleased with the communication, photography, and the overall service. Trust and follow-up made a big difference.",
//   },
//   {
//     name: "Shivya Kayak",
//     title: "Real Estate Agent",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     feedback:
//       "A great experience from consultation to closing. Very thorough, creative, and trustworthy team.",
//   },
//   {
//     name: "John Lapons",
//     title: "1245, Los Angeles",
//     image: "https://randomuser.me/api/portraits/men/12.jpg",
//     feedback:
//       "Excellent advice, strong communication, and helpful tips for marketing. Great value for service.",
//   },
//   {
//     name: "Marry Freeman",
//     title: "Marketing Manager, Florida",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//     feedback:
//       "Loved the design and marketing approach. It really helped sell my property faster.",
//   },
//   {
//     name: "Lucy",
//     title: "Marketing Architect",
//     image: "https://randomuser.me/api/portraits/women/32.jpg",
//     feedback:
//       "Trustworthy and professional from day one. Highly recommend them for any real estate need.",
//   },
// ];

export default function HappyClients() {

  const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(' https://final-assignment-flipr.onrender.com/api/clients')
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

  return (
    <section id="happyclients" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-10">
        Happy Clients
      </h2>

      <div className="overflow-x-auto whitespace-nowrap pb-4">
        <div className="flex gap-6 animate-slide-left">
          {clients.map((client) => (
            <div
              key={client._id}
              className="text-wrap inline-block w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 text-center"
            >
              <img
                src={client.image}
                alt={client.name}
                className="mx-auto mb-3 w-16 h-16 rounded-full object-cover"
              />
              <p className="text-sm text-gray-600 mb-4">{client.name}</p>
              <h3 className="font-semibold text-blue-700">{client.designation}</h3>
              <p className="text-sm text-gray-500">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
