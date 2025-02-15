import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, MessageSquare, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Questions = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [questions, setQuestions] = useState([
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
  ]);

  const [newQuestion, setNewQuestion] = useState({
    title: '',
    subject: '',
    status: 'pending',
  });

  const handleSubmit = () => {
    if (newQuestion.title.trim() && newQuestion.subject.trim()) {
      setQuestions([...questions, { ...newQuestion, replies: 0, likes: 0 }]);
      setShowForm(false);
      setNewQuestion({ title: '', subject: '', status: 'pending' });
    }
  };

  const filteredQuestions = selectedFilter
    ? questions.filter((q) => q.subject === selectedFilter)
    : questions;

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Questions</h1>
          <p className="text-gray-600 mt-2">Ask questions and get help from teachers and peers</p>
        </div>
        <div className="relative flex space-x-4">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <Filter className="w-5 h-5 text-gray-600" />
            <span>{selectedFilter ? selectedFilter : 'Filter'}</span>
          </button>
          {showFilter && (
            <div className="absolute top-12 right-0 bg-white shadow-md border rounded-lg w-40">
              {['Mathematics', 'Science', 'History', 'All'].map((subject, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedFilter(subject === 'All' ? null : subject);
                    setShowFilter(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {subject}
                </button>
              ))}
            </div>
          )}
          <button
            onClick={() => setShowForm(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Ask Question
          </button>
        </div>
      </header>

      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Ask a Question</h2>
            <button onClick={() => setShowForm(false)}>
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <input
            type="text"
            placeholder="Question Title"
            value={newQuestion.title}
            onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
            className="w-full border p-2 rounded mb-3"
          />
          <select
            value={newQuestion.subject}
            onChange={(e) => setNewQuestion({ ...newQuestion, subject: e.target.value })}
            className="w-full border p-2 rounded mb-3"
          >
            <option value="">Select Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
          </select>
          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Submit Question
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {filteredQuestions.length === 0 ? (
            <p className="text-gray-600">No questions found for the selected filter.</p>
          ) : (
            filteredQuestions.map((question, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-indigo-500" />
                    <span className="text-indigo-500 font-medium">{question.subject}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      question.status === 'answered'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}
                  >
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
                <Link to='mathdiscussion'>
                <button className="mt-4 w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100">
                  View Discussion
                </button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
