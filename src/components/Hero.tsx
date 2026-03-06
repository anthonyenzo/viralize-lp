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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-surface-border mb-8">
                        <span className="flex w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium text-zinc-300">Nova versão da IA Disponível 2.0</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-8 leading-[1.1]">
                        Crie conteúdo viral em <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-primary-dark relative inline-block">
                            segundos com IA
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 blur-sm" />
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Aumente sua audiência no Instagram, TikTok e YouTube. Crie posts visuais, gere Reels automatizados e baixe vídeos sem marca d&apos;água em uma única plataforma.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="/signup"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-background font-bold text-lg hover:bg-cyan-400 hover:shadow-[0_0_30px_var(--color-primary-glow)] transition-all flex items-center justify-center gap-2"
                        >
                            Começar de graça
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#features"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface border border-surface-border text-white font-semibold text-lg hover:bg-surface-hover hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                        >
                            Ver funcionalidades
                        </Link>
                    </div>

                    {/* Mini Dashboard Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
                    >
                        {[
                            { icon: MessageSquareQuote, label: "Frases Geradas", value: "12.4K", color: "primary" },
                            { icon: PlaySquare, label: "Reels Criados", value: "8.2K", color: "cyan-400" },
                            { icon: Subtitles, label: "Legendas com IA", value: "45.9K", color: "teal-400" }
                        ].map((metric, i) => (
                            <div key={i} className="p-4 rounded-2xl border border-surface-border bg-black/50 backdrop-blur-xl flex items-center gap-4 hover:border-primary/30 transition-colors">
                                <div className="p-3 bg-surface rounded-lg">
                                    <metric.icon className={`text-${metric.color} w-6 h-6`} />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-zinc-500 font-medium">{metric.label}</p>
                                    <p className="text-2xl font-bold text-white">{metric.value}<span className="text-primary">+</span></p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
