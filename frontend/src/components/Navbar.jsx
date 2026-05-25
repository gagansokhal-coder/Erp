import React from 'react';
import { Bell, Search, User, ChevronDown } from 'lucide-react';

const Navbar = ({ user }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm h-20 flex items-center justify-between px-8 z-10 sticky top-0 border-b border-slate-200">
      <div className="flex items-center gap-4 text-slate-500 w-1/3">
        <div className="relative w-full max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search modules, subjects, or peers..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-100/50 border border-slate-200 rounded-full focus:bg-white focus:border-primary-300 focus:ring-4 focus:ring-primary-50 outline-none text-sm transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-400 hover:text-primary-600 transition-colors rounded-full hover:bg-slate-50">
          <Bell size={22} />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200"></div>

        <button className="flex items-center gap-3 group hover:bg-slate-50 p-1.5 pr-3 rounded-full transition-colors">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold border border-primary-200 shadow-sm group-hover:shadow transition-all">
            <User size={20} />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-sm font-semibold text-slate-800 leading-tight">{user?.name || 'Student'}</p>
            <p className="text-xs text-slate-500 font-medium">Roll No: {user?.rollNo}</p>
          </div>
          <ChevronDown size={16} className="text-slate-400 group-hover:text-slate-600 transition-colors ml-1 hidden sm:block" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
