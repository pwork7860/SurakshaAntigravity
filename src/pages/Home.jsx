import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
    {
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80",
        title: "Uncompromised",
        highlight: "Security",
        subtitle: "State-of-the-art surveillance and expert manned guarding to ensure absolute safety for your premises."
    },
    {
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80",
        title: "Comprehensive",
        highlight: "Facility Care",
        subtitle: "From expert housekeeping to vital STP & WTP operations, we keep your environment flawless."
    },
    {
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80",
        title: "Top-Tier",
        highlight: "Corporate Services",
        subtitle: "Strategic talent acquisition, accurate payroll, and strict statutory compliance for your business."
    }
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000); // Change slide every 6 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-bgAlt">
            
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img 
                        src={heroSlides[currentSlide].image} 
                        alt="Background Slide" 
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-brand-bgAlt"></div>
                </motion.div>
            </AnimatePresence>

            {/* Lovable Animated Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob z-0"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000 z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`text-${currentSlide}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold text-brand-text tracking-tight mb-6">
                            {heroSlides[currentSlide].title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">{heroSlides[currentSlide].highlight}</span>
                        </h1>
                        <p className="mt-4 text-xl md:text-2xl text-brand-textAlt max-w-3xl mx-auto font-medium leading-relaxed mb-10">
                            {heroSlides[currentSlide].subtitle}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a href="#services" className="px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full font-bold text-lg hover:from-sky-600 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-xl shadow-sky-500/30 border-2 border-transparent">
                                Explore Services
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-white border-2 border-sky-100 text-brand-text rounded-full font-bold text-lg hover:bg-sky-50 hover:border-sky-200 transition-all shadow-sm">
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
                {heroSlides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-3 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-10 bg-sky-500' : 'w-3 bg-gray-300 hover:bg-sky-300'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Home;
