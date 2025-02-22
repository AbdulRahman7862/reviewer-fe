import { useState } from "react";
import ModeratorHeader from "../../components/moderator/ModeratorHeader";
import moderator from "../../assets/moderator.png";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function ModeratorLogin() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <ModeratorHeader />
            
            {/* Centering Content */}
            <div className="grid grid-cols-2 place-items-center h-full w-full">
                {/* Left - Image */}
                <div className="flex justify-end">
                    <img src={moderator} alt="moderator" className="w-[918.88px] h-[527px] object-contain" />
                </div>

                {/* Right - Form */}
                <div className="w-96 p-6">
                    {/* Role Selection */}
                    <div className="relative">
                        <select className="w-full p-3 bg-[#EAF0F7] rounded-lg text-gray-700 appearance-none">
                            <option>Moderator</option>
                        </select>
                        <IoIosArrowDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
                    </div>

                    {/* Phone Number Input */}
                    <div className="relative mt-4">
                        <input
                            type="text"
                            placeholder="Enter Your Number"
                            className="w-full p-3 bg-[#EAF0F7] rounded-lg pr-10 text-gray-700"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {phone && (
                            <FaTimes
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                                onClick={() => setPhone("")}
                            />
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="relative mt-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full p-3 bg-[#EAF0F7] rounded-lg pr-10 text-gray-700"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    {/* Recover Password */}
                    <div className="text-right text-gray-400 text-sm mt-2 cursor-pointer hover:underline">
                        Recover Password?
                    </div>

                    {/* Sign In Button */}
                    <button className="w-full mt-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
}
