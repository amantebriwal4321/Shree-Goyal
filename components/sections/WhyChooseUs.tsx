"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wrench, RefreshCw, Award } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Genuine Products",
        description: "100% authentic electronics sourced directly from top brands.",
    },
    {
        icon: Award,
        title: "Trusted Store",
        description: "Serving Pakur with trust, transparency, and excellence.",
    },
    {
        icon: Wrench,
        title: "Expert Repairs",
        description: "Professional repair services for swift and reliable fixes.",
    },
    {
        icon: RefreshCw,
        title: "Battery Recycling",
        description: "Eco-friendly disposal and recycling of old batteries.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 text-center group"
                        >
                            <div className="w-14 h-14 mx-auto mb-6 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
