import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-indigo-600">AdaptLearn</h1>
          <Link to="/speech" >
          <button className="text-gray-600 hover:text-indigo-600">
            Summary-to-Speech
          </button>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;