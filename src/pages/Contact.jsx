import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl text-center font-bold mb-10 text-white">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="bg-gray-800 text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-4">
            Have questions or need assistance? Feel free to reach out to us! We’d love to hear from you.
          </p>
          <ul>
            <li className="mb-2">
              <strong>Address:</strong> 123 Vapor Street, Vape City, VC 45678
            </li>
            <li className="mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </li>
            <li className="mb-2">
              <strong>Email:</strong> contact@vaporworld.com
            </li>
            <li>
              <strong>Hours:</strong> Mon - Fri: 9am - 9pm | Sat - Sun: 10am - 6pm
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
