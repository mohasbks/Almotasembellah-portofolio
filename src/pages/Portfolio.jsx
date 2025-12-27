import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: 'Rowad Platform',
            category: 'Web',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            desc: 'منصة للعمل الحر تهدف لتمكين المستقلين العرب. مبنية لتقديم بيئة عمل عادلة بدون نسب.',
            tags: ['React', 'Node.js', 'Business'],
            link: 'https://rowad.rf.gd',
            github: ''
        },
        {
            title: 'AI Image Generator',
            category: 'AI',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            desc: 'مولد صور بالذكاء الاصطناعي باستخدام Flask و Hugging Face API.',
            tags: ['Python', 'Flask', 'Hugging Face'],
            link: '',
            github: 'https://github.com/mohasbks/ai-image-generator'
        },
        {
            title: 'Dog/Cat Sound Classification',
            category: 'AI',
            image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            desc: 'نموذج Deep Learning لتصنيف أصوات الكلاب والقطط باستخدام معالجة الصوت.',
            tags: ['Python', 'Deep Learning', 'Audio'],
            link: '',
            github: 'https://github.com/mohasbks/dog-cat-sound-classification'
        },
        {
            title: 'Library Management System',
            category: 'Software',
            image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            desc: 'نظام إدارة مكتبة بواجهة رسومية حديثة لإدارة الكتب والاستعارة والأعضاء.',
            tags: ['Java', 'GUI', 'Database'],
            link: '',
            github: 'https://github.com/mohasbks/library-management-system'
        },
        {
            title: 'Twitter Bot',
            category: 'Automation',
            image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            desc: 'بوت أتمتة تويتر للنشر التلقائي والتفاعل مع محاكاة سلوك بشري طبيعي.',
            tags: ['Python', 'Automation', 'Bot'],
            link: '',
            github: 'https://github.com/mohasbks/TwitterBot-Public'
        },
        {
            title: 'MonkeyType Clone',
            category: 'Web',
            image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            desc: 'تطبيق اختبار سرعة الكتابة مع إحصائيات فورية وثيمات متعددة ووضع تمرين على الكود.',
            tags: ['JavaScript', 'Vanilla JS', 'CSS'],
            link: '',
            github: 'https://github.com/mohasbks/monkey-type-clone'
        },
        {
            title: 'بوت حجز التذاكر',
            category: 'Automation',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            desc: 'بوت أتمتة لحجز التذاكر تلقائياً فور توفرها وإرسال إشعارات.',
            tags: ['Python', 'Selenium', 'Bot'],
            link: '',
            github: ''
        },
        {
            title: 'Doctor Booking System',
            category: 'Web',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            desc: 'نظام حجز مواعيد الأطباء بواجهة حديثة.',
            tags: ['Vue', 'JavaScript', 'CSS'],
            link: '',
            github: 'https://github.com/mohasbks/doctor-booking-system'
        },
        {
            title: 'YokiStore',
            category: 'Web',
            image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            desc: 'متجر إلكتروني بواجهة عصرية.',
            tags: ['Vue', 'E-commerce', 'CSS'],
            link: '',
            github: 'https://github.com/mohasbks/YokiStore'
        },
        {
            title: 'Bybit RSI Alert Bot',
            category: 'Automation',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            desc: 'بوت تنبيهات RSI لمنصة Bybit للتداول.',
            tags: ['Python', 'Trading', 'API'],
            link: '',
            github: 'https://github.com/mohasbks/bybit-rsi-alert-bot'
        },
        {
            title: 'Classic Pong Game',
            category: 'Web',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            desc: 'لعبة Pong الكلاسيكية بالجافاسكريبت.',
            tags: ['JavaScript', 'Game', 'Canvas'],
            link: '',
            github: 'https://github.com/mohasbks/Classic-pong-game'
        }
    ];

    const categories = ['All', 'Web', 'AI', 'Automation', 'Software'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-white mb-6"
                    >
                        أعمالي ومشاريعي
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-secondary/60 max-w-2xl mx-auto"
                    >
                        مجموعة مختارة من المشاريع التي قمت بتنفيذها في مجالات تطوير الويب، الذكاء الاصطناعي، والأتمتة.
                    </motion.p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                ? 'bg-white text-black shadow-lg scale-105'
                                : 'bg-white/5 text-secondary/60 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Card key={index} hover className="group flex flex-col h-full">
                            <div className="aspect-video overflow-hidden rounded-t-xl relative">
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 z-20 flex gap-2">
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs text-white border border-white/10">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-secondary/60 mb-6 flex-1 leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
