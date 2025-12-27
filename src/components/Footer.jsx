import React from 'react';
import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/mohasbks' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/almotasembellahawwad/' },
        { icon: Instagram, href: 'https://www.instagram.com/mr.__al_motasem/' },
        { icon: MessageCircle, href: 'https://wa.me/+201554637079' },
    ];

    return (
        <footer className="bg-primary border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-right">
                        <h3 className="text-xl font-bold text-white mb-2">هويتي</h3>
                        <p className="text-secondary/60 text-sm">
                            © {new Date().getFullYear()} جميع الحقوق محفوظة.
                        </p>
                    </div>

                    <div className="flex space-x-6 space-x-reverse">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary/60 hover:text-white transition-colors duration-300 transform hover:scale-110"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

