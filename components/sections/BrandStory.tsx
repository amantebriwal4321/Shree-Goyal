"use client";
import { motion } from "framer-motion";

export function BrandStory() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                            More Than Just an Electronics Store
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            At Shree Goyal Electronics, we believe technology should enhance your life, not complicate it.
                            Since our inception, we have been dedicated to providing a curated selection of premium electronics
                            backed by honest advice and unwavering support.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We don't just sell products; we build relationships. Our team of experts is here to guide you
                            through every purchase, ensuring you find exactly what you need.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
