import React, { useEffect, useState } from 'react';
import { Flame, Clock, Award, BookOpen } from 'lucide-react';

const Dashboard = () => {
  const [minutesSpent, setMinutesSpent] = useState(() => {
    return parseInt(localStorage.getItem("minutesSpent")) || 0;
  });
  
  const [activities, setActivities] = useState(() => {
    const savedActivities = localStorage.getItem("activities");
    return savedActivities ? JSON.parse(savedActivities) : [
      { id: 1, text: "Completed Practice Set", subject: "Mathematics", minutesAgo: 15 },
      { id: 2, text: "Watched Recording", subject: "Science", minutesAgo: 60 },
    ];
  });

  const [upcomingClasses, setUpcomingClasses] = useState([
    { id: 1, subject: "Mathematics", topic: "Algebra Basics", timeUntilClass: 30 },
    { id: 2, subject: "Science", topic: "Chemistry Lab", timeUntilClass: 120 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutesSpent((prev) => {
        const updatedMinutes = prev + 1;
        localStorage.setItem("minutesSpent", updatedMinutes);
        return updatedMinutes;
      });
      
      setActivities((prev) => {
        const updatedActivities = prev.map((activity) => ({
          ...activity,
          minutesAgo: activity.minutesAgo + 1,
        }));
        localStorage.setItem("activities", JSON.stringify(updatedActivities));
        return updatedActivities;
      });

      setUpcomingClasses((prev) => {
        return prev.map((cls) => ({
          ...cls,
          timeUntilClass: Math.max(cls.timeUntilClass - 1, 0),
        }));
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const formatTimeSpent = () => {
    const hours = Math.floor((120 + minutesSpent) / 60);
    const mins = (120 + minutesSpent) % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Chris!</h1>
        <p className="text-gray-600 mt-2">Let's continue your learning journey.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-red-100 p-3 rounded-lg">
              <Flame className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Daily Streak</p>
              <p className="text-xl font-semibold">7 days</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Time Spent Today</p>
              <p className="text-xl font-semibold">{formatTimeSpent()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Award className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Points Earned</p>
              <p className="text-xl font-semibold">850</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed Tasks</p>
              <p className="text-xl font-semibold">12/15</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Upcoming Classes</h2>
          <div className="space-y-4">
            {upcomingClasses.map((cls) => (
              <div key={cls.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{cls.subject}</p>
                  <p className="text-sm text-gray-600">{cls.topic}</p>
                </div>
                <p className="text-sm text-indigo-600">In {cls.timeUntilClass} minutes</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Clock className="w-4 h-4 text-gray-500 animate-pulse" />
                </div>
                <div>
                  <p className="font-medium">{activity.text}</p>
                  <p className="text-sm text-gray-600">
                    {activity.subject} - {activity.minutesAgo} minutes ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
