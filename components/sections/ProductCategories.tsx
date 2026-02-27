"use client";

import { motion } from "framer-motion";
import { Laptop, Smartphone, Speaker, Headphones, Home, Camera } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
    {
        id: "smartphones",
        icon: Smartphone,
        title: "Smartphones & Tablets",
        description: "Latest models from top brands like Apple, Samsung, OnePlus.",
        color: "bg-blue-50 text-blue-600",
    },
    {
        id: "laptops",
        icon: Laptop,
        title: "Laptops & Computers",
        description: "High-performance devices for work, gaming, and creativity.",
        color: "bg-indigo-50 text-indigo-600",
    },
    {
        id: "home-appliances",
        icon: Home,
        title: "Home Appliances",
        description: "Smart ACs, Refrigerators, Washing Machines for modern living.",
        color: "bg-sky-50 text-sky-600",
    },
    {
        id: "audio",
        icon: Speaker,
        title: "Audio & Entertainment",
        description: "Premium sound systems, home theaters, and smart speakers.",
        color: "bg-violet-50 text-violet-600",
    },
    {
        id: "accessories",
        icon: Headphones,
        title: "Accessories",
        description: "Genuine chargers, cases, and audio gear.",
        color: "bg-slate-100 text-slate-600",
    },
    {
        id: "smart-gadgets",
        icon: Camera,
        title: "Smart Gadgets",
        description: "Smartwatches, security cameras, and more.",
        color: "bg-emerald-50 text-emerald-600",
    },
];

export default function ProductCategories() {
    return (
        <section id="products" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block"
                        >
                            Our Collection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-slate-900"
                        >
                            Premium Electronics for Every Need
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={`#${category.id}`}
                                className="group block h-full p-6 sm:p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300`}>
                                    <category.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed mb-6">
                                    {category.description}
                                </p>
                                <div className="mt-auto flex items-center text-sm font-medium text-primary/80 group-hover:text-primary transition-colors pb-1">
                                    View Details
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Invisible Anchor Targets for Smooth Scrolling */}
            {categories.map((category) => (
                <div key={`${category.id}-anchor`} id={category.id} className="scroll-mt-32" aria-hidden="true" />
            ))}
        </section>
    );
}
