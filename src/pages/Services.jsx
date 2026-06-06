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
        }, 4000); // Auto-play every 4 seconds
        return () => clearInterval(timer);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-full rounded-3xl overflow-hidden group">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
            
            {/* Controls */}
            {images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={prevSlide} className="p-2 rounded-full bg-white/80 text-sky-600 hover:bg-white shadow-md transition-all">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextSlide} className="p-2 rounded-full bg-white/80 text-sky-600 hover:bg-white shadow-md transition-all">
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
            
            {/* Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {images.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-sky-500' : 'w-2 bg-white/70'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-24 relative bg-brand-bgAlt min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl mb-4 border border-sky-100 shadow-sm">
                    <h2 className="text-sm font-extrabold tracking-widest text-sky-500 uppercase flex items-center gap-2">
                        <HeartHandshake size={18} /> Our Services
                    </h2>
                </div>
                <h3 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-6">Everything you need.</h3>
                <p className="text-brand-textAlt text-xl max-w-3xl mx-auto">
                    Explore our comprehensive suite of services, designed with excellence and your convenience in mind.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                {servicesList.map((service, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                        >
                            {/* Carousel Column */}
                            <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-[2.5rem] shadow-xl shadow-sky-900/5 border border-white relative p-2 bg-white">
                                <MiniCarousel images={service.images} />
                            </div>

                            {/* Text Column */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6 shadow-sm border border-white">
                                    <span className="text-sky-600 font-extrabold text-lg">{(idx + 1).toString().padStart(2, '0')}</span>
                                </div>
                                <h4 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-6">{service.title}</h4>
                                <p className="text-brand-textAlt text-lg md:text-xl leading-relaxed font-medium mb-8">
                                    {service.desc}
                                </p>
                                
                                <div>
                                    <button className="px-8 py-4 bg-white border-2 border-sky-100 text-sky-600 rounded-full font-bold text-lg hover:bg-sky-50 hover:border-sky-200 transition-all shadow-sm flex items-center gap-2 group w-fit">
                                        Learn more <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
