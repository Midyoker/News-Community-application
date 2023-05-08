import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="mr-6 font-bold text-xl text-gray-900">
              Reddit Clone
            </a>
            <a href="/" className="mr-3 text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/" className="mr-3 text-gray-600 hover:text-gray-900">
              Popular
            </a>
            <a href="/" className="mr-3 text-gray-600 hover:text-gray-900">
              All
            </a>
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold">
              Create Post
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
