import React from 'react';
import { useTheme } from '../../ThemeContext';

import registerbusiness from "../../assets/business/registerbusiness.svg";
import BusinessCard from '../../components/business/BusinessCard';
import { useState } from 'react';

const BusinessRegistration = () => {
  const { isDark } = useTheme();
  const [language, setLanguage] = useState("");

  return (
    <div className={`min-h-screen transition-colors ${isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"}`}>
      <header className="flex justify-between items-center p-5">
        <p className={`${isDark ? "text-gray-300" : "text-gray-500"} cursor-pointer`}>{"< "} Back</p>

        <div className="flex items-center gap-4">
          <div className="relative">
            <select
              className={`
                border 
                border-gray-300 
                rounded-lg 
                p-3 
                w-full 
                focus:outline-[#4461F2]
                appearance-none
                cursor-pointer
                pr-8
                ${isDark ? "bg-[#323D4E] text-white border-gray-600" : "bg-white text-black"}
              `}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              ▼
            </span>
          </div>

          <button
            onClick={() => console.log("Sign in clicked")}
            className={`
              bg-[#4461F2] 
              rounded-xl 
              w-[130px] 
              h-[42px] 
              text-white
            `}
          >
            Sign in
          </button>
        </div>
      </header>

      <div className='flex justify-center items-center gap-10 p-5'>
        <div className='flex flex-col gap-10 items-start justify-start h-screen w-1/2'>
          <div className="flex gap-4">
            <img src={registerbusiness} alt="image" />
            <h1 className='font-bold text-4xl mt-2'>Reviewer <br /> <span className='text-[#4169E1] mt-3'>For Businesses</span></h1>
          </div>

          <div className='flex flex-col gap-5 w-[80%]'>
            <BusinessCard
              title={"Build Your Credibility with reviews"}
              description={"Reviewer stars and content are proven to convert at higher <br> rates than those of competitors"}
            />
            <BusinessCard
              title={"Build Your Credibility with reviews"}
              description={"Reviewer stars and content are proven to convert at higher <br> rates than those of competitors"}
            />
            <BusinessCard
              title={"Build Your Credibility with reviews"}
              description={"Reviewer stars and content are proven to convert at higher <br> rates than those of competitors"}
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label className={`${isDark ? "text-white" : "text-black"}`}>Account Information</label>
          <input
            type="text"
            placeholder={
              language === "Arabic"
                ? "أدخل بريدك الإلكتروني"
                : "Enter Your First Name"
            }
            className={`border border-gray-300 rounded-lg p-3 focus:outline-[#4461F2] ${
              isDark ? "bg-[#323D4E] text-white border-gray-600" : "bg-white text-black"
            }`}
          />

          <input
            type="text"
            placeholder={
              language === "Arabic"
                ? "أدخل بريدك الإلكتروني"
                : "Enter Your Last Name"
            }
            className={`border border-gray-300 rounded-lg p-3 focus:outline-[#4461F2] ${
              isDark ? "bg-[#323D4E] text-white border-gray-600" : "bg-white text-black"
            }`}
          />

          <input
            type="text"
            placeholder={
              language === "Arabic"
                ? "أدخل بريدك الإلكتروني"
                : "Enter Your Number"
            }
            className={`border border-gray-300 rounded-lg p-3 focus:outline-[#4461F2] ${
              isDark ? "bg-[#323D4E] text-white border-gray-600" : "bg-white text-black"
            }`}
          />

          <input
            type="text"
            placeholder={
              language === "Arabic"
                ? "أدخل بريدك الإلكتروني"
                : "Enter Your Password"
            }
            className={`border border-gray-300 rounded-lg p-3 focus:outline-[#4461F2] ${
              isDark ? "bg-[#323D4E] text-white border-gray-600" : "bg-white text-black"
            }`}
          />

          <label className={`${isDark ? "text-white" : "text-black"}`}>Business Information</label>
          <div className="relative">
            <select
              className={`border border-gray-300 rounded-lg p-3 w-full focus:outline-[#4461F2] appearance-none cursor-pointer pr-8 ${
                isDark ? "bg-[#323D4E] text-white border-gray-600" : "bg-white text-black"
              }`}
            >
              <option value="">Business Category</option>
              <option value="">opt 1</option>
              <option value="">opt 2</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              ▼
            </span>
          </div>

          <input
            type="text"
            placeholder={
              language === "Arabic"
                ? "أدخل بريدك الإلكتروني"
                : "Business Name"
            }
            className={`border border-gray-300 rounded-lg p-3 focus:outline-[#4461F2] ${
              isDark ? "bg-[#323D4E] text-white border-gray-600" : "bg-white text-black"
            }`}
          />

          <input
            type="text"
            placeholder={
              language === "Arabic"
                ? "أدخل بريدك الإلكتروني"
                : "Website Link"
            }
            className={`border border-gray-300 rounded-lg p-3 focus:outline-[#4461F2] ${
              isDark ? "bg-[#323D4E] text-white border-gray-600" : "bg-white text-black"
            }`}
          />

          <label className={`${isDark ? "text-white" : "text-black"}`}>Verify Business</label>
          <div className="relative">
            <select
              className={`border border-gray-300 rounded-lg p-3 w-full focus:outline-[#4461F2] appearance-none cursor-pointer pr-8 ${
                isDark ? "bg-[#323D4E] text-white border-gray-600" : "bg-white text-black"
              }`}
            >
              <option value="">Business Category</option>
              <option value="">opt 1</option>
              <option value="">opt 2</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              ▼
            </span>
          </div>

          <label className={`${isDark ? "text-white" : "text-black"}`}>Business verification Certificate</label>
          <input 
            type="file" 
            className={`border border-gray-300 rounded-lg p-3 focus:outline-[#4461F2] ${
              isDark ? "bg-[#323D4E] text-white border-gray-600" : "bg-white text-black"
            }`}
          />

          <button
            onClick={() => {}}
            className="bg-[#4461F2] text-white rounded-xl py-3 mt-2 font-semibold hover:bg-blue-600 transition-colors"
          >
            {language === "Arabic" ? "تسجيل الدخول" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegistration;
