import React from 'react';
import { BarChart2, TrendingUp, Calendar, Award } from 'lucide-react';

const Progress = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Progress Tracking</h1>
        <p className="text-gray-600 mt-2">Monitor your learning journey</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Overall Progress</p>
              <p className="text-xl font-semibold">78%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Award className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Achievements</p>
              <p className="text-xl font-semibold">12 Earned</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Study Streak</p>
              <p className="text-xl font-semibold">15 Days</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-3 rounded-lg">
              <BarChart2 className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Weekly Growth</p>
              <p className="text-xl font-semibold">+15%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Subject Performance</h2>
          <div className="space-y-6">
            {[
              { subject: 'Mathematics', score: 85, change: '+5%' },
              { subject: 'Science', score: 78, change: '+3%' },
              { subject: 'History', score: 92, change: '+7%' },
            ].map((subject, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{subject.subject}</p>
                    <p className="text-sm text-green-600">{subject.change} this week</p>
                  </div>
                  <p className="text-2xl font-semibold">{subject.score}%</p>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${subject.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
          <div className="space-y-4">
            {[
              { title: 'Perfect Score', description: 'Scored 100% in Math Quiz', date: '2 days ago' },
              { title: 'Study Streak', description: '15 Days of Continuous Learning', date: 'Today' },
              { title: 'Fast Learner', description: 'Completed 5 Lessons in One Day', date: '1 week ago' },
            ].map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Learning Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Complete Algebra Course', progress: 65, deadline: '2 weeks' },
            { title: 'Master Chemical Equations', progress: 40, deadline: '1 month' },
            { title: 'History Essay Skills', progress: 90, deadline: '3 days' },
          ].map((goal, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">{goal.title}</h3>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">Progress</p>
                <p className="text-sm font-medium">{goal.progress}%</p>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">Due in {goal.deadline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;