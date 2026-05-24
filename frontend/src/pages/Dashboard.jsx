import React from 'react';
import Header from '../components/Header';
import { GraduationCap, Edit, Home, Printer, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header user={user} onLogout={onLogout} title="Home" />
      
      {/* Ticker */}
      <div className="border-b-2 border-erp-blue py-2 px-4 flex justify-center bg-white shadow-sm">
         <div className="text-erp-blue font-bold text-md flex items-center gap-2 animate-pulse">
            <span className="text-xl">👉</span> Mental Health & Counselling Helpline Numbers
         </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 lg:p-12">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center lg:justify-start">
          
          <Link to="/academic" className="group flex items-center justify-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-28 bg-gray-100 rounded-2xl hover:bg-erp-hover transition-colors shadow-sm">
             <div className="flex items-center gap-3 text-black group-hover:text-white transition-colors">
                <GraduationCap size={28} className="fill-current stroke-2" />
                <span className="text-xl font-bold tracking-tight">ACADEMIC MODULE</span>
             </div>
          </Link>

          <Link to="/complaint" className="group flex items-center justify-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-28 bg-gray-100 rounded-2xl hover:bg-erp-hover transition-colors shadow-sm">
             <div className="flex items-center gap-3 text-black group-hover:text-white transition-colors">
                <Edit size={24} className="stroke-2" />
                <span className="text-xl font-bold tracking-tight">COMPLAINT PORTAL</span>
             </div>
          </Link>

          <Link to="/guesthouse" className="group flex items-center justify-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-28 bg-gray-100 rounded-2xl hover:bg-erp-hover transition-colors shadow-sm">
             <div className="flex items-center gap-3 text-black group-hover:text-white transition-colors">
                <Home size={28} className="fill-current stroke-2" />
                <span className="text-xl font-bold tracking-tight">GUEST HOUSE BOOKING</span>
             </div>
          </Link>

          <Link to="/equipment" className="group flex items-center justify-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-28 bg-gray-100 rounded-2xl hover:bg-erp-hover transition-colors shadow-sm">
             <div className="flex items-center gap-3 text-black group-hover:text-white transition-colors">
                <Printer size={28} className="fill-current stroke-2" />
                <span className="text-xl font-bold tracking-tight">EQUIPMENT BOOKING</span>
             </div>
          </Link>

          <Link to="/connect" className="group flex items-center justify-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-28 bg-gray-100 rounded-2xl hover:bg-erp-hover transition-colors shadow-sm">
             <div className="flex items-center gap-3 text-black group-hover:text-white transition-colors">
                <User size={28} className="fill-current stroke-2" />
                <span className="text-xl font-bold tracking-tight">CONNECT PORTAL</span>
             </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

