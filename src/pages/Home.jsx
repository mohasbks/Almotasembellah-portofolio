import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Brain, Bot, Rocket, Database, Terminal, Lightbulb, Layers, Zap } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
    const projects = [
        {
            title: 'Rowad Platform',
            category: 'ريادة أعمال',
            desc: 'منصة عربية للمستقلين بعمولة 0%',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'Node.js', 'AI']
        },
        {
            title: 'AI Image Generator',
            category: 'ذكاء اصطناعي',
            desc: 'مولد صور بالذكاء الاصطناعي باستخدام Flask و Hugging Face',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Python', 'Flask', 'Hugging Face']
        },
        {
            title: 'بوت حجز التذاكر',
            category: 'أتمتة',
            desc: 'بوت أتمتة لحجز التذاكر تلقائياً فور توفرها',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Python', 'Selenium', 'Bot']
        },
    ];

    const services = [
        { title: 'تطوير الويب', icon: Code, desc: 'بناء مواقع كاملة من الصفر (HTML, CSS, JS) بدون أطر عمل، أو باستخدام تقنيات حديثة.' },
        { title: 'الذكاء الاصطناعي', icon: Brain, desc: 'تطوير نماذج تعلم الآلة، رؤية حاسوبية (Computer Vision)، وتحليل البيانات.' },
        { title: 'الأتمتة والبوتات', icon: Bot, desc: 'بناء بوتات Telegram/Discord وأدوات Web Scraping باستخدام Selenium و Python.' },
    ];

    return (
        <div className="space-y-32 pb-32">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050505]">
                {/* Calm Starry Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    {/* Static Stars */}
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: Math.random() * 0.5 + 0.1 }}
                            animate={{ opacity: [0.1, 0.5, 0.1] }}
                            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bg-white rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 2 + 1}px`,
                                height: `${Math.random() * 2 + 1}px`,
                            }}
                        />
                    ))}

                    {/* Subtle Aurora Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-secondary/5 via-transparent to-transparent opacity-50" />
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-secondary/80 text-sm font-light tracking-wide"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        مؤسس منصة رواد (Rawad)
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
                    >
                        <span className="text-white font-serif">المعتصم بالله</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary text-4xl md:text-6xl font-sans font-light mt-2 block">
                            Al-Moatasem Bellah
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-lg text-secondary/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        طالب بكلية الذكاء الاصطناعي | Front-End Developer | متخصص AI
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <Link to="/contact">
                            <Button size="lg" className="bg-white text-black hover:bg-secondary transition-colors duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                تواصل معي
                            </Button>
                        </Link>
                        <Link to="/portfolio">
                            <Button variant="outline" size="lg" className="border-white/10 text-secondary hover:bg-white/5 hover:text-white transition-all duration-500">
                                شاهد أعمالي
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* About / Skills Section */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">عن المعتصم</h2>
                        <p className="text-secondary/70 text-lg mb-6 leading-relaxed">
                            شاب طموح وريادي، أدرس في السنة الثالثة بكلية الذكاء الاصطناعي بالجامعة المصرية الروسية.
                            أجمع بين الشغف بالبرمجة (Web & AI) والتفكير الريادي.
                            أسعى لبناء بيئة قوية للمستقلين في العالم العربي من خلال منصتي "رواد".
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-white">
                                <Rocket className="text-accent" size={20} />
                                <span>مؤسس Rawad</span>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <Terminal className="text-accent" size={20} />
                                <span>Python & JS Expert</span>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <Database className="text-accent" size={20} />
                                <span>Data Science</span>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <Bot className="text-accent" size={20} />
                                <span>Automation</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <Card className="p-6 bg-white/5 border-accent/20">
                            <h3 className="text-xl font-bold text-white mb-2">الذكاء الاصطناعي (AI)</h3>
                            <p className="text-secondary/60 text-sm">
                                خبرة في مشاريع Computer Vision (كشف الأمراض، تصنيف الصور)، NLP (تحليل المشاعر)، و Deepfake.
                            </p>
                        </Card>
                        <Card className="p-6 bg-white/5 border-accent/20">
                            <h3 className="text-xl font-bold text-white mb-2">تطوير الويب (Web Dev)</h3>
                            <p className="text-secondary/60 text-sm">
                                بناء واجهات احترافية باستخدام HTML, CSS, JS (Native) و React. تصميم متجاوب وعصري.
                            </p>
                        </Card>
                        <Card className="p-6 bg-white/5 border-accent/20">
                            <h3 className="text-xl font-bold text-white mb-2">الأتمتة (Automation)</h3>
                            <p className="text-secondary/60 text-sm">
                                بناء بوتات تداول، حجز تذاكر، واستخراج بيانات (Scraping) لزيادة الإنتاجية.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="container mx-auto px-4 py-16 bg-white/5 rounded-3xl border border-white/5">
                <div className="text-center max-w-3xl mx-auto">
                    <Lightbulb className="w-12 h-12 text-accent mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-6">فلسفتي في العمل</h2>
                    <p className="text-xl text-secondary/80 leading-relaxed italic">
                        "لا أكتب الكود فقط، بل أبني حلولاً. أؤمن بأن التكنولوجيا يجب أن تخدم الإنسان وتسهل حياته.
                        في كل مشروع، أضع نفسي مكان المستخدم لأقدم تجربة سلسة، فعالة، وجميلة."
                    </p>
                </div>
            </section>

            {/* Rawad Story Section */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-6"
                        >
                            <Rocket size={16} />
                            قصة رواد
                        </motion.div>
                        <h2 className="text-4xl font-bold text-white mb-4">كيف بدأت "رواد"؟</h2>
                        <p className="text-secondary/60">قصة حقيقية من المعاناة إلى الحلم</p>
                    </div>

                    {/* Story Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-accent/50 to-green-500/50 hidden md:block" />

                        <div className="space-y-12">
                            {/* Chapter 1: The Frustration */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative md:pr-16"
                            >
                                <div className="absolute right-0 top-0 w-12 h-12 rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center hidden md:flex">
                                    <span className="text-xl">😤</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                                    <span className="text-red-400 text-sm font-medium mb-2 block">الفصل الأول</span>
                                    <h3 className="text-2xl font-bold text-white mb-4">المعاناة المشتركة</h3>
                                    <p className="text-secondary/70 leading-relaxed text-lg">
                                        كنا أنا وصديقي <span className="text-white font-medium">يوسف</span> نشتكي دائماً من المنصات العالمية.
                                        بحكم عملنا كمستقلين، كنا نرى كيف تظلمنا هذه المنصات — عمولات مرتفعة،
                                        منافسة غير عادلة، وصعوبة في إثبات أنفسنا رغم جودة عملنا.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Chapter 2: The Spark */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="relative md:pr-16"
                            >
                                <div className="absolute right-0 top-0 w-12 h-12 rounded-full bg-accent/20 border-2 border-accent/50 flex items-center justify-center hidden md:flex">
                                    <span className="text-xl">💡</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors">
                                    <span className="text-accent text-sm font-medium mb-2 block">الفصل الثاني</span>
                                    <h3 className="text-2xl font-bold text-white mb-4">الشرارة</h3>
                                    <p className="text-secondary/70 leading-relaxed text-lg">
                                        في يوم ما ونحن نمشي، قلت له ساخراً: <span className="text-white italic">"هيا لننافسهم!"</span>
                                        ضحكنا كثيراً... لكن بعدها بدأنا نفكر جدياً.
                                        ماذا لو حللنا المشكلة الأهم التي يواجهها كل مستقل؟ <span className="text-accent font-bold">العمولة.</span>
                                    </p>
                                </div>
                            </motion.div>

                            {/* Chapter 3: The Solution */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative md:pr-16"
                            >
                                <div className="absolute right-0 top-0 w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-500/50 flex items-center justify-center hidden md:flex">
                                    <span className="text-xl">⚡</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                                    <span className="text-blue-400 text-sm font-medium mb-2 block">الفصل الثالث</span>
                                    <h3 className="text-2xl font-bold text-white mb-4">الحل الجذري</h3>
                                    <p className="text-secondary/70 leading-relaxed text-lg mb-4">
                                        قررنا أن تكون العمولة <span className="text-accent font-bold text-2xl">0%</span> — نعم، صفر في المئة!
                                        مقابل اشتراك بسيط جداً كل شهر فقط.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">عمولة 0%</span>
                                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">ذكاء اصطناعي</span>
                                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">طرق دفع متعددة</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Chapter 4: The Present */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="relative md:pr-16"
                            >
                                <div className="absolute right-0 top-0 w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center hidden md:flex">
                                    <span className="text-xl">🚀</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-green-500/10 border border-accent/20">
                                    <span className="text-green-400 text-sm font-medium mb-2 block">الآن</span>
                                    <h3 className="text-2xl font-bold text-white mb-4">الحلم يتحقق</h3>
                                    <p className="text-secondary/70 leading-relaxed text-lg">
                                        مازلنا نعمل على الفكرة مع <span className="text-white font-medium">فريق رائع للغاية</span>.
                                        كل يوم نقترب أكثر من حلمنا — منصة عربية عادلة يجد فيها كل مستقل فرصته الحقيقية.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Let's Collaborate Section */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">شاركني فكرتك</h2>
                    <p className="text-secondary/60 mb-12">ما نوع المشروع الذي تفكر فيه؟</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Code, label: 'موقع ويب', msg: 'سأبني لك موقعاً عصرياً ومتجاوباً!' },
                            { icon: Brain, label: 'مشروع AI', msg: 'الذكاء الاصطناعي هو شغفي!' },
                            { icon: Bot, label: 'أتمتة', msg: 'دعني أوفر وقتك بالأتمتة!' },
                            { icon: Rocket, label: 'فكرة أخرى', msg: 'أحب التحديات الجديدة!' },
                        ].map((item, idx) => (
                            <Link to="/contact" key={idx}>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all cursor-pointer"
                                >
                                    <item.icon className="w-10 h-10 text-secondary/60 group-hover:text-accent mx-auto mb-4 transition-colors" />
                                    <p className="text-white font-medium">{item.label}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    <p className="text-secondary/40 text-sm mt-8">اضغط على أي خيار للتواصل مباشرة</p>
                </div>
            </section>

            {/* Process Section */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">كيف أعمل؟</h2>
                    <p className="text-secondary/60">منهجية منظمة لضمان أفضل النتائج</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Brain, title: 'التفكير والتخطيط', desc: 'فهم المتطلبات بدقة، تحليل المشكلة، ووضع خطة عمل مفصلة.' },
                        { icon: Layers, title: 'التصميم والتطوير', desc: 'بناء واجهات عصرية وكتابة كود نظيف وقابل للتطوير.' },
                        { icon: Zap, title: 'الاختبار والإطلاق', desc: 'التأكد من خلو المشروع من الأخطاء وضمان الأداء العالي قبل التسليم.' }
                    ].map((step, idx) => (
                        <div key={idx} className="relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors overflow-hidden">
                            <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">{idx + 1}</div>
                            <step.icon className="w-10 h-10 text-accent mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-secondary/60">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">مجالات الخبرة</h2>
                    <p className="text-secondary/60">حلول تقنية متكاملة</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} hover className="text-center p-8">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-secondary/60">{service.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">أعمال مختارة</h2>
                        <p className="text-secondary/60 max-w-xl mx-auto">مشاريع حقيقية بنيتها بشغف</p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card hover className="group flex flex-col h-full">
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

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <Link to="/portfolio">
                        <Button variant="outline" className="gap-2">
                            عرض جميع الأعمال <ArrowLeft size={16} />
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
