import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (localStorage.getItem(email) !== null) {
            const data = JSON.parse(localStorage.getItem(email) || '{}');
            if (data.password === password) {
                navigate(`/profile/${email}`);
            }
            else {
                alert("Invalid password");
            }
        }
        else {
            alert("Invalid email");
        }
    };

    return (
        <div className="h-full flex flex-col p-6 pt-8 bg-gray-50 overflow-y-auto">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
                    Signin to your <br /> PopX account
                </h1>
                <p className="text-gray-500 text-base">
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit,
                </p>
            </div>

            <form onSubmit={handleLogin} className="flex flex-col gap-6">
                <div className="space-y-4">
                    <fieldset className="relative border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                        <legend className="text-xs text-[#6c25ff] px-1 -ml-1 font-medium">Email Address</legend>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email address"
                            className="w-full bg-transparent outline-none text-sm text-gray-900 font-medium placeholder:text-gray-400 placeholder:font-normal"
                        />
                    </fieldset>

                    <fieldset className="relative border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                        <legend className="text-xs text-[#6c25ff] px-1 -ml-1 font-medium">Password</legend>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full bg-transparent outline-none text-sm text-gray-900 font-medium placeholder:text-gray-400 placeholder:font-normal"
                        />
                    </fieldset>
                </div>

                <div className="mt-1">
                    <button
                        type="submit"
                        className="w-full py-3.5 px-4 bg-[#cbcbcb] hover:bg-[#b0b0b0] text-white font-medium rounded-lg transition-colors cursor-pointer text-center"
                    >
                        Login
                    </button>

                </div>
            </form>
        </div>
    );
};

export default LoginForm;
