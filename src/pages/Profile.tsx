import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { LogOut, MapPin, Share2, MoreVertical, ArrowLeft as ArrowLeftIcon } from 'lucide-react';

const Profile: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="h-full bg-gray-50">
            {/* Header Image */}
            <div className="h-48 bg-orange-500 relative rounded-b-[40px] shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
                <div className="absolute top-4 w-full flex justify-between px-6 text-white z-10">
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-colors">
                        <ArrowLeftIcon className="w-5 h-5" onClick={() => navigate(-1)} />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="px-6 -mt-16 pb-8 relative z-10">
                <div className="flex flex-col items-center">
                    {/* Avatar */}
                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden mb-4 bg-white relative">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">Alex Davidson</h2>
                    <p className="text-gray-500 font-medium">UI/UX Designer</p>

                    {/* Stats */}
                    <div className="flex items-center gap-8 mt-6 w-full justify-center">
                        <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">120</p>
                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Reviews</p>
                        </div>
                        <div className="w-[1px] h-8 bg-gray-200"></div>
                        <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">4.8</p>
                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Rating</p>
                        </div>
                        <div className="w-[1px] h-8 bg-gray-200"></div>
                        <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">$45</p>
                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Hourly</p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 mt-8 w-full">
                        <Button fullWidth className="bg-orange-500 shadow-orange-500/30">
                            Contact me
                        </Button>
                        <Button variant="secondary" className="px-4">
                            <Share2 className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* About */}
                    <div className="w-full mt-8 bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">About Me</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Passionate UI/UX designer with over 5 years of experience in creating user-centered digital products. I love turning complex problems into simple, beautiful, and intuitive designs.
                        </p>

                        <div className="flex items-center gap-2 mt-4 text-gray-400 text-sm font-medium">
                            <MapPin className="w-4 h-4 text-orange-500" />
                            <span>New York, USA</span>
                        </div>
                    </div>

                    <div className="w-full mt-6">
                        <Button variant="ghost" fullWidth className="text-red-500 hover:bg-red-50 hover:text-red-600" onClick={() => navigate('/')}>
                            <LogOut className="w-5 h-5" />
                            <span className="ml-2">Logout</span>
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
