import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="h-full flex flex-col justify-end p-8 pb-12 bg-white">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
                <p className="text-gray-500 text-lg leading-snug">
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit,
                </p>
            </div>

            <div className="space-y-4">
                <button
                    onClick={() => navigate('/signup')}
                    className="w-full py-3.5 px-4 bg-[#6c25ff] hover:bg-[#5b1ee0] text-white font-medium rounded-lg transition-colors cursor-pointer"
                >
                    Create Account
                </button>
                <button
                    onClick={() => navigate('/login-form')}
                    className="w-full py-3.5 px-4 bg-[#ceb7ff] hover:bg-[#c0a3ff] text-black font-medium rounded-lg transition-colors cursor-pointer opacity-90"
                >
                    Already Registered? Login
                </button>
            </div>
        </div>
    );
};

export default Landing;
