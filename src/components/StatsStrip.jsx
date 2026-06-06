import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Clients Served" },
    { value: "1000+", label: "Security Personnel" },
    { value: "24/7", label: "Protection" }
];

const StatsStrip = () => {
    return (
        <section className="bg-yellow-500 py-12 border-y border-yellow-600 relative z-20 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-yellow-600/50">
                    {stats.map((stat, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="text-center px-4"
                        >
                            <h4 className="text-4xl md:text-5xl font-black text-black mb-2 tracking-tight">
                                {stat.value}
                            </h4>
                            <p className="text-sm md:text-base font-bold text-black/80 uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsStrip;
