"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Location() {
    return (
        <section id="location" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Location Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-semibold tracking-wider uppercase mb-6"
                        >
                            Visit Us
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-8"
                        >
                            Experience Our Store
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8 mb-10"
                        >
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">SHREE GOYAL ELECTRONICS</h3>
                                    <p className="text-slate-500 leading-relaxed text-lg">
                                        Bypass Rd, Harindanga Bazar<br />
                                        Pakur, Jharkhand 816107
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-medium text-lg">098010 73535</p>
                                    <p className="text-slate-500">Always ready to assist you</p>
                                </div>
                            </div>

                            {/* 
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-medium text-lg">Open · Closes 9 PM</p>
                                    <p className="text-slate-500">Visit us during working hours</p>
                                </div>
                            </div>
                            */}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 group" asChild>
                                <a href="https://maps.google.com/?q=Shree+Goyal+Electronics+Pakur" target="_blank" rel="noreferrer">
                                    <Navigation className="mr-2 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    Get Directions
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-2 text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors group" asChild>
                                <a href="tel:09801073535">
                                    <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Call Now
                                </a>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Google Map Integration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100"
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=Shree%20Goyal%20Electronics%2C%20Bypass%20Rd%2C%20Harindanga%20Bazar%2C%20Pakur%2C%20Jharkhand%20816107&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                            title="Shree Goyal Electronics Location on Google Maps"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
