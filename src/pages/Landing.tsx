import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const Landing: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="h-full flex flex-col items-center justify-between p-8 pt-20 pb-12 bg-white">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-64 h-64 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/7480/7480286.png"
                        alt="Illustration"
                        className="w-48 h-48 object-contain drop-shadow-xl"
                    />
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                    Discover Your <br />
                    <span className="text-orange-500">Dream Job</span> Here
                </h1>
                <p className="text-gray-500 font-medium px-4 leading-relaxed">
                    Explore all the existing job roles based on your interest and study major.
                </p>
            </div>

            <div className="w-full space-y-4">
                <Button fullWidth onClick={() => navigate('/login')}>
                    Login
                </Button>
                <div className="flex items-center justify-center gap-2">
                    <Button variant="ghost" className="font-bold underline decoration-2 decoration-orange-500/30" onClick={() => navigate('/signup')}>
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
