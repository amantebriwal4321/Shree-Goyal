"use client";

import React, { useEffect, useRef } from "react";

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        // Brand Colors: Royal Blue, Light Blue, White
        const colors = ["#4169E1", "#87CEFA", "#FFFFFF"];

        let w = window.innerWidth;
        let h = window.innerHeight;

        // Mouse state
        let mouse = { x: -1000, y: -1000, radius: 120 };
        let isTouch = false;

        // Detect touch device
        if (typeof window !== "undefined") {
            isTouch = window.matchMedia("(pointer: coarse)").matches;
        }

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            baseRadius: number;
            color: string;
            alpha: number;
            targetAlpha: number;

            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                // Very slow, ambient movement
                this.vx = (Math.random() - 0.5) * 0.15;
                this.vy = (Math.random() - 0.5) * 0.15;
                // Small sizes for subtle premium feel
                this.baseRadius = Math.random() * 1.5 + 0.5;
                this.radius = this.baseRadius;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                // Soft opacity
                this.alpha = Math.random() * 0.25 + 0.05;
                this.targetAlpha = this.alpha;
            }

            draw() {
                if (!ctx) return;

                // Fade out particles near the center to keep text legible
                const centerX = w / 2;
                const centerY = h / 2;
                const dx = this.x - centerX;
                const dy = this.y - centerY;
                const distanceToCenter = Math.sqrt(dx * dx + dy * dy);
                const safeZoneRadius = Math.min(centerX, centerY) * 0.9;

                let centerFade = 1;
                if (distanceToCenter < safeZoneRadius) {
                    centerFade = Math.pow(distanceToCenter / safeZoneRadius, 2);
                }

                const finalAlpha = this.alpha * centerFade;

                if (finalAlpha > 0.01) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

                    ctx.globalAlpha = finalAlpha;
                    ctx.fillStyle = this.color;
                    // Add subtle glow with shadow
                    ctx.shadowBlur = 3;
                    ctx.shadowColor = this.color;

                    ctx.fill();

                    // Reset properties
                    ctx.globalAlpha = 1;
                    ctx.shadowBlur = 0;
                }
            }

            update() {
                // Ambient Move
                this.x += this.vx;
                this.y += this.vy;

                // Wrap around smoothly, avoiding jitter
                if (this.x < -this.radius) this.x = w + this.radius;
                if (this.x > w + this.radius) this.x = -this.radius;
                if (this.y < -this.radius) this.y = h + this.radius;
                if (this.y > h + this.radius) this.y = -this.radius;

                // Subtle Mouse Interaction (repulsion)
                if (!isTouch) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius && distance > 0) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        const dirX = dx / distance;
                        const dirY = dy / distance;

                        // Barely noticeable displacement
                        const repulsionX = -dirX * force * 0.04;
                        const repulsionY = -dirY * force * 0.04;

                        this.x += repulsionX;
                        this.y += repulsionY;

                        // Softly brighten near the mouse
                        this.alpha += (0.6 - this.alpha) * 0.02;
                    } else {
                        // Return to target alpha seamlessly
                        this.alpha += (this.targetAlpha - this.alpha) * 0.01;
                    }
                }

                this.draw();
            }
        }

        const init = () => {
            const dpr = window.devicePixelRatio || 1;

            w = window.innerWidth;
            h = window.innerHeight;

            canvas.width = w * dpr;
            canvas.height = h * dpr;

            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;

            ctx.scale(dpr, dpr);

            // Density scaling based on screen size
            const area = w * h;
            let densityLog = Math.floor(area / 18000);
            // Maintain at least 15 on mobile, cap at 70 on 4K for performance
            const particleCount = Math.min(Math.max(densityLog, 15), 70);

            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            // Clear with slight trailing effect (motion blur-like) is not needed for slow movement, 
            // but clearRect provides absolute crispness.
            ctx.clearRect(0, 0, w, h);

            particles.forEach((p) => p.update());

            animationFrameId = requestAnimationFrame(animate);
        };

        // Event Handlers
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(init, 200); // Debounce resize
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        init();
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{
                width: "100%",
                height: "100%",
                background: "transparent",
            }}
        />
    );
}
