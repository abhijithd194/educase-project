import type { InputHTMLAttributes } from 'react';
import  { forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, icon, ...props }, ref) => {
    return (
        <div className="w-full space-y-2">
            {label && <label className="text-sm font-medium text-gray-600 ml-1">{label}</label>}
            <div className="relative">
                <input
                    ref={ref}
                    className={cn(
                        "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200",
                        icon ? "pl-11" : "",
                        className
                    )}
                    {...props}
                />
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
