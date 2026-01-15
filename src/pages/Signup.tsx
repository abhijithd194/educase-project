import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
const SignupSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    phone: z.string().min(10, 'Phone number must be at least 10 characters long'),
    company: z.string().optional(),
});
type SignupType = z.infer<typeof SignupSchema>;
const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [isAgency, setIsAgency] = useState<string>('Yes');
    const { register, handleSubmit, formState: { errors } } = useForm<SignupType>({
        resolver: zodResolver(SignupSchema),
    });
    const handleSignup = handleSubmit((data) => {
        console.log(data);
        if (localStorage.getItem(data.email) === null) {
            localStorage.setItem(data.email, JSON.stringify(data));
            console.log(data.email);
            navigate(`/profile/${data.email}`)
        }
        else {
            alert("Email already exists");
        }
    });

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
                        <legend className="text-xs text-[#6c25ff] px-1 -ml-1 font-medium">
                            Full Name<span className="text-red-500">*</span>
                        </legend>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="w-full bg-transparent outline-none text-sm text-gray-900 font-medium"
                        />
                    </fieldset>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    <fieldset className="relative border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-xs text-[#6c25ff] px-1 -ml-1 font-medium">
                            Phone number<span className="text-red-500">*</span>
                        </legend>
                        <input
                            type="text"
                            {...register("phone", { required: true })}
                            className="w-full bg-transparent outline-none text-sm text-gray-900 font-medium"
                        />
                    </fieldset>

                    <fieldset className="relative border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-xs text-[#6c25ff] px-1 -ml-1 font-medium">
                            Email address<span className="text-red-500">*</span>
                        </legend>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="w-full bg-transparent outline-none text-sm text-gray-900 font-medium"
                        />
                    </fieldset>

                    <fieldset className="relative border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-xs text-[#6c25ff] px-1 -ml-1 font-medium">
                            Password<span className="text-red-500">*</span>
                        </legend>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            className="w-full bg-transparent outline-none text-sm text-gray-900 font-medium"
                        />
                    </fieldset>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    <fieldset className="relative border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-xs text-[#6c25ff] px-1 -ml-1 font-medium">
                            Company name
                        </legend>
                        <input
                            type="text"
                            {...register("company")}
                            className="w-full bg-transparent outline-none text-sm text-gray-900 font-medium"
                        />
                    </fieldset>
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                </div>

                <div className="mt-2">
                    <label className="text-sm font-semibold text-gray-900 block mb-2">
                        Are you an Agency?<span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-6">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="agency"
                                value="Yes"
                                checked={isAgency === "Yes"}
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
                                checked={isAgency === "No"}
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
}

export default Signup;
