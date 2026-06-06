import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
    {
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80",
        headline: "Uncompromised Security Services",
        subtitle: "State-of-the-art surveillance and expert manned guarding to ensure absolute safety for your premises."
    },
    {
        image: "https://images.unsplash.com/photo-1560053608-13721e0d69e8?auto=format&fit=crop&w=1920&q=80", // Flag/Republic Day vibe
        headline: "Happy Republic Day",
        subtitle: "Honoring the spirit of our nation with pride, unity, and an unwavering commitment to your security."
    },
    {
        image: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1920&q=80", // Diwali/Lights vibe
        headline: "Joyous Diwali Greetings",
        subtitle: "May the festival of lights bring prosperity, happiness, and absolute safety to your enterprise."
    },
    {
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80",
        headline: "Comprehensive Facility Care",
        subtitle: "From expert housekeeping to vital STP & WTP operations, we keep your environment flawless."
    },
    {
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80", // NCC Day/Uniform vibe
        headline: "Proudly Celebrating NCC Day",
        subtitle: "Saluting the discipline, dedication, and leadership that inspire our security protocols every day."
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
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            
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
                
                {/* Static Top Heading (Company Name - Increased Size) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-sky-400 tracking-[0.1em] uppercase mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                        Suraksha Security Services
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
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-wide mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                            {heroSlides[currentSlide].headline}
                        </h2>
                        <p className="mt-2 text-lg md:text-2xl text-slate-100 max-w-4xl mx-auto font-medium leading-relaxed mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {heroSlides[currentSlide].subtitle}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <a href="#services" className="px-10 py-5 bg-sky-500 text-white rounded-full font-bold text-xl hover:bg-sky-400 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(14,165,233,0.5)] border-2 border-transparent">
                                Explore Services
                            </a>
                            <a href="#contact" className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-bold text-xl hover:bg-white/20 transition-all shadow-lg hover:shadow-xl">
                                Contact Us
                            </a>
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
                        className={`h-2.5 rounded-full transition-all duration-500 shadow-lg ${currentSlide === idx ? 'w-12 bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)]' : 'w-3 bg-white/40 hover:bg-white/70'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Home;
