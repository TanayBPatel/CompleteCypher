import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, User, Send } from 'lucide-react';

const DiscussionPage = ({ question, onBack }) => {
  const [comments, setComments] = useState([
    {
      name: 'John D.',
      role: 'Student',
      comment: 'I found the quadratic formula very useful, but how do we decide when to use completing the square?',
      likes: 5,
      replies: 2,
      liked: false,
    },
    {
      name: 'Emily R.',
      role: 'Student',
      comment: 'Can someone explain why sometimes we get complex solutions?',
      likes: 8,
      replies: 3,
      liked: false,
    },
    {
      name: 'David K.',
      role: 'Student',
      comment: 'Factoring is the fastest method if the equation is simple!',
      likes: 4,
      replies: 1,
      liked: false,
    },
  ]);

  const [newReply, setNewReply] = useState('');

  const handleAddReply = () => {
    if (newReply.trim() !== '') {
      setComments([
        ...comments,
        {
          name: 'You',
          role: 'Student',
          comment: newReply,
          likes: 0,
          replies: 0,
          liked: false,
        },
      ]);
      setNewReply('');
    }
  };

  const handleLike = (index) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index
          ? { ...comment, likes: comment.liked ? comment.likes - 1 : comment.likes + 1, liked: !comment.liked }
          : comment
      )
    );
  };

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{question.title}</h1>
          <p className="text-gray-600 mt-1">
            Subject: <span className="text-indigo-500">{question.subject}</span>
          </p>
        </div>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
        >
          Back to Questions
        </button>
      </header>

      {/* Teacher's Highlighted Comment */}
      <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center">
            <span className="text-yellow-800 font-medium">T</span>
          </div>
          <div>
            <p className="font-semibold text-yellow-900">Ms. Johnson (Math Teacher)</p>
            <p className="text-sm text-gray-600">Verified Answer</p>
          </div>
        </div>
        <p className="mt-3 text-gray-900">
          Quadratic equations can be solved using factoring, completing the square, or the quadratic formula. The formula is:
          <br />
          <span className="text-indigo-600 font-semibold">x = (-b ± √(b² - 4ac)) / 2a</span>
        </p>
      </div>

      {/* Comments Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
        <h2 className="text-xl font-semibold">Discussion</h2>

        {comments.map((comment, index) => (
          <div key={index} className="border-b last:border-none pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-800 font-medium">{comment.name.charAt(0)}</span>
              </div>
              <div>
                <p className="font-medium">{comment.name}</p>
                <p className="text-sm text-gray-600">{comment.role}</p>
              </div>
            </div>
            <p className="mt-2 text-gray-900">{comment.comment}</p>
            <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
              <button
                onClick={() => handleLike(index)}
                className={`flex items-center space-x-1 ${comment.liked ? 'text-indigo-600' : ''}`}
              >
                <ThumbsUp className="w-4 h-4 cursor-pointer" />
                <span>{comment.likes} likes</span>
              </button>
              <div className="flex items-center space-x-1">
                <MessageSquare className="w-4 h-4" />
                <span>{comment.replies} replies</span>
              </div>
            </div>
          </div>
        ))}

        {/* Reply Box */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Add a Reply</h3>
          <div className="mt-3 flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-700" />
            </div>
            <input
              type="text"
              placeholder="Write your reply..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
            />
            <button
              onClick={handleAddReply}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;
