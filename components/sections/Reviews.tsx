"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
    {
        name: "Aman Tebriwal",
        rating: 5,
        text: "Shree Goyal Electronics exceeded my expectations with their excellent service and reasonable prices. The salesman demonstrated superb salesmanship, understanding my needs and offering valuable assistance without pressure. Highly recommended for a hassle-free shopping experience. Best electronics store in Pakur Jharkhand — must visit.",
    },
    {
        name: "Akhilesh Kumar Rastogi",
        rating: 5,
        text: "Excellent experience with visit Shree Goyal Electronics. His behavior and price both are excellent. Thanks sir.",
    },
    {
        name: "SIDDHARTHA SAHANA",
        rating: 5,
        text: "All-in-one shop with a variety. Very humble and polite behaviour of the owner.",
    },
    {
        name: "Yogesh Baghel",
        rating: 5,
        text: "Highly recommend for all the Home appliances.",
    },
    {
        name: "Krishnal Rabidas",
        rating: 5,
        text: "Awesome Experience.",
    },
    {
        name: "Garv Bhagat",
        rating: 5,
        text: "Nice product.",
    },
    {
        name: "Muskan Tebriwal",
        rating: 5,
        text: "Good service.",
    },
    {
        name: "Ashok Kumar",
        rating: 5,
        text: "Good product.",
    },
    {
        name: "Priyanka Kumari",
        rating: 5,
        text: "Service is good.",
    },
];

export default function Reviews() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <section id="reviews" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-semibold tracking-wider uppercase mb-4"
                    >
                        Customer Stories
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Trusted by Families in Pakur
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg"
                    >
                        Don't just take our word for it. Here's what our valued customers have to say about their experience.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <div className="flex justify-end gap-3 mb-6 md:absolute md:-top-24 md:right-0">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className="rounded-full border-slate-200 hover:bg-slate-50 hover:text-primary transition-colors disabled:opacity-30"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span className="sr-only">Previous reviews</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className="rounded-full border-slate-200 hover:bg-slate-50 hover:text-primary transition-colors disabled:opacity-30"
                        >
                            <ChevronRight className="w-5 h-5" />
                            <span className="sr-only">Next reviews</span>
                        </Button>
                    </div>

                    {/* Carousel */}
                    <div
                        ref={scrollRef}
                        onScroll={checkScroll}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
                    >
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex-none w-[85vw] md:w-[400px] snap-center"
                            >
                                <div className="h-full bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`}
                                                />
                                            ))}
                                        </div>
                                        <Quote className="w-8 h-8 text-slate-200 group-hover:text-primary/20 transition-colors" />
                                    </div>

                                    <blockquote className="text-slate-600 leading-relaxed mb-6 flex-grow min-h-[80px]">
                                        "{review.text}"
                                    </blockquote>

                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center font-bold text-sm">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900">{review.name}</div>
                                            <div className="text-xs text-slate-500">Google Review</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
