import React from 'react';
import { Video, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
const LiveClasses = () => {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Live Classes</h1>
          <p className="text-gray-600 mt-2">Join interactive live sessions with your teachers</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Join Class
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Class */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-green-500">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Video className="w-5 h-5 text-green-500" />
              <span className="text-green-500 font-medium">Live Now</span>
            </div>
            <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm"
            onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}>
              Join
            </button>
          </div>
          <h3 className="text-lg font-semibold">Mathematics</h3>
          <p className="text-gray-600 text-sm mt-1">Algebra Fundamentals</p>
          <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>24 students</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>45 mins</span>
            </div>
          </div>
        </div>

        {/* Upcoming Classes */}
        {/* <Link to='teams'> */}
        {[1, 2].map((i) => (
          <Link to='/teams'>
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-indigo-500" />
                <span className="text-indigo-500 font-medium">Upcoming</span>
              </div>
              <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm">
                Remind Me
              </button>
            </div>
            <h3 className="text-lg font-semibold">{i === 1 ? 'Science' : 'History'}</h3>
            <p className="text-gray-600 text-sm mt-1">
              {i === 1 ? 'Chemistry Lab' : 'World War II'}
            </p>
            <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>18 enrolled</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{i === 1 ? '2:00 PM' : '3:30 PM'}</span>
              </div>
            </div>
          </div>
          </Link>
        ))}
        {/* </Link> */}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Class Schedule</h2>
        <div className="space-y-4">
          {['Monday', 'Tuesday', 'Wednesday'].map((day) => (
            <div key={day} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">{day}</p>
                <p className="text-sm text-gray-600">3 Classes Scheduled</p>
              </div>
              <Link to='/teams'>
              <button className="text-indigo-600 hover:text-indigo-700">
                View Details
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveClasses;