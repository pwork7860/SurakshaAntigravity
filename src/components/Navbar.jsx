import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/footer-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Simple scroll spy
            const sections = ['home', 'about', 'services', 'expertise', 'gallery', 'contact'];
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
        { name: 'Gallery', path: '#gallery' },
        { name: 'Contact Us', path: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <a href="#home" className="flex items-center gap-3">
                        <img src={logo} alt="Suraksha Facility & Management Services Logo" className="h-10 md:h-14 w-auto object-contain" />
                    </a>
                    
                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.path} 
                                className={`text-sm font-semibold transition-colors ${activeSection === link.path.substring(1) ? 'text-sky-400' : 'text-slate-300 hover:text-sky-400'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-sky-400 transition-colors">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                        className="md:hidden absolute w-full top-full left-0 bg-slate-900 border-b border-slate-800 shadow-2xl"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.path} 
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${activeSection === link.path.substring(1) ? 'text-sky-400 bg-slate-800' : 'text-slate-300 hover:text-sky-400 hover:bg-slate-800/50'}`}
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
