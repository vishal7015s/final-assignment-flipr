import React, { useState, useEffect } from 'react';

const ContactDetails = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(' https://final-assignment-flipr.onrender.com/api/contact')
      .then((res) => res.json())
      .then((data) => {
        setContacts(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching contacts:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Contact Form Submissions</h2>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : contacts.length === 0 ? (
        <p className="text-center text-gray-600">No submissions yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Full Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Mobile</th>
                <th className="p-2 border">City</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id} className="hover:bg-gray-100">
                  <td className="p-2 border">{contact.fullName}</td>
                  <td className="p-2 border">{contact.email}</td>
                  <td className="p-2 border">{contact.mobileNumber}</td>
                  <td className="p-2 border">{contact.areaCity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;