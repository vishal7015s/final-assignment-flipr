import React, { useState, useEffect } from 'react';

const SubscribedEmails = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/api/newsletters')
      .then((res) => res.json())
      .then((data) => {
        setEmails(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching emails:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Subscribed Email Addresses</h2>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : emails.length === 0 ? (
        <p className="text-center text-gray-600">No subscriptions yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Date Subscribed</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((email) => (
                <tr key={email._id} className="hover:bg-gray-100">
                  <td className="p-2 border">{email.email}</td>
                  <td className="p-2 border">{new Date(email.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SubscribedEmails;