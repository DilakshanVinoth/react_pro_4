

import React, { useState } from 'react';
import contactImage from '../assets/images/PUBG-4K-HD-Desktop-Wallpaper-82777.jpg'; // Contact image path

function Contact() {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // Add further logic for form handling, such as sending data to an API
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center py-20">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200">
            If you have any questions or inquiries, feel free to reach out to us.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-zinc-800">
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xl text-yellow-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-zinc-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xl text-yellow-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-zinc-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xl text-yellow-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                className="w-full px-4 py-3 bg-zinc-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-zinc-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
