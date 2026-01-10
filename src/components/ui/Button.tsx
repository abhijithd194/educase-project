import type { ButtonHTMLAttributes } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    fullWidth = false,
    children,
    ...props
}) => {
    return (
        <button
            className={cn(
                "py-4 px-6 rounded-xl font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2",
                {
                    'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30': variant === 'primary',
                    'bg-gray-100 text-gray-900 hover:bg-gray-200': variant === 'secondary',
                    'bg-transparent text-gray-600 hover:bg-gray-50': variant === 'ghost',
                    'border-2 border-gray-200 text-gray-700 hover:border-gray-300': variant === 'outline',
                    'w-full': fullWidth,
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
