import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative bg-brand-bgAlt min-h-[calc(100vh-80px)] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
                >
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Get in Touch</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-brand-text mb-6">Contact Us</h3>
                        <p className="text-brand-textAlt text-lg leading-relaxed mb-12">
                            Have questions, comments, or just want to say hello? We are always here to help you secure and manage your future.
                        </p>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-4 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-brand-text text-xl font-bold mb-1">Email</h4>
                                    <a href="mailto:info@surakshaservices.com" className="text-brand-textAlt hover:text-brand-accent transition-colors text-lg">
                                        info@surakshaservices.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="p-4 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-brand-text text-xl font-bold mb-1">Phone</h4>
                                    <a href="tel:+919035870959" className="text-brand-textAlt hover:text-brand-accent transition-colors text-lg">
                                        +91 9035870959
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-4 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-brand-text text-xl font-bold mb-1">Address</h4>
                                    <p className="text-brand-textAlt text-lg leading-relaxed">
                                        #167, 1st Floor, Ekadantha Nilaya,<br/>
                                        Nyathappa Layout, Shanthinikethan Road,<br/>
                                        Arakere, Bangalore - 560076
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-8 md:p-10 rounded-2xl">
                        <h4 className="text-2xl font-bold text-brand-text mb-6">Send us a Message</h4>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-brand-textAlt mb-2">Full Name</label>
                                <input type="text" id="name" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-brand-textAlt mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-brand-textAlt mb-2">Message</label>
                                <textarea id="message" rows="4" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="w-full py-4 bg-brand-accent text-white rounded-lg font-medium text-lg hover:bg-brand-accentHover transition-colors shadow-lg shadow-brand-accent/30">
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
