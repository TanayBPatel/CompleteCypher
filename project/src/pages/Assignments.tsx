import React from 'react';
import { ClipboardList, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import algebraPdf from './algebra.pdf';

const Assignments = () => {
  const handleStartClick = (assignment) => {
    // const pdfMap = {
    //   'Algebra Problem Set': '/algebra.pdf',
    //   'Lab Report': '/pdfs/lab-report.pdf',
    //   'Essay': '/pdfs/essay.pdf',
    // };

    // const pdfUrl = pdfMap[assignment.title] || '/pdfs/default.pdf';
    // window.open(pdfUrl, '_blank');
    window.open(algebraPdf, '_blank');
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
        <p className="text-gray-600 mt-2">Track and submit your assignments</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 p-6 rounded-xl border border-red-200">
          <div className="flex items-center space-x-2 text-red-600 mb-1">
            <AlertCircle className="w-5 h-5" />
            <h3 className="font-semibold">Due Soon</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">3</p>
        </div>

        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <div className="flex items-center space-x-2 text-green-600 mb-1">
            <CheckCircle className="w-5 h-5" />
            <h3 className="font-semibold">Completed</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">12</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center space-x-2 text-blue-600 mb-1">
            <Clock className="w-5 h-5" />
            <h3 className="font-semibold">Upcoming</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">5</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold">Current Assignments</h2>
        </div>
        <div className="border-t border-gray-200">
          {[
            { title: 'Algebra Problem Set', subject: 'Mathematics', due: '2 days', status: 'pending' },
            { title: 'Lab Report', subject: 'Science', due: '1 week', status: 'in-progress' },
            { title: 'Essay', subject: 'History', due: 'Tomorrow', status: 'pending' },
          ].map((assignment, index) => (
            <div
              key={index}
              className="p-6 flex items-center justify-between border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <ClipboardList className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{assignment.title}</h3>
                  <p className="text-sm text-gray-600">{assignment.subject}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Due {assignment.due}</p>
                  <p className="text-sm text-gray-600">Status: {assignment.status}</p>
                </div>
                <button
                  onClick={() => handleStartClick(assignment)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assignments;
