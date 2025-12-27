import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Mail, Briefcase } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'الرئيسية', path: '/', icon: Home },
        { name: 'أعمالي', path: '/portfolio', icon: Briefcase },
        { name: 'تواصل معي', path: '/contact', icon: Mail },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-gradient">
                        هويتي
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 space-x-reverse">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-300 hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-secondary/70'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact">
                            <Button variant="primary" size="sm">وظفني</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-secondary hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <link.icon size={18} />
                                        {link.name}
                                    </div>
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link to="/contact" onClick={() => setIsOpen(false)}>
                                    <Button variant="primary" className="w-full">وظفني</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
