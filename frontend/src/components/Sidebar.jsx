import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, BarChart2, FileText, CreditCard, List, MessageSquare, BookOpen, GraduationCap, Archive, PlusSquare } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/academic/personal', label: 'Personal Details', icon: <User size={16} className="text-erp-blue" /> },
    { path: '/academic/attendance', label: 'Class Attendance Report', icon: <BarChart2 size={16} className="text-erp-blue" /> },
    { path: '/academic/evaluation', label: 'Evaluation Report', icon: <BarChart2 size={16} className="text-erp-blue" /> },
    { path: '/academic/mess', label: 'Mess Advance Payment', icon: <CreditCard size={16} className="text-erp-blue" /> },
    { path: '/academic/registration', label: 'Semester Registration', icon: <List size={16} className="text-erp-blue" /> },
    { path: '/academic/subject-feedback', label: 'Subject-Teacher Feedback', icon: <MessageSquare size={16} className="text-erp-blue" /> },
    { path: '/academic/course-feedback', label: 'Course Outcomes Feedback', icon: <MessageSquare size={16} className="text-erp-blue" /> },
    { path: '/academic/result', label: 'Examination Result', icon: <BarChart2 size={16} className="text-erp-blue" /> },
    { path: '/academic/repository', label: 'Academic Repository', icon: <BookOpen size={16} className="text-erp-blue" /> },
    { path: '/academic/carry-subject', label: 'Carry Subject Registration', icon: <PlusSquare size={16} className="text-erp-blue" /> },
  ];

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col font-sans">
      <div className="bg-erp-sidebar text-white p-3 font-semibold text-lg">
         Academic Menu
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="flex flex-col text-sm text-erp-blue font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="border-b border-gray-100 last:border-0">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                    index === 0 || isActive ? 'border-l-4 border-erp-blue bg-gray-50' : 'border-l-4 border-transparent'
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

