import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto py-24">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <form className="mt-6 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            type="text"
            id="name"
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            type="email"
            id="email"
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            id="message"
            rows={5}
            required
            placeholder="Type your message here"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded-md transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
