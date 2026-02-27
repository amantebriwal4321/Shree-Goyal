"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ZoomIn, MapPin } from "lucide-react";

const photos = [
    { src: "/gallery/p10.jpg", alt: "Electronics Display Floor" },
    { src: "/gallery/p2.jpg", alt: "Store Front Entrance" },
    { src: "/gallery/p3.jpg", alt: "Home Appliances" },
    { src: "/gallery/p4.jpg", alt: "Store Interior View" },
    { src: "/gallery/p5.jpg", alt: "Premium Showcase" },
    { src: "/gallery/p6.jpg", alt: "Showroom Aisles" },
    { src: "/gallery/p11.jpg", alt: "Electronics Showcase" },
    { src: "/gallery/p8.jpg", alt: "Retail Experience" },
    { src: "/gallery/p7.jpg", alt: "Accessories Collection" },
    { src: "/gallery/p14.jpg", alt: "Premium Brand Displays" },
    { src: "/gallery/p15.jpg", alt: "Store Customer View" },
];

export default function StoreGallery() {
    return (
        <section id="gallery" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-semibold tracking-wider uppercase mb-4"
                    >
                        Virtual Tour
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Inside Our Showroom
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg md:text-xl"
                    >
                        Experience the premium retail environment at Shree Goyal Electronics. Browse our curated selection of the latest technology.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative overflow-hidden rounded-2xl group ${index === 0 ? "md:col-span-2 md:row-span-2" :
                                index === 3 || index === 10 ? "md:col-span-2" :
                                    index === 5 || index === 6 ? "md:row-span-2" : ""
                                }`}
                        >
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-primary shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ZoomIn className="w-6 h-6" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center flex items-center justify-center gap-2 text-slate-500">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Visit us at Bypass Rd, Harindanga Bazar to see more.</span>
                </div>
            </div>
        </section>
    );
}
