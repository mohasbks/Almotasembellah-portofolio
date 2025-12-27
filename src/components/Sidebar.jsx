import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Users, Settings, LogOut } from 'lucide-react';
import { cn } from './Button';

const Sidebar = () => {
    const location = useLocation();

    const links = [
        { name: 'نظرة عامة', path: '/dashboard', icon: LayoutDashboard },
        { name: 'الرسائل', path: '/dashboard/messages', icon: MessageSquare },
        { name: 'العملاء', path: '/dashboard/clients', icon: Users },
        { name: 'الإعدادات', path: '/dashboard/settings', icon: Settings },
    ];

    return (
        <aside className="w-64 bg-primary border-l border-white/10 min-h-screen fixed right-0 top-0 bottom-0 z-40 hidden md:flex flex-col">
            <div className="h-20 flex items-center px-8 border-b border-white/10">
                <Link to="/" className="text-xl font-bold text-gradient">
                    هويتي
                </Link>
            </div>

            <nav className="flex-1 py-8 px-4 space-y-2">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={cn(
                            'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group',
                            location.pathname === link.path
                                ? 'bg-white/10 text-white shadow-lg'
                                : 'text-secondary/60 hover:text-white hover:bg-white/5'
                        )}
                    >
                        <link.icon size={20} className={cn(
                            "transition-colors",
                            location.pathname === link.path ? "text-accent" : "group-hover:text-accent"
                        )} />
                        <span className="font-medium">{link.name}</span>
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-white/10">
                <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors">
                    <LogOut size={20} />
                    <span className="font-medium">تسجيل الخروج</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
