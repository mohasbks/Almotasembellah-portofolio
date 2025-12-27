import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/50 blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl" />
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-white mb-6"
                    >
                        تواصل معي
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-secondary/60 max-w-2xl mx-auto"
                    >
                        لديك فكرة مشروع؟ أو تبحث عن مطور شغوف؟
                        <br />
                        أنا هنا لتحويل أفكارك إلى واقع.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <Card className="p-8 bg-white/5 border-accent/10 backdrop-blur-md">
                            <h3 className="text-2xl font-bold text-white mb-6">بيانات التواصل</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-secondary/80 hover:text-white transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                        <Mail className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary/50">البريد الإلكتروني</p>
                                        <p className="text-lg font-medium">moatasem@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-secondary/80 hover:text-white transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                        <Phone className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary/50">رقم الهاتف</p>
                                        <p className="text-lg font-medium">+20 155 463 7079</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-secondary/80 hover:text-white transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                        <MapPin className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary/50">الموقع</p>
                                        <p className="text-lg font-medium">مدينة بدر، القاهرة، مصر</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/10">
                                <h4 className="text-white font-medium mb-4">تابعني على</h4>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/almotasembellahawwad/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary hover:bg-accent hover:text-black transition-all">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="https://github.com/mohasbks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary hover:bg-accent hover:text-black transition-all">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://www.instagram.com/mr.__al_motasem/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary hover:bg-accent hover:text-black transition-all">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="https://wa.me/+201554637079" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary hover:bg-accent hover:text-black transition-all">
                                        <MessageCircle size={20} />
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Card className="p-8 bg-white/5 border-accent/10 backdrop-blur-md h-full">
                            <h3 className="text-2xl font-bold text-white mb-6">أرسل رسالة</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-secondary/70">الاسم</label>
                                        <input
                                            type="text"
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                            placeholder="اسمك الكريم"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-secondary/70">البريد الإلكتروني</label>
                                        <input
                                            type="email"
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                            placeholder="example@mail.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-secondary/70">الموضوع</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                        placeholder="عنوان الرسالة"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-secondary/70">الرسالة</label>
                                    <textarea
                                        rows="5"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                                        placeholder="اكتب تفاصيل مشروعك هنا..."
                                    ></textarea>
                                </div>

                                <Button className="w-full gap-2 py-4 text-lg">
                                    إرسال الرسالة <Send size={18} />
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
