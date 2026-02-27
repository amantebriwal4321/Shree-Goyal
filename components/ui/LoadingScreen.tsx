"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time or wait for resources
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2.0s duration (increased by 0.5s as requested)

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="relative flex flex-col items-center justify-center w-full px-4 text-center">
                        {/* Logo Container */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                            }}
                            className="relative w-56 h-56 md:w-80 md:h-80 mb-8 flex flex-col items-center justify-center"
                        >
                            {/* Glowing effect behind logo */}
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse flex items-center justify-center" />

                            <Image
                                src="/logo.png"
                                alt="Shree Goyal Electronics"
                                fill
                                sizes="(max-width: 768px) 192px, 256px"
                                className="object-contain drop-shadow-2xl z-10 mx-auto"
                                priority
                            />
                        </motion.div>

                        {/* Loading Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex flex-col items-center justify-center w-full gap-3 relative z-20"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wider uppercase text-center w-full">
                                Shree Goyal<br className="sm:hidden" /> Electronics
                            </h2>
                            <p className="text-slate-400 text-lg sm:text-xl font-serif tracking-wide italic mt-2 text-center w-full">
                                "Ahsas Apne Pan Ka" <span className="text-red-500 inline-block ml-1">❤️</span>
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
