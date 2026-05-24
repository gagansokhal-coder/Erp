import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { RefreshCw } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rollNo, password }),
      });
      const data = await response.json();

      if (data.success) {
        onLogin(data.user);
        navigate('/');
      } else {
        setError(data.message || 'Authentication failed.');
      }
    } catch (err) {
      setError('System is unreachable.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-erp-bg flex flex-col items-center">
      <Header />
      
      <div className="w-full flex-1 flex justify-center mt-12 px-4">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 w-full max-w-md p-8">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-md flex items-center justify-center border border-amber-300 relative shadow-sm">
                <span className="text-3xl text-amber-700">👤</span>
                <div className="absolute -bottom-2 -right-2 bg-gray-100 p-1 rounded border border-gray-300 shadow">
                   <span className="text-lg">🔒</span>
                </div>
            </div>
            <h1 className="text-2xl font-bold text-erp-blue tracking-tight">NITJ ERP Login</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="text-red-600 text-sm font-semibold">{error}</div>
            )}
            
            <div className="space-y-1">
              <label className="text-sm font-bold text-erp-blue block">Username:</label>
              <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:border-erp-blue focus:ring-1 focus:ring-erp-blue outline-none text-sm text-gray-700"
                placeholder="Enter Username"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-erp-blue block">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:border-erp-blue focus:ring-1 focus:ring-erp-blue outline-none text-sm text-gray-700"
                placeholder="Enter Password"
                required
              />
            </div>

            <div className="space-y-1 flex items-center gap-4">
               <label className="text-md font-bold text-black w-20">Captcha</label>
               <div className="border border-blue-200 bg-white rounded flex-1 flex justify-center py-2 h-12 items-center text-2xl tracking-widest font-mono shadow-inner text-black">
                  169335
               </div>
            </div>

            <div className="flex gap-2">
               <input
                  type="text"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:border-erp-blue focus:ring-1 focus:ring-erp-blue outline-none text-sm text-gray-700"
                  placeholder="Enter Captcha Here"
                  required
               />
               <button type="button" className="px-3 py-2 border border-gray-300 bg-gray-100 rounded hover:bg-gray-200 text-gray-600">
                  <RefreshCw size={18} />
               </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 mt-2 bg-[#337ab7] hover:bg-[#286090] text-white font-bold rounded shadow-sm transition-colors"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="text-right mt-2">
               <a href="#" className="text-[#a94442] hover:text-[#843534] text-sm font-semibold">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-auto w-full">
         <div className="w-full bg-[#063970] text-white py-3 flex flex-col items-center justify-center text-xs mt-auto">
            <span>Copyright 2026 © NIT Jalandhar</span>
            <span>Developed by: Computer Centre, Dr. B.R. Ambedkar National Institute of Technology, Jalandhar</span>
         </div>
      </div>
    </div>
  );
};

export default Login;

