import React from 'react';
import { Camera } from 'lucide-react';
import { useParams } from 'react-router-dom';
const Profile: React.FC= () => {
    const {id}= useParams<{id: string}>()
    console.log(id)
    const user = JSON.parse(localStorage.getItem(id||"") || '{}')
    return (
        <div className="h-full bg-[#f7f8f9] flex flex-col">
            {/* Header */}
            <div className="bg-white px-6 py-5 shadow-sm border-b border-gray-100">
                <h1 className="text-lg font-bold text-gray-900">Account Settings</h1>
            </div>

            {/* Profile Section */}
            <div className="p-6 flex flex-col gap-6">

                {/* User Info Row */}
                <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                            alt="Profile"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-[#6c25ff] p-1 rounded-full text-white">
                            <Camera className="w-3 h-3" />
                        </div>
                    </div>
                    <div className="pt-2">
                        <h2 className="text-base font-bold text-gray-900">{user.name}</h2>
                        <p className="text-sm text-gray-500 font-medium">{user.email}</p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed border-b border-dashed border-gray-300 pb-8">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>

                {/* Dotted Border Bottom Container for visual match */}
                <div className="border-t border-dashed border-gray-300 mt-auto"></div>

            </div>

            {/* Using flex-1 to push content down if needed or just empty space background */}
            <div className="flex-1 bg-[#f7f8f9] border-t border-dashed border-gray-300 mx-6">
                {/* This creates the bottom dashed line effect from the image */}
            </div>

        </div>
    );
};

export default Profile;
