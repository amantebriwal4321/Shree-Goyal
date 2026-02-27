"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Leadership() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-1 lg:order-none"
                    >
                        {/* Decorative background accent */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-50 to-slate-50 rounded-3xl -z-10 transform -rotate-2"></div>

                        <div className="relative w-full aspect-[3/4] md:aspect-square lg:aspect-[4/5] lg:max-w-md mx-auto rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-100">
                            <Image
                                src="/image.jpg"
                                alt="Founder of Shree Goyal Electronics"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-2 lg:order-none flex flex-col justify-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-semibold tracking-wider uppercase mb-6 self-start">
                            Our Leadership
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            The Vision Behind <br className="hidden md:blockpa" /> Shree Goyal Electronics
                        </h2>

                        <div className="w-16 h-1 bg-primary/20 rounded-full mb-8"></div>

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
                            <p>
                                Shree Goyal Electronics was founded with a clear vision — to provide genuine electronics, transparent pricing, and dependable after-sales service to the people of Pakur and surrounding areas.
                            </p>
                            <p>
                                Over the years, our focus has remained the same: building long-term relationships based on trust, reliability, and consistent customer satisfaction. Every product we offer and every service we provide reflects our commitment to quality and integrity.
                            </p>
                        </div>

                        {/* Founder Message Block */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative">
                            {/* Quote icon accent */}
                            <div className="absolute top-6 left-6 text-primary/10 font-serif text-6xl leading-none select-none">
                                "
                            </div>

                            <blockquote className="relative z-10">
                                <p className="text-slate-700 italic text-lg leading-relaxed mb-6 font-medium">
                                    "Our goal has always been simple — to ensure that every customer who walks into our store leaves with confidence, satisfaction, and the assurance of genuine products. We believe in service that goes beyond sales."
                                </p>

                                <footer className="flex items-center gap-4">
                                    <div className="w-10 h-[2px] bg-primary/30"></div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-lg">Mr.Anil Goyal</div>
                                        <div className="text-sm text-slate-500 font-medium tracking-wide">Founder/Proprietor</div>
                                        <div className="text-sm text-slate-500 font-medium tracking-wide">Shree Goyal Electronics</div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
