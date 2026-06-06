import { motion } from 'framer-motion';
import { 
    MonitorSmartphone, HardHat, Coffee, 
    Wifi, FlaskConical, Shirt, 
    Factory, Landmark, Stethoscope, 
    GraduationCap, Building2, ShoppingBag 
} from 'lucide-react';

const Expertise = () => {
    const domains = [
        { name: "Information Technology", icon: <MonitorSmartphone size={24} /> },
        { name: "Engineering", icon: <HardHat size={24} /> },
        { name: "Consumer Services", icon: <Coffee size={24} /> },
        { name: "Telecommunications", icon: <Wifi size={24} /> },
        { name: "Pharmaceuticals", icon: <FlaskConical size={24} /> },
        { name: "Apparel & Retail", icon: <Shirt size={24} /> },
        { name: "Manufacturing", icon: <Factory size={24} /> },
        { name: "Finance & Banking", icon: <Landmark size={24} /> },
        { name: "Healthcare", icon: <Stethoscope size={24} /> },
        { name: "Education", icon: <GraduationCap size={24} /> },
        { name: "Real Estate", icon: <Building2 size={24} /> },
        { name: "E-Commerce", icon: <ShoppingBag size={24} /> }
    ];

    // Split domains for dual marquee effect
    const row1 = domains.slice(0, 6);
    const row2 = domains.slice(6, 12);

    return (
        <section id="expertise" className="py-24 relative bg-brand-bg min-h-screen flex flex-col justify-center overflow-hidden border-y border-sky-50">
            {/* Soft decorative elements */}
            <div className="absolute -left-40 top-20 w-80 h-80 bg-sky-200/20 rounded-full blur-[80px]"></div>
            <div className="absolute -right-40 bottom-20 w-80 h-80 bg-pink-200/20 rounded-full blur-[80px]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-sky-50 rounded-2xl mb-4 border border-sky-100">
                    <h2 className="text-sm font-extrabold tracking-widest text-sky-600 uppercase">Domain Expertise</h2>
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-8 tracking-tight">Industries We Empower</h3>
                <p className="text-brand-textAlt text-lg md:text-xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                    We bring specialized knowledge and tailored solutions across a wide spectrum of industries. Our deep domain expertise ensures we understand your unique challenges.
                </p>
            </div>

            {/* Marquee Row 1 */}
            <div className="relative flex overflow-x-hidden group py-4">
                <motion.div 
                    className="flex gap-6 px-3 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                    {[...row1, ...row1, ...row1, ...row1].map((domain, idx) => (
                        <div key={idx} className="flex items-center gap-3 px-8 py-5 bg-white rounded-3xl border-2 border-slate-100 text-xl font-bold text-slate-700 hover:text-sky-600 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100 transition-all cursor-default transform hover:-translate-y-1">
                            <span className="text-sky-400">{domain.icon}</span>
                            {domain.name}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Marquee Row 2 (Reverse direction) */}
            <div className="relative flex overflow-x-hidden group py-4">
                <motion.div 
                    className="flex gap-6 px-3 whitespace-nowrap"
                    animate={{ x: [-1000, 0] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...row2, ...row2, ...row2, ...row2].map((domain, idx) => (
                        <div key={idx} className="flex items-center gap-3 px-8 py-5 bg-white rounded-3xl border-2 border-slate-100 text-xl font-bold text-slate-700 hover:text-sky-600 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100 transition-all cursor-default transform hover:-translate-y-1">
                            <span className="text-sky-400">{domain.icon}</span>
                            {domain.name}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Expertise;
