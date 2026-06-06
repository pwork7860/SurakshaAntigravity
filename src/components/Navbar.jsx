import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Simple scroll spy
            const sections = ['home', 'about', 'services', 'expertise', 'contact'];
            let current = 'home';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= (element.offsetTop - 150)) {
                    current = section;
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Services', path: '#services' },
        { name: 'Expertise', path: '#expertise' },
        { name: 'Contact Us', path: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-white/80 backdrop-blur-sm py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <a href="#home" className="flex items-center gap-2">
                        <div className="text-brand-accent"><ShieldCheck size={28} /></div>
                        <span className="font-bold text-2xl tracking-tight text-brand-text">Suraksha <span className="text-brand-accent font-light">Services</span></span>
                    </a>
                    
                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.path} 
                                className={`text-sm font-semibold transition-colors ${activeSection === link.path.substring(1) ? 'text-brand-accent' : 'text-brand-textAlt hover:text-brand-accent'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-brand-text hover:text-brand-accent">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden glass absolute w-full top-full left-0 border-t border-gray-200"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.path} 
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${activeSection === link.path.substring(1) ? 'text-brand-accent bg-blue-50' : 'text-brand-textAlt hover:text-brand-accent hover:bg-slate-50'}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
