import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
    {
        image: "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?auto=format&fit=crop&w=1920&q=80",
        headline: "Elite Security Guarding",
        subtitle: "Highly trained personnel ensuring 24/7 protection and surveillance for your corporate and industrial assets."
    },
    {
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80", 
        headline: "Professional Bodyguards",
        subtitle: "Discreet and robust personal protection details tailored specifically for executives, VIPs, and high-net-worth individuals."
    },
    {
        image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1920&q=80", 
        headline: "Comprehensive Event Security",
        subtitle: "Deploying highly coordinated security teams to manage crowds and secure high-profile events seamlessly."
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
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            
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
                    {/* Lighter overlay to make the image much more prominent */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/50"></div>
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
                
                {/* Static Top Heading (Company Name - Decreased Size & Updated Colors) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-widest uppercase drop-shadow-2xl text-center mb-6">
                        <span className="block text-yellow-500 mb-2">Suraksha Facility &</span>
                        <span className="block text-white text-2xl md:text-4xl lg:text-5xl">Management Services</span>
                    </h1>
                </motion.div>

                {/* Dynamic Slide Content (Greetings - Decreased Size) */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`text-${currentSlide}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Extra text removed as requested */}
                        <div className="flex justify-center items-center mt-2">
                            <p className="text-white text-lg md:text-xl font-medium tracking-wider uppercase max-w-2xl mx-auto drop-shadow-lg opacity-90">
                                Excellence in Security & Facility Care
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-4 z-20">
                {heroSlides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 transition-all duration-300 shadow-lg ${currentSlide === idx ? 'w-16 bg-yellow-500' : 'w-8 bg-white/40 hover:bg-white/70'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Home;
