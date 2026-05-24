import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, LogOut } from 'lucide-react';

const Header = ({ user, onLogout, title, subtitle }) => {
  return (
    <div className="w-full flex flex-col">
      {/* Top Header - Blue */}
      <div className="bg-erp-blue w-full flex items-center px-6 py-3">
        <div className="flex items-center gap-4">
          <img 
            src="/nitj.png" 
            alt="NITJ Logo" 
            className="w-16 h-16 bg-white rounded-full p-1 border-2 border-erp-yellow object-contain"
          />
          <div className="text-white flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-wide">डॉ बी आर अम्बेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</span>
            <span className="text-lg md:text-xl tracking-wider">Dr B R Ambedkar National Institute of Technology Jalandhar</span>
          </div>
        </div>
      </div>

      {/* Yellow Border Line */}
      <div className="w-full h-1 bg-erp-yellow"></div>

      {/* Navigation Bar - Dark */}
      <div className="bg-erp-dark text-white px-6 py-2 flex items-center justify-between text-sm shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-erp-yellow">| ERP - NITJ |</span>
          {title && (
            <>
               <span className="mx-1">{title === 'Home' ? <Settings size={14} className="inline mr-1"/> : ''}</span>
               <span className="text-gray-300">{title}</span>
            </>
          )}
          {subtitle && (
            <>
               <span className="text-gray-400 mx-1">=</span>
               <span className="text-gray-300">{subtitle}</span>
            </>
          )}
        </div>

        {user && (
          <div className="flex items-center gap-6">
            <span className="text-erp-yellow">
              Welcome <span className="text-white">{user.rollNo}, {user.name?.toUpperCase()}</span>
            </span>
            <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
              <Settings size={14} /> Change Password
            </button>
            <button 
              onClick={onLogout}
              className="flex items-center gap-1 hover:text-gray-300 transition-colors"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
