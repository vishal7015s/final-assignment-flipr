import React, { useState } from 'react';

const ClientManagement = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    designation: '',
    image: null,
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('designation', formData.designation);
    data.append('cimage', formData.image);

    try {
      const response = await fetch('http://localhost:4000/api/client', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to add client');

      setMessage('Client added successfully');
      setFormData({ name: '', description: '', designation: '', image: null });
    } catch (err) {
      console.error('Error adding client:', err);
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Add New Client</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Client Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>
        <div>
          <label htmlFor="designation" className="block text-gray-700">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-gray-700">Client Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            accept="image/*"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Client'}
        </button>
        {message && (
          <p className={`mt-2 text-center ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ClientManagement;