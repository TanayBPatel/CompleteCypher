import React from 'react';
import { FileText, Plus, Star, Search } from 'lucide-react';

const Notes = () => {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notes</h1>
          <p className="text-gray-600 mt-2">Organize your learning materials</p>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search notes..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            <Plus className="w-5 h-5" />
            <span>New Note</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Algebra Formulas', subject: 'Mathematics', starred: true },
          { title: 'Chemical Equations', subject: 'Science', starred: false },
          { title: 'Historical Dates', subject: 'History', starred: true },
        ].map((note, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-indigo-500" />
                <span className="text-indigo-500 font-medium">{note.subject}</span>
              </div>
              <button className={`${note.starred ? 'text-yellow-400' : 'text-gray-400'} hover:text-yellow-400`}>
                <Star className="w-5 h-5" fill={note.starred ? 'currentColor' : 'none'} />
              </button>
            </div>
            <h3 className="text-lg font-semibold">{note.title}</h3>
            <p className="text-gray-600 text-sm mt-2">
              Last edited 2 hours ago
            </p>
            <div className="flex space-x-2 mt-4">
              <button className="flex-1 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100">
                Edit
              </button>
              <button className="flex-1 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100">
                Share
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="space-y-4">
          {[
            { title: 'Study Schedule', type: 'Planner' },
            { title: 'Exam Preparation', type: 'Checklist' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-indigo-500" />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.type}</p>
                </div>
              </div>
              <button className="text-indigo-600 hover:text-indigo-700">
                Open
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;