import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, HeartHandshake, ShieldCheck, Sparkles, Droplet, Droplets, Wrench, Leaf, BugOff, Zap, Users, FileCheck } from 'lucide-react';

const servicesList = [
    {
        title: "Security Services",
        desc: "Highly trained personnel providing round-the-clock guarding, surveillance, and risk management.",
        images: ["https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80"],
        Icon: ShieldCheck
    },
    {
        title: "House Keeping",
        desc: "Comprehensive cleaning and facility upkeep to maintain a pristine, hygienic, and lovable environment for everyone.",
        images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"],
        Icon: Sparkles
    },
    {
        title: "STP Management",
        desc: "Sewage Treatment Plant operations and maintenance ensuring eco-friendly waste management and compliance.",
        images: ["https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=1200&q=80"],
        Icon: Droplet
    },
    {
        title: "WTP Operations",
        desc: "Water Treatment Plant management for clean, safe, and sustainable water supply across your facility.",
        images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"],
        Icon: Droplets
    },
    {
        title: "Plumbing Services",
        desc: "Expert plumbing maintenance and repair services to keep your water systems running smoothly without a hitch.",
        images: ["https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80"],
        Icon: Wrench
    },
    {
        title: "Gardening & Landscaping",
        desc: "Beautiful landscape design and regular gardening maintenance to create vibrant, relaxing outdoor spaces.",
        images: ["https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80"],
        Icon: Leaf
    },
    {
        title: "Pest Control",
        desc: "Safe and effective pest management solutions to protect your property and ensure a healthy environment.",
        images: ["https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"],
        Icon: BugOff
    },
    {
        title: "Electrical Maintenance",
        desc: "Reliable electrical servicing and troubleshooting by certified professionals for uninterrupted operations.",
        images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"],
        Icon: Zap
    },
    {
        title: "Talent Acquisition",
        desc: "Strategic recruitment services connecting you with top-tier professionals. We handle end-to-end hiring to build your dream team.",
        images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"],
        Icon: Users
    },
    {
        title: "Payroll & Compliance",
        desc: "Accurate payroll processing and seamless navigation of complex corporate laws to keep you 100% compliant.",
        images: ["https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"],
        Icon: FileCheck
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
        <section id="services" className="relative bg-neutral-950 overflow-hidden text-white py-24 border-t border-neutral-900">
            {/* Structural Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMGgtMXYzOWhDMCAzOSAwIDM5LjUgMCAzOS41eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] pointer-events-none"></div>

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center px-4 py-1.5 bg-yellow-500 text-black shadow-sm mb-6 border border-yellow-600"
                >
                    <h2 className="text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                        <HeartHandshake size={16} /> Core Services
                    </h2>
                </motion.div>
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter uppercase"
                >
                    Comprehensive Protection
                </motion.h3>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
                >
                    Deploying elite security protocols and rigorous facility management strategies to safeguard your assets.
                </motion.p>
            </div>

            {/* Services List - Structural Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col gap-16 md:gap-24">
                    {servicesList.map((service, idx) => {
                        return (
                            <motion.div 
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
                            >
                                {/* Text Info Section */}
                                <motion.div 
                                    variants={{
                                        hidden: { opacity: 0, x: idx % 2 === 0 ? -100 : 100 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                    }}
                                    className="w-full lg:w-1/2 flex flex-col items-start text-left"
                                >
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-500 flex items-center justify-center mb-6 text-black shadow-md">
                                        <service.Icon size={28} strokeWidth={2} />
                                    </div>
                                    
                                    <h4 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight uppercase">
                                        {service.title}
                                    </h4>
                                    
                                    <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
                                        {service.desc}
                                    </p>
                                    
                                    <a href="#contact" className="inline-flex items-center gap-2 font-bold text-black hover:bg-yellow-400 bg-yellow-500 transition-colors group/link px-8 py-4 shadow-sm rounded-full">
                                        SECURE NOW <ChevronRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </motion.div>

                                {/* Carousel Section */}
                                <motion.div 
                                    variants={{
                                        hidden: { opacity: 0, x: idx % 2 === 0 ? 100 : -100, scale: 0.9 },
                                        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
                                    }}
                                    className="w-full lg:w-1/2"
                                >
                                    <div className="aspect-[4/3] relative group">
                                        <MiniCarousel images={service.images} />
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
