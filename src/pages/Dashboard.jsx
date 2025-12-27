import React from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, TrendingUp, DollarSign, Activity, Clock, CheckCircle } from 'lucide-react';
import Card from '../components/Card';

const Dashboard = () => {
    const stats = [
        { title: 'إجمالي المشاهدات', value: '12.5K', change: '+15%', icon: Eye, color: 'text-blue-400' },
        { title: 'العملاء النشطين', value: '45', change: '+5%', icon: Users, color: 'text-green-400' },
        { title: 'المشاريع المكتملة', value: '12', change: '+2', icon: CheckCircle, color: 'text-purple-400' },
        { title: 'الأرباح الشهرية', value: '$3,240', change: '+12%', icon: DollarSign, color: 'text-accent' },
    ];

    const activities = [
        { user: 'أحمد محمد', action: 'طلب مشروع جديد', time: 'منذ 2 ساعة', type: 'project' },
        { user: 'سارة علي', action: 'أرسلت رسالة استفسار', time: 'منذ 5 ساعات', type: 'message' },
        { user: 'شركة التقنية', action: 'تم دفع الفاتورة #1023', time: 'منذ يوم واحد', type: 'payment' },
        { user: 'خالد عمر', action: 'قيم المشروع 5 نجوم', time: 'منذ يومين', type: 'review' },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">لوحة التحكم</h1>
                    <p className="text-secondary/60">مرحباً بك، المعتصم بالله 👋</p>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-secondary">
                    {new Date().toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="p-6 hover:border-accent/30 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-lg bg-white/5 ${stat.color}`}>
                                    <stat.icon size={24} />
                                </div>
                                <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-secondary/60 text-sm mb-1">{stat.title}</h3>
                            <p className="text-2xl font-bold text-white">{stat.value}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Chart Area (Placeholder for now) */}
                <div className="lg:col-span-2">
                    <Card className="p-6 h-full min-h-[400px]">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <TrendingUp size={20} className="text-accent" />
                                تحليل الأداء
                            </h3>
                            <select className="bg-black/20 border border-white/10 rounded-lg px-3 py-1 text-sm text-secondary outline-none">
                                <option>آخر 7 أيام</option>
                                <option>آخر 30 يوم</option>
                                <option>هذا العام</option>
                            </select>
                        </div>

                        {/* Mock Chart Visual */}
                        <div className="w-full h-64 flex items-end justify-between gap-2 px-4">
                            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    className="w-full bg-gradient-to-t from-accent/20 to-accent/60 rounded-t-lg relative group"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {h}%
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-secondary/50 px-2">
                            <span>السبت</span>
                            <span>الأحد</span>
                            <span>الاثنين</span>
                            <span>الثلاثاء</span>
                            <span>الأربعاء</span>
                            <span>الخميس</span>
                            <span>الجمعة</span>
                        </div>
                    </Card>
                </div>

                {/* Recent Activity */}
                <div>
                    <Card className="p-6 h-full">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Activity size={20} className="text-accent" />
                            النشاط الأخير
                        </h3>
                        <div className="space-y-6">
                            {activities.map((activity, index) => (
                                <div key={index} className="flex items-start gap-4 relative">
                                    {index !== activities.length - 1 && (
                                        <div className="absolute top-8 right-[19px] w-[2px] h-full bg-white/5" />
                                    )}
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <Clock size={16} className="text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">{activity.user}</p>
                                        <p className="text-secondary/60 text-xs mb-1">{activity.action}</p>
                                        <span className="text-[10px] text-secondary/40">{activity.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
