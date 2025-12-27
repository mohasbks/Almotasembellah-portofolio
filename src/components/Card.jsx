import React from 'react';
import { cn } from './Button';
import { motion } from 'framer-motion';

const Card = ({ className, children, hover = false, ...props }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -5, boxShadow: '0 10px 30px -10px rgba(255,255,255,0.1)' } : {}}
            className={cn(
                'glass-card p-6 relative overflow-hidden group',
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
