import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Video, 
  PlaySquare, 
  FileText, 
  ClipboardList, 
  Brain,
  MessageCircle,
  BarChart2
} from 'lucide-react';

const Sidebar = () => {
  const links = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/live", icon: Video, label: "Live Classes" },
    { to: "/recordings", icon: PlaySquare, label: "Recordings" },
    { to: "/notes", icon: FileText, label: "Notes" },
    { to: "/assignments", icon: ClipboardList, label: "Assignments" },
    { to: "/practice", icon: Brain, label: "Practice" },
    { to: "/questions", icon: MessageCircle, label: "Questions" },
    { to: "/progress", icon: BarChart2, label: "Progress" },
    { to: "/story", icon:  FileText, label: "Story Mode" }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
      <nav className="space-y-2">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
