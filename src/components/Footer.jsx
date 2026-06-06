import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 pt-24 pb-8 border-t border-slate-800 relative mt-auto text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand Col */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="text-sky-400"><ShieldCheck size={28} /></div>
                            <span className="font-bold text-2xl tracking-tight text-white">Suraksha <span className="text-sky-400 font-light">Services</span></span>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-8">
                            Empowering your business with uncompromised security and comprehensive corporate management solutions.
                        </p>
                    </div>

                    {/* Quick Links Col */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-slate-400 hover:text-sky-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="text-slate-400 hover:text-sky-400 transition-colors">About</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-sky-400 transition-colors">Services</a></li>
                            <li><a href="#expertise" className="text-slate-400 hover:text-sky-400 transition-colors">Domain Expertise</a></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-slate-400">
                                <div className="text-sky-400 mt-1"><Mail size={20} /></div>
                                <div>
                                    <p className="font-medium text-white mb-1">Email</p>
                                    <a href="mailto:info@surakshaservices.com" className="hover:text-sky-400 transition-colors">info@surakshaservices.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-slate-400">
                                <div className="text-sky-400 mt-1"><Phone size={20} /></div>
                                <div>
                                    <p className="font-medium text-white mb-1">Phone</p>
                                    <a href="tel:+919035870959" className="hover:text-sky-400 transition-colors">+91 9035870959</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-slate-400">
                                <div className="text-sky-400 mt-1"><MapPin size={20} /></div>
                                <div>
                                    <p className="font-medium text-white mb-1">Address</p>
                                    <p className="leading-relaxed">#167, 1st Floor, Ekadantha Nilaya,<br/>Nyathappa Layout Shanthinikethan Road,<br/>Arakere, Bangalore - 560076</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Row */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; 2026 Suraksha Services. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                        Powered by <span className="text-white font-medium">JL Corp</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
