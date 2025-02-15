import React from 'react';
import { PlaySquare, Clock, Download, Search } from 'lucide-react';

const Recordings = () => {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Recorded Classes</h1>
          <p className="text-gray-600 mt-2">Access your past classes anytime</p>
        </div>
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search recordings..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Introduction to Algebra', subject: 'Mathematics', duration: '45 mins' },
          { title: 'Chemical Reactions', subject: 'Science', duration: '50 mins' },
          { title: 'World War II Overview', subject: 'History', duration: '60 mins' },
        ].map((recording, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <PlaySquare className="w-5 h-5 text-indigo-500" />
                <span className="text-indigo-500 font-medium">{recording.subject}</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <Download className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-lg font-semibold">{recording.title}</h3>
            <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{recording.duration}</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
              Watch Now
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Recently Watched</h2>
        <div className="space-y-4">
          {[
            { title: 'Algebraic Expressions', time: '2 hours ago' },
            { title: 'Periodic Table', time: 'Yesterday' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <PlaySquare className="w-5 h-5 text-indigo-500" />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">Watched {item.time}</p>
                </div>
              </div>
              <button className="text-indigo-600 hover:text-indigo-700">
                Resume
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recordings;