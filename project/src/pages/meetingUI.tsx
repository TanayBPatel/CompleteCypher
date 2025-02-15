import React from 'react';
import { Video, Mic, MicOff, Settings } from 'lucide-react';

const TeamsMeeting = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300 text-white rounded-3xl">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-6">
        <h2 className="text-center text-xl font-semibold">Microsoft Teams meeting</h2>
        
        <input 
          type="text" 
          placeholder="Enter your name" 
          className="w-full p-3 bg-gray-700 rounded-lg text-white outline-none"
          defaultValue="Tanay Patel"
        />
        
        <div className="flex space-x-6">
          {/* Camera Off Section */}
          <div className="flex-1 bg-gray-100 p-6 rounded-lg text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-full">
              <Video className="w-8 h-8 text-gray-400" />
            </div>
            <p className="mt-2 text-gray-400">Your camera is turned off</p>
          </div>

          {/* Audio Section */}
          <div className="flex-1 bg-gray-700 p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Audio</h3>
            <div className="mt-3 space-y-3">
              <button className="w-full flex items-center justify-between px-4 py-2 bg-gray-600 rounded-lg">
                <span>Computer Audio</span>
                <span className="text-green-400">✔</span>
              </button>
              <button className="w-full flex items-center justify-between px-4 py-2 bg-gray-600 rounded-lg">
                <span>Phone Audio</span>
                <span></span>
              </button>
              <button className="w-full flex items-center justify-between px-4 py-2 bg-gray-600 rounded-lg">
                <span>Don't Use Audio</span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button className="text-gray-400">Cancel</button>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamsMeeting;
