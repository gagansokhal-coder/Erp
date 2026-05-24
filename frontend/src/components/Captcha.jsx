import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const Captcha = ({ onValidate }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [input, setInput] = useState('');

  const generateCaptcha = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setInput('');
    onValidate(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    onValidate(val === captchaText);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <div className="bg-blue-50 text-blue-900 px-4 py-2 rounded font-mono text-xl tracking-widest font-bold border border-blue-200 select-none">
          {captchaText}
        </div>
        <button
          type="button"
          onClick={generateCaptcha}
          className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
          title="Refresh Captcha"
        >
          <RefreshCw size={20} />
        </button>
      </div>
      <input
        type="text"
        placeholder="Enter Captcha Here"
        value={input}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
      />
    </div>
  );
};

export default Captcha;
