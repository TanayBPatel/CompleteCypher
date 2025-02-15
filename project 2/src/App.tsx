import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import LiveClasses from './pages/LiveClasses';
import Recordings from './pages/Recordings';
import Notes from './pages/Notes';
import Assignments from './pages/Assignments';
import Practice from './pages/Practice';
import Questions from './pages/Questions';
import Progress from './pages/Progress';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/live" element={<LiveClasses />} />
              <Route path="/recordings" element={<Recordings />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/progress" element={<Progress />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;