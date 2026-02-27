"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Phone, MapPin, ShieldCheck, Wrench, Battery } from "lucide-react";
import { useRef } from "react";
import ParticleBackground from "@/components/ui/particle-background";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <section
            id="home"
            ref={ref}
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50"
        >
            {/* Background Decorative Elements - Stable Deep Layer */}
            <motion.div
                className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-slate-100"
            >
                {/* Real Showroom Visual with Blur & Light Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/gallery/p1.jpg"
                        alt="Store Showroom Exterior"
                        className="w-full h-full object-cover object-center scale-105 opacity-60 md:opacity-50 blur-[2px] md:blur-[4px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-white/60 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
                </div>

                {/* Premium Particle Background */}
                <div className="relative z-10 w-full h-full">
                    <ParticleBackground />
                </div>
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 mt-8 md:mt-12">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto p-6 sm:p-14 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_16px_40px_rgba(0,0,0,0.08)] relative overflow-hidden">

                    {/* Radial Light Focus behind text */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/90 via-white/50 to-transparent pointer-events-none z-0" />

                    <div className="relative z-20 flex flex-col items-center w-full">
                        {/* Mobile Logo Integration (Hidden on md and up) */}
                        <div className="md:hidden relative w-24 h-24 mb-6">
                            <Image
                                src="/logo.png"
                                alt="Shree Goyal Electronics"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-bold tracking-wide text-slate-900 mb-4 md:mb-8 leading-tight w-full max-w-[90vw]" style={{ fontSize: "clamp(2rem, 5vw + 1rem, 4.5rem)" }}>
                            SHREE GOYAL <br />
                            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 drop-shadow-sm">
                                ELECTRONICS
                            </span>
                        </h1>

                        {/* Tagline */}
                        <p className="text-xl md:text-3xl font-light text-slate-600 italic mb-6 md:mb-10 w-full">
                            "Ahsas Apne Pan Ka"
                        </p>

                        {/* Badge - Repositioned Below Tagline */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 shadow-sm mb-6 md:mb-8 hover:bg-white transition-colors cursor-default">
                            <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 fill-green-100 shrink-0" />
                            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-800">
                                Partner of <span className="text-[#0057E7]">Jio</span> <span className="text-[#E20A13]">MART</span> Digital
                            </span>
                        </div>

                        {/* Subtext */}
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-2xl leading-relaxed font-medium px-2">
                            Catering to the diverse electronics needs of Pakur and beyond. From the latest gadgets to essential home appliances, delivering exceptional quality, value, and service.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">

                            {/* WhatsApp (Primary) */}
                            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 text-lg bg-primary hover:bg-blue-700 text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_24px_rgba(37,99,235,0.35)] transition-all duration-300 transform hover:-translate-y-1 font-semibold group border border-primary/20" asChild>
                                <a href="https://wa.me/919801073535" target="_blank" rel="noopener noreferrer">
                                    <span className="flex items-center justify-center w-full">
                                        <svg className="w-5 h-5 mr-3 text-[#25D366] group-hover:scale-110 transition-transform fill-current drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                        </svg>
                                        Chat on WhatsApp
                                    </span>
                                </a>
                            </Button>

                            {/* Call Now */}
                            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 text-lg bg-white/90 text-slate-800 hover:bg-white border text-slate-700 border-slate-200 hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-300 group" asChild>
                                <a href="tel:09334731131">
                                    <Phone className="mr-2 w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                    Call Now
                                </a>
                            </Button>

                            {/* Get Directions */}
                            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 py-6 text-lg bg-white/50 hover:bg-white/80 border-slate-200 hover:border-slate-300 text-slate-700 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 group" asChild>
                                <a href="https://maps.google.com/?q=Shree+Goyal+Electronics+Pakur" target="_blank" rel="noopener noreferrer">
                                    <MapPin className="mr-2 w-5 h-5 text-slate-500 group-hover:text-slate-800 group-hover:scale-110 transition-transform" />
                                    Get Directions
                                </a>
                            </Button>

                        </div>

                        {/* Trust Badges / Retail Identity */}
                        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 border-t border-slate-200/60 pt-6 md:pt-8 w-full relative z-20">
                            <div className="flex items-center gap-2 text-slate-700">
                                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                                <span className="text-xs md:text-sm font-semibold tracking-wide">Genuine Products</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-700">
                                <Wrench className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                                <span className="text-xs md:text-sm font-semibold tracking-wide">Repair Services</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-700">
                                <Battery className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                                <span className="text-xs md:text-sm font-semibold tracking-wide">Recycling Partner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
