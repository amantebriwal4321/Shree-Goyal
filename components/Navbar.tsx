"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#why-choose-us" }, // Updated href anchor
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/90 backdrop-blur-md shadow-md py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 xl:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        <div className="relative w-12 h-12 md:w-16 md:h-16">
                            {/* User needs to add logo.png to public folder */}
                            <Image
                                src="/logo.png"
                                alt="Shree Goyal Electronics"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl leading-none tracking-tight text-primary">
                                SHREE GOYAL
                            </span>
                            <span className="text-xs font-medium tracking-widest uppercase text-gray-600">
                                Electronics
                            </span>
                        </div>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium transition-colors hover:text-primary text-slate-700"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Social Links inside Navbar Desktop */}
                        <div className="flex items-center gap-2 ml-2 border-l border-slate-200 pl-6 py-1">
                            <Link href="https://www.instagram.com/shreegoyalelectronics" target="_blank" className="text-slate-500 hover:text-[#d62976] transition-colors p-1">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.facebook.com/ShreeGoyalElectronics" target="_blank" className="text-slate-500 hover:text-[#1877F2] transition-colors p-1 border-r border-transparent pr-2 mr-2">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <Button
                        className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 rounded-full px-6"
                        asChild
                    >
                        <Link href="https://wa.me/919801073535" target="_blank">
                            Chat on WhatsApp
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation (Full Screen Slide-in) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-white md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col min-h-screen pt-24 px-6 pb-10">
                            <div className="flex flex-col gap-6 flex-grow">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 + 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-3xl font-bold text-slate-800 hover:text-primary transition-colors block py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8 border-t border-slate-100 pt-8 flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <a href="https://www.instagram.com/shreegoyalelectronics" target="_blank" rel="noopener noreferrer" className="bg-pink-50 text-[#d62976] p-4 rounded-full hover:bg-pink-100 transition-colors shadow-sm">
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                    <a href="https://www.facebook.com/ShreeGoyalElectronics" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-[#1877F2] p-4 rounded-full hover:bg-blue-100 transition-colors shadow-sm">
                                        <Facebook className="w-6 h-6" />
                                    </a>
                                </div>
                                <Button size="lg" className="w-full bg-primary rounded-full shadow-lg shadow-primary/20 text-lg py-6" asChild>
                                    <a href="https://wa.me/919801073535" target="_blank" rel="noopener noreferrer">
                                        Chat on WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
