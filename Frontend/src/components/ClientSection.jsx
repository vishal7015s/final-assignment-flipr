import React, { useState, useEffect } from 'react';

const ClientSection = () => {
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Happy Clients</h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading clients...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <div
                key={client._id}
                className="bg-gray-100 rounded-lg shadow-lg p-6 text-center"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                <p className="text-gray-600 mb-2">{client.designation}</p>
                <p className="text-gray-500 italic">"{client.description}"</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientSection;