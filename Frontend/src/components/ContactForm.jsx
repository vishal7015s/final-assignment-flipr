// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     mobile: '',
//     city: '',
//   });
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     fetch('http://localhost:4000/api/contact/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setMessage(data.message);
//         setLoading(false);
//         if (data.message === 'Contact form submitted successfully') {
//           setFormData({ fullName: '', email: '', mobile: '', city: '' });
//         }
//       })
//       .catch((err) => {
//         console.error('Error submitting contact form:', err);
//         setMessage('Failed to submit form');
//         setLoading(false);
//       });
//   };

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
//         >
//           <div className="mb-4">
//             <label htmlFor="fullName" className="block text-gray-700 mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="mobile" className="block text-gray-700 mb-2">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               id="mobile"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               pattern="\d{10}"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="city" className="block text-gray-700 mb-2">
//               City
//             </label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
//             disabled={loading}
//           >
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//           {message && (
//             <p
//               className={`mt-4 text-center ${
//                 message.includes('successfully') ? 'text-green-600' : 'text-red-600'
//               }`}
//             >
//               {message}
//             </p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;


import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted', formData); // Debug log
    setLoading(true);
    setMessage(''); // Clear previous message

    try {
      const response = await fetch('http://localhost:4000/api/contact', { // Removed trailing slash
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setMessage(data.message);
      if (data.message === 'Contact form submitted successfully') {
        setFormData({ fullName: '', email: '', mobile: '', city: '' });
      }
    } catch (err) {
      console.error('Error submitting contact form:', err.message, err);
      setMessage(err.message === 'Failed to submit form' ? err.message : 'Network error or server issue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700 mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              pattern="\d{10}"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          {message && (
            <p
              className={`mt-4 text-center ${
                message.includes('successfully') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;