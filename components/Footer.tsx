import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 bg-white rounded-full p-1">
                                <Image
                                    src="/logo.png"
                                    alt="Shree Goyal"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white">SHREE GOYAL</h3>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Your trusted partner for premium electronics in Pakur. Official Jio MART Digital Partner ensuring quality, value, and exceptional service.
                        </p>
                        <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium">
                            <span>⭐ 4.953 Google Reviews</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {["Home", "Products", "About Us", "Reviews", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase().replace(" ", "")}`}
                                        className="text-slate-400 hover:text-white transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            <li className="text-slate-400 text-sm">Latest Electronics</li>
                            <li className="text-slate-400 text-sm">Home Appliances</li>
                            <li className="text-slate-400 text-sm">Repair Services</li>
                            <li className="text-slate-400 text-sm">Battery Recycling</li>
                            <li className="text-slate-400 text-sm">Jio MART Digital Partner</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-slate-400">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Bypass Rd, Harindanga Bazar, Pakur, Jharkhand 816107</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:09334731131" className="hover:text-white transition-colors">093347 31131</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Clock className="w-5 h-5 text-primary shrink-0" />
                                <span>Open Sun-Sat</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Shree Goyal Electronics. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://www.facebook.com/ShreeGoyalElectronics" target="_blank" className="bg-slate-800 p-3 rounded-full hover:bg-[#1877F2] hover:text-white transition-all transform hover:scale-110 shadow-lg" aria-label="Facebook">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.instagram.com/shreegoyalelectronics" target="_blank" className="bg-slate-800 p-3 rounded-full hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all transform hover:scale-110 shadow-lg" aria-label="Instagram">
                            <Instagram className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
