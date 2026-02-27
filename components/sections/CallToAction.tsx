"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CallToAction() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/95">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6"
                >
                    Ready to Upgrade Your Tech?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
                >
                    Visit Shree Goyal Electronics today for the best deals, expert advice, and premium service.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-white text-primary hover:bg-blue-50 transition-colors" asChild>
                        <Link href="https://wa.me/919801073535" target="_blank">
                            Chat on WhatsApp
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
                        <a href="tel:09334731131">
                            <Phone className="mr-2 w-5 h-5" />
                            Call Now
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
