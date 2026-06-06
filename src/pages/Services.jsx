import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, HeartHandshake } from 'lucide-react';

const servicesList = [
    {
        title: "Security Services",
        desc: "State-of-the-art security solutions including manned guarding, electronic surveillance, and risk assessment to ensure absolute safety for your premises.",
        images: [
            "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        title: "House Keeping",
        desc: "Comprehensive cleaning and facility upkeep to maintain a pristine, hygienic, and lovable environment for everyone.",
        images: [
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1628177142898-93e46e462487?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        title: "STP Management",
        desc: "Sewage Treatment Plant operations and maintenance ensuring eco-friendly waste management and compliance.",
        images: [
            "https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        title: "WTP Operations",
        desc: "Water Treatment Plant management for clean, safe, and sustainable water supply across your facility.",
        images: [
            "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        title: "Plumbing Services",
        desc: "Expert plumbing maintenance and repair services to keep your water systems running smoothly without a hitch.",
        images: [
            "https://images.unsplash.com/photo-1607472586893-edb57cb5b367?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        title: "Gardening & Landscaping",
        desc: "Beautiful landscape design and regular gardening maintenance to create vibrant, relaxing outdoor spaces.",
        images: [
            "https://images.unsplash.com/photo-1416879598553-3375619736e4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        title: "Pest Control",
        desc: "Safe and effective pest management solutions to protect your property and ensure a healthy environment.",
        images: [
            "https://images.unsplash.com/photo-1632823471565-1ec2a7139192?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        title: "Electrical Maintenance",
        desc: "Reliable electrical servicing and troubleshooting by certified professionals for uninterrupted operations.",
        images: [
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1558227091-a1288b8563eb?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        title: "Talent Acquisition",
        desc: "Strategic recruitment services connecting you with top-tier professionals. We handle end-to-end hiring to build your dream team.",
        images: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        title: "Payroll & Compliance",
        desc: "Accurate payroll processing and seamless navigation of complex corporate laws to keep you 100% compliant.",
        images: [
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&w=1200&q=80"
        ]
    }
];

const MiniCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Auto-play every 5 seconds
        return () => clearInterval(timer);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden group shadow-2xl shadow-black/40 ring-1 ring-white/10">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
            
            {/* Controls */}
            {images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button onClick={prevSlide} className="p-4 rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-black/50 ring-1 ring-white/20 transition-all transform hover:scale-110">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="p-4 rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-black/50 ring-1 ring-white/20 transition-all transform hover:scale-110">
                        <ChevronRight size={24} />
                    </button>
                </div>
            )}
            
            {/* Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
                    {images.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`h-2 rounded-full transition-all duration-500 ${currentIndex === idx ? 'w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'w-2 bg-white/40 hover:bg-white/70 cursor-pointer'}`}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const Services = () => {
    return (
        <section id="services" className="relative bg-slate-950 overflow-hidden text-slate-50">
            {/* Glowing Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-sky-600/20 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute top-[40%] right-[10%] w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "2s" }}></div>
                <div className="absolute bottom-[20%] left-[30%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[150px] animate-blob" style={{ animationDelay: "4s" }}></div>
            </div>

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMGgtMXYzOWhDMCAzOSAwIDM5LjUgMCAzOS41eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none"></div>

            {/* Header Section */}
            <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-white/5 backdrop-blur-xl rounded-full mb-8 border border-white/10 shadow-[0_0_30px_rgba(14,165,233,0.15)]"
                >
                    <h2 className="text-sm font-extrabold tracking-widest text-sky-400 uppercase flex items-center gap-2">
                        <HeartHandshake size={18} className="text-sky-400" /> Our Services
                    </h2>
                </motion.div>
                <motion.h3 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-slate-400">
                        Everything you
                    </span>
                    <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 leading-tight">
                        need.
                    </span>
                </motion.h3>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-slate-300 text-xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light"
                >
                    Explore our comprehensive suite of services, designed with <span className="text-white font-medium">excellence</span> and your <span className="text-white font-medium">convenience</span> in mind.
                </motion.p>
            </div>

            {/* Services List */}
            <div className="w-full relative z-10 pb-32">
                {servicesList.map((service, idx) => {
                    return (
                        <div 
                            key={idx}
                            className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5"
                        >
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="max-w-7xl w-full flex flex-col gap-16 items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                            >
                                {/* Subtle Hover Glow in Card */}
                                <div className="absolute inset-0 bg-gradient-to-b from-sky-500/0 via-transparent to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                {/* Text Info */}
                                <div className="w-full max-w-4xl flex flex-col items-center text-center relative z-10">
                                    <motion.div 
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                        className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(14,165,233,0.4)] border border-sky-400/30"
                                    >
                                        <span className="text-white font-extrabold text-3xl">{(idx + 1).toString().padStart(2, '0')}</span>
                                    </motion.div>
                                    
                                    <h4 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
                                        {service.title}
                                    </h4>
                                    
                                    <p className="text-slate-300 text-xl md:text-3xl leading-relaxed font-light mb-12 max-w-3xl">
                                        {service.desc}
                                    </p>
                                    
                                    <a href="#contact" className="px-10 py-5 bg-white text-slate-950 rounded-full font-bold text-xl hover:bg-sky-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center gap-3 group/btn transform hover:-translate-y-1">
                                        Learn more <ChevronRight size={24} className="group-hover/btn:translate-x-1.5 transition-transform" />
                                    </a>
                                </div>

                                {/* Carousel */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="w-full aspect-video max-h-[60vh] rounded-[2rem] relative z-10 bg-slate-900 p-2 border border-white/5 shadow-2xl"
                                >
                                    <MiniCarousel images={service.images} />
                                </motion.div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
