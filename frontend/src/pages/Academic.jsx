import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Academic = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header user={user} onLogout={onLogout} title="Home" subtitle="Academic Menu" />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto p-4 bg-white">
          <div className="max-w-6xl mx-auto">
            
            {/* Steps / Tabs Table */}
            <div className="border border-gray-300 mb-6 text-sm flex flex-col">
              <div className="flex border-b border-gray-300">
                 <div className="w-48 bg-[#1f4e79] text-white font-bold p-2 flex items-center border-r border-gray-300">Academic Activity:</div>
                 <div className="flex-1 grid grid-cols-4 divide-x divide-gray-300">
                    <div className="p-2 text-center text-[#337ab7] hover:underline cursor-pointer">Personal Details Verification</div>
                    <div className="p-2 text-center text-[#337ab7] hover:underline cursor-pointer">Feedback Form Submission</div>
                    <div className="p-2 text-center text-[#337ab7] hover:underline cursor-pointer">Semester Fee Payment</div>
                    <div className="p-2 text-center text-[#337ab7] hover:underline cursor-pointer">Semester Registration</div>
                 </div>
              </div>
              <div className="flex">
                 <div className="w-48 bg-[#3b82f6] text-white p-2 flex items-center border-r border-gray-300">Status:</div>
                 <div className="flex-1 grid grid-cols-4 divide-x divide-gray-300 bg-white">
                    <div className="p-2 flex justify-center"><span className="bg-[#5cb85c] text-white text-[10px] font-bold px-2 py-0.5 rounded">COMPLETED</span></div>
                    <div className="p-2 flex justify-center"><span className="bg-[#5cb85c] text-white text-[10px] font-bold px-2 py-0.5 rounded">COMPLETED</span></div>
                    <div className="p-2 flex justify-center"><span className="bg-[#5cb85c] text-white text-[10px] font-bold px-2 py-0.5 rounded">COMPLETED</span></div>
                    <div className="p-2 flex justify-center"><span className="bg-[#5cb85c] text-white text-[10px] font-bold px-2 py-0.5 rounded">COMPLETED</span></div>
                 </div>
              </div>
            </div>

            {/* Main Content Box */}
            <div className="border border-gray-300 rounded mb-4 shadow-sm">
              <div className="bg-[#337ab7] text-white p-2.5 text-lg font-medium">
                Personal Details Verification
              </div>
              
              <div className="p-0">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr>
                      <td colSpan="3" className="text-center font-bold text-[#063970] p-2 bg-gray-50 border-b border-gray-200">
                         Student Details
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="font-bold text-[#063970] p-3 w-1/4 align-top">Roll No.:</td>
                      <td className="p-3 w-1/2 align-top">{user?.rollNo || ''}</td>
                      <td rowSpan="4" className="p-3 w-1/4 border-l border-gray-200 text-center align-middle">
                         <div className="w-32 h-40 bg-gray-200 mx-auto border border-gray-300 flex items-center justify-center overflow-hidden">
                            {user?.photoUrl ? (
                               <img src={user.photoUrl} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                               <span className="text-gray-400">Photo</span>
                            )}
                         </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="font-bold text-[#063970] p-3 align-top">Student Name:</td>
                      <td className="p-3 align-top font-bold">
                         {user?.name?.toUpperCase() || ''}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="font-bold text-[#063970] p-3 align-top">Branch:</td>
                      <td className="p-3 align-top uppercase">COMPUTER SCIENCE AND ENGINEERING</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="font-bold text-[#063970] p-3 align-top">Course:</td>
                      <td className="p-3 align-top">B.Tech</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="font-bold text-[#063970] p-3 align-top">Batch:</td>
                      <td className="p-3 align-top" colSpan="2">2025</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="font-bold text-[#063970] p-3 align-top">Father's Name:</td>
                      <td className="p-3 align-top uppercase" colSpan="2">{user?.fatherName?.toUpperCase() || 'BHAGAT RAM'}</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="font-bold text-[#063970] p-3 align-top">Mother's Name:</td>
                      <td className="p-3 align-top uppercase" colSpan="2">{user?.motherName?.toUpperCase() || 'KANTA RANI'}</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="font-bold text-[#063970] p-3 align-top">Mobile:</td>
                      <td className="p-3 align-top" colSpan="2">{user?.mobile || '9465774926'}</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="font-bold text-[#063970] p-3 align-top">Official Email ID:</td>
                      <td className="p-3 align-top" colSpan="2">{user?.officialEmail || 'gagandeep.cs.25@nitj.ac.in'}</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="font-bold text-[#063970] p-3 align-top">Personal Email ID:</td>
                      <td className="p-3 align-top" colSpan="2">{user?.personalEmail || 'gagansokhal077@gmail.com'}</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="font-bold text-[#063970] p-3 align-top">Correspondence Address:</td>
                      <td className="p-3 align-top" colSpan="2">645 Vpo.saiyadwala,abohar (Distt. Fazilka) Punjab - 152128</td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="p-4 border-t border-gray-200">
                   <p className="text-[#a94442] text-sm">
                      <strong>Note:</strong> Please carefully verify your details (such as the spelling of your name, your parent's name, etc.). In case of any discrepancy, kindly report the same to the Academic Section (Batch Incharge). <a href="#" className="text-[#337ab7] hover:underline font-medium">Click here for Contact Details</a>
                   </p>
                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-center">
                   <button className="bg-[#d9534f] hover:bg-[#c9302c] text-white px-8 py-2 rounded text-sm transition-colors shadow-sm">
                      Verify
                   </button>
                </div>
              </div>
            </div>

            <p className="text-[#a94442] text-sm mt-4">
              In case of any technical difficulty, Kindly contact at <strong>webmaster@nitj.ac.in</strong>
            </p>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Academic;

