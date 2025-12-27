import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Button = ({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}) => {
    const variants = {
        primary: 'bg-secondary text-primary hover:bg-white shadow-[0_0_15px_rgba(192,192,192,0.3)]',
        outline: 'border border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary',
        ghost: 'text-secondary/70 hover:text-white hover:bg-white/5',
        metallic: 'bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-black font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(
                'rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
