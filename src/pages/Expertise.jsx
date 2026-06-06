import { motion } from 'framer-motion';
import { 
    Building2, Factory, Stethoscope, Briefcase
} from 'lucide-react';

const Expertise = () => {
    const domains = [
        { name: "Corporate & IT Hubs", icon: <Briefcase size={24} />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" },
        { name: "Industrial & Manufacturing", icon: <Factory size={24} />, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
        { name: "Healthcare & Hospitals", icon: <Stethoscope size={24} />, image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" },
        { name: "Real Estate & Residential", icon: <Building2 size={24} />, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" }
    ];

    return (
        <section id="expertise" className="py-24 relative bg-black min-h-screen flex flex-col justify-center overflow-hidden border-y border-neutral-900">
            {/* Dark authoritative elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMGgtMXYzOWhDMCAzOSAwIDM5LjUgMCAzOS41eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10 w-full">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center px-4 py-1.5 bg-yellow-500 shadow-sm mb-6 border border-yellow-600"
                >
                    <h2 className="text-xs font-bold tracking-widest text-black uppercase">Domain Expertise</h2>
                </motion.div>
                
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase"
                >
                    Industries We Empower
                </motion.h3>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-neutral-400 font-semibold text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
                >
                    We bring specialized knowledge and tailored solutions across a wide spectrum of industries. Our deep domain expertise ensures we understand your unique challenges.
                </motion.p>

                {/* Stunning Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
                    {domains.map((domain, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="group relative h-80 lg:h-96 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-default"
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
                            <div className="absolute inset-0 p-8 flex flex-col justify-end transform group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 shadow-[0_0_15px_rgba(255,255,255,0.2)] border border-white/20 group-hover:bg-yellow-500 group-hover:text-black group-hover:border-yellow-400 transition-colors duration-500">
                                    {domain.icon}
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold text-white tracking-wide leading-tight">{domain.name}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
