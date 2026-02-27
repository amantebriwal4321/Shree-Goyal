"use client";
import { motion } from "framer-motion";

export function StoreExperience() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Experience It Live
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Step into our showroom to touch, feel, and experience the latest technology before you buy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg group"
                    >
                        <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                            <span className="text-slate-500 font-medium">Showroom Interior View</span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg group"
                    >
                        <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                            <span className="text-slate-500 font-medium">Product Demo Zone</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
