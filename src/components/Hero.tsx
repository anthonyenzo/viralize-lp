"use client";

import Link from "next/link";
import { ArrowRight, MessageSquareQuote, PlaySquare, Subtitles } from "lucide-react";
import { motion } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Abstract Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
            <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Social Proof Stack (Top) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="inline-flex items-center gap-4 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                                    <img
                                        src={`/images/avatars/avatar_${i}.png`}
                                        alt={`Usuário ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-semibold text-white">
                            <span className="text-primary">+3.000</span> usuários
                        </span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight mb-8 leading-[1.1]">
                        Crie conteúdo viral em <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-primary-dark relative inline-block pb-1">
                            segundos
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 blur-sm" />
                        </span>{" "}
                        com automações<br className="hidden sm:block" /> e{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-primary-dark relative inline-block pb-1">
                            Inteligência Artificial
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 blur-sm" />
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        A ferramenta indispensável dos maiores perfis do Brasil para dominar o algoritmo, escalar sua audiência e converter seguidores em clientes fiéis.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="/signup"
                            className="w-[85%] max-w-[280px] sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-primary text-background font-bold text-base sm:text-lg hover:bg-cyan-400 hover:shadow-[0_0_30px_var(--color-primary-glow)] transition-all flex items-center justify-center gap-2 mx-auto"
                        >
                            Começar agora
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#features"
                            className="w-[85%] max-w-[280px] sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-surface border border-surface-border text-white font-semibold text-base sm:text-lg hover:bg-surface-hover hover:border-zinc-700 transition-all flex items-center justify-center gap-2 mx-auto"
                        >
                            Ver funcionalidades
                        </Link>
                    </div>

                    {/* App Dashboard 3D Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-full px-4 perspective-[2000px] mb-8"
                    >
                        {/* Glow effect behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none" />
                        
                        {/* Desktop Image */}
                        <div 
                            className="hidden md:block relative z-10 w-full rounded-xl sm:rounded-2xl border border-zinc-700/50 bg-surface/50 p-1 sm:p-2 shadow-2xl preview-3d-tilt transition-all duration-700 hover:!transform-none"
                        >
                            <img 
                                src="/images/dashboard-preview.png" 
                                alt="Dashboard do App Viralize AI" 
                                className="w-full h-auto rounded-lg sm:rounded-xl object-cover shadow-[0_0_50px_-12px_rgba(0,242,255,0.3)] transition-all duration-700"
                            />
                        </div>

                        {/* Mobile Image (Sidebar Focus with 3D Diagonal) */}
                        <div 
                            className="block md:hidden relative z-10 w-[95%] mx-auto rounded-xl border border-zinc-700/50 bg-surface/50 p-1.5 shadow-2xl transition-transform duration-700"
                            style={{ 
                                transform: 'perspective(1000px) rotateX(15deg) rotateY(10deg) rotateZ(-2deg) translateY(0)',
                                transformStyle: 'preserve-3d',
                                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                            }}
                        >
                            <div className="w-full flex justify-center overflow-hidden rounded-lg bg-[#0A0A0B] border border-zinc-800">
                                <img 
                                    src="/images/dashboard-mobile-sidebar.png" 
                                    alt="Menu de Ferramentas Viralize AI" 
                                    className="w-full h-auto object-contain shadow-[0_0_30px_-5px_rgba(0,242,255,0.2)]"
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
