import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch('http://localhost:4000/api/newsletter/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
        if (data.message === 'Subscribed successfully') {
          setEmail('');
        }
      })
      .catch((err) => {
        console.error('Error subscribing to newsletter:', err);
        setMessage('Failed to subscribe');
        setLoading(false);
      });
  };

  return (
    <section className="py-16 bg-blue-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Subscribe to Our Newsletter</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-500 px-6 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes('successfully') ? 'text-green-200' : 'text-red-200'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;