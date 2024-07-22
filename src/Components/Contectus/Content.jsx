import React from 'react';

const FlexTwoColumnLayou = () => {
  return (
    <div className="flex flex-wrap max-w-6xl mx-auto mt-8">
      {/* Column 1 - Content and Form */}
      <div className="w-full md:w-1/2 p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4">Content Section</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien ac nulla
            dapibus aliquam. Morbi rutrum sodales odio vitae commodo. Sed lacinia augue id mi
            rhoncus, vel vestibulum libero efficitur.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Form Section</h2>
          {/* Placeholder for Form (You can integrate a form component here) */}
          <form className="bg-gray-200 p-4 rounded-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none">Submit</button>
          </form>
        </div>
      </div>

      {/* Column 2 - US Map */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">US Map Section</h2>
        {/* Placeholder for US Map (You can integrate a map component here) */}
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <p className="text-xl">US Map Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default FlexTwoColumnLayou;
