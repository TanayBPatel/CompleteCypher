import React from 'react';
import { useNavigate } from "react-router-dom";
import { Brain, Target, Trophy, Zap } from 'lucide-react';

const Practice = () => {

  const navigate = useNavigate();

  const practices = [
    { title: "Algebra Basics", questions: 15, difficulty: "Medium", path: "/quiz-algebra" },
    { title: "Chemical Equations", questions: 10, difficulty: "Hard", path: "/quiz-chemical" },
    { title: "Historical Events", questions: 20, difficulty: "Easy", path: "/quiz-historical" },
  ];
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Practice</h1>
        <p className="text-gray-600 mt-2">Interactive exercises to reinforce your learning</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Target className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Daily Goal</p>
              <p className="text-xl font-semibold">8/10 Questions</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Trophy className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Current Level</p>
              <p className="text-xl font-semibold">Advanced</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Zap className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Points Today</p>
              <p className="text-xl font-semibold">240</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Brain className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Mastery Level</p>
              <p className="text-xl font-semibold">85%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Recommended Practice</h2>
      <div className="space-y-4">
        {practices.map((practice, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">{practice.title}</p>
              <p className="text-sm text-gray-600">
                {practice.questions} questions • {practice.difficulty}
              </p>
            </div>
            <button
              onClick={() => navigate(practice.path)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Start
            </button>
          </div>
        ))}
      </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
          <div className="space-y-4">
            {[
              { subject: 'Mathematics', progress: 75 },
              { subject: 'Science', progress: 60 },
              { subject: 'History', progress: 90 },
            ].map((subject, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium">{subject.subject}</p>
                  <p className="text-sm text-gray-600">{subject.progress}%</p>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;