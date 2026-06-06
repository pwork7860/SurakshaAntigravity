import { motion } from 'framer-motion';
import { 
    MonitorSmartphone, HardHat, Coffee, 
    Wifi, FlaskConical, Shirt, 
    Factory, Landmark, Stethoscope, 
    GraduationCap, Building2, ShoppingBag 
} from 'lucide-react';

const Expertise = () => {
    const domains = [
        { name: "Information Technology", icon: <MonitorSmartphone size={24} />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
        { name: "Engineering", icon: <HardHat size={24} />, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80" },
        { name: "Consumer Services", icon: <Coffee size={24} />, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" },
        { name: "Telecommunications", icon: <Wifi size={24} />, image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80" },
        { name: "Pharmaceuticals", icon: <FlaskConical size={24} />, image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=600&q=80" },
        { name: "Apparel & Retail", icon: <Shirt size={24} />, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" },
        { name: "Manufacturing", icon: <Factory size={24} />, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" },
        { name: "Finance & Banking", icon: <Landmark size={24} />, image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80" },
        { name: "Healthcare", icon: <Stethoscope size={24} />, image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80" },
        { name: "Education", icon: <GraduationCap size={24} />, image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80" },
        { name: "Real Estate", icon: <Building2 size={24} />, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
        { name: "E-Commerce", icon: <ShoppingBag size={24} />, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" }
    ];

    return (
        <section id="expertise" className="py-24 relative bg-slate-50 min-h-screen flex flex-col justify-center overflow-hidden border-y border-gray-100">
            {/* Soft decorative elements */}
            <div className="absolute -left-40 top-20 w-80 h-80 bg-sky-200/40 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -right-40 bottom-20 w-80 h-80 bg-indigo-200/40 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10 w-full">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center px-4 py-1.5 bg-white shadow-sm rounded-full mb-6 border border-sky-100"
                >
                    <h2 className="text-xs font-bold tracking-widest text-sky-600 uppercase">Domain Expertise</h2>
                </motion.div>
                
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
                >
                    Industries We Empower
                </motion.h3>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
                >
                    We bring specialized knowledge and tailored solutions across a wide spectrum of industries. Our deep domain expertise ensures we understand your unique challenges.
                </motion.p>

                {/* Stunning Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full text-left">
                    {domains.map((domain, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="group relative h-64 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-default"
                        >
                            {/* Background Image */}
                            <img 
                                src={domain.image} 
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                                alt={domain.name} 
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                            
                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end transform group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(255,255,255,0.2)] border border-white/20 group-hover:bg-sky-500 group-hover:border-sky-400 transition-colors duration-500">
                                    {domain.icon}
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold text-white tracking-wide leading-tight">{domain.name}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
