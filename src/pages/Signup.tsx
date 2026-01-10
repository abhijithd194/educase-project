import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Floating Label Input Component for this page
const FloatingLabelInput = ({
    label,
    value,
    onChange,
    type = 'text',
    required = false,
}: {
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    required?: boolean;
}) => {
    return (
        <div className="relative">
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="block px-4 py-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#6c25ff] peer"
                placeholder=" "
                defaultValue="Marry Doe" // Placeholder value from design
            />
            <label
                className="absolute text-sm text-[#6c25ff] duration-300 transform -translate-y-4 scale-90 top-0 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-[#6c25ff] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-90 peer-focus:-translate-y-4 left-2"
            >
                {label}
                {required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
        </div>
    );
};

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [isAgency, setIsAgency] = useState<string>('Yes');

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/profile');
    };

    return (
        <div className="h-full flex flex-col p-6 pt-8 bg-gray-50 overflow-y-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                    Create your <br /> PopX account
                </h1>
            </div>

            <form onSubmit={handleSignup} className="flex-1 flex flex-col gap-5">
                <div className="space-y-5">
                    <fieldset className="relative border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-xs text-[#6c25ff] px-1 -ml-1 font-medium">Full Name<span className="text-red-500">*</span></legend>
                        <input type="text" className="w-full bg-transparent outline-none text-sm text-gray-900 font-medium" />
                    </fieldset>

                    <fieldset className="relative border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-xs text-[#6c25ff] px-1 -ml-1 font-medium">Phone number<span className="text-red-500">*</span></legend>
                        <input type="text" className="w-full bg-transparent outline-none text-sm text-gray-900 font-medium" />
                    </fieldset>

                    <fieldset className="relative border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-xs text-[#6c25ff] px-1 -ml-1 font-medium">Email address<span className="text-red-500">*</span></legend>
                        <input type="email" className="w-full bg-transparent outline-none text-sm text-gray-900 font-medium" />
                    </fieldset>

                    <fieldset className="relative border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-xs text-[#6c25ff] px-1 -ml-1 font-medium">Password<span className="text-red-500">*</span></legend>
                        <input type="password" className="w-full bg-transparent outline-none text-sm text-gray-900 font-medium" />
                    </fieldset>

                    <fieldset className="relative border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-xs text-[#6c25ff] px-1 -ml-1 font-medium">Company name</legend>
                        <input type="text" className="w-full bg-transparent outline-none text-sm text-gray-900 font-medium" />
                    </fieldset>


                </div>

                <div className="mt-2">
                    <label className="text-sm font-semibold text-gray-900 block mb-2">Are you an Agency?<span className="text-red-500">*</span></label>
                    <div className="flex gap-6">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="agency"
                                value="Yes"
                                checked={isAgency === 'Yes'}
                                onChange={(e) => setIsAgency(e.target.value)}
                                className="w-5 h-5 text-[#6c25ff] border-gray-300 focus:ring-[#6c25ff]"
                            />
                            <span className="ml-2 text-sm text-gray-900">Yes</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="agency"
                                value="No"
                                checked={isAgency === 'No'}
                                onChange={(e) => setIsAgency(e.target.value)}
                                className="w-5 h-5 text-[#6c25ff] border-gray-300 focus:ring-[#6c25ff]"
                            />
                            <span className="ml-2 text-sm text-gray-900">No</span>
                        </label>
                    </div>
                </div>


                <div className="mt-auto pt-8 pb-4">
                    <button
                        type="submit"
                        className="w-full py-3.5 px-4 bg-[#6c25ff] hover:bg-[#5b1ee0] text-white font-medium rounded-lg transition-colors cursor-pointer text-center"
                    >
                        Create Account
                    </button>

                </div>
            </form>
        </div>
    );
};

export default Signup;
