import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative z-10 bg-brand-bg min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">About Us</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">Excellence in Corporate Management</h3>
                        <p className="text-brand-textAlt text-lg leading-relaxed mb-6">
                            Suraksha Facility & Management Services is a premier agency dedicated to providing top-tier security and comprehensive corporate management solutions. We understand that in today's fast-paced environment, organizations need reliable partners to manage their core operations seamlessly.
                        </p>
                        <p className="text-brand-textAlt text-lg leading-relaxed mb-8">
                            From rigorous talent acquisition to meticulous statutory compliance, our multidisciplinary expertise ensures that your business is not just secure, but positioned for sustainable growth.
                        </p>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-yellow-600 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                            alt="Team Meeting" 
                            className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full border border-slate-800"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
