import React from 'react';
import { MessageCircle, ThumbsUp, MessageSquare, Filter } from 'lucide-react';

const Questions = () => {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Questions</h1>
          <p className="text-gray-600 mt-2">Ask questions and get help from teachers and peers</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5 text-gray-600" />
            <span>Filter</span>
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Ask Question
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {[
            {
              title: 'How do I solve quadratic equations?',
              subject: 'Mathematics',
              replies: 5,
              likes: 12,
              status: 'answered',
            },
            {
              title: 'Need help understanding photosynthesis',
              subject: 'Science',
              replies: 3,
              likes: 8,
              status: 'pending',
            },
            {
              title: 'Timeline of World War II events',
              subject: 'History',
              replies: 7,
              likes: 15,
              status: 'answered',
            },
          ].map((question, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-indigo-500" />
                  <span className="text-indigo-500 font-medium">{question.subject}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  question.status === 'answered'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {question.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{question.title}</h3>
              <div className="flex items-center space-x-6 mt-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>{question.replies} replies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{question.likes} likes</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100">
                View Discussion
              </button>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Mathematics',
                'Science',
                'History',
                'Homework',
                'Exam Prep',
                'Study Tips',
              ].map((tag, index) => (
                <button
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Top Contributors</h2>
            <div className="space-y-4">
              {[
                { name: 'Ms. Johnson', role: 'Math Teacher', answers: 156 },
                { name: 'Mr. Smith', role: 'Science Teacher', answers: 132 },
                { name: 'Sarah P.', role: 'Student Mentor', answers: 89 },
              ].map((contributor, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-medium">
                        {contributor.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{contributor.name}</p>
                      <p className="text-sm text-gray-600">{contributor.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{contributor.answers} answers</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;