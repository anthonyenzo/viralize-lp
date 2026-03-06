"use client";

import { Sparkles, Video, Type, Download } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    {
        title: "Criação Visual",
        description: "Posts estilo Twitter e Frases de Efeito prontas para engajar no formato que as redes mais amam.",
        icon: Type,
        color: "text-blue-400"
    },
    {
        title: "Automação de Vídeo",
        description: "Criador de Reels com IA. Adicione seu vídeo e nós cuidamos da edição, cortes e dinamismo.",
        icon: Video,
        color: "text-cyan-400"
    },
    {
        title: "Copywriting Inteligente",
        description: "Legendas automáticas geradas pela IA que retêm a atenção, com gatilhos mentais perfeitos para o seu nicho.",
        icon: Sparkles,
        color: "text-teal-400"
    },
    {
        title: "Conversores Premium",
        description: "Downloads sem marca d'água do Instagram, TikTok e YouTube em qualidade máxima de forma ilimitada.",
        icon: Download,
        color: "text-indigo-400"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export function Overview() {
    return (
        <section id="features" className="py-24 relative overflow-hidden bg-background">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        O que você consegue com o <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Viralize AI</span>
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Todas as ferramentas necessárias para dominar o jogo da atenção e escalar sua marca pessoal sem precisar de horas de edição.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative p-8 rounded-2xl bg-surface border border-surface-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
                        >
                            {/* Card Hover Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-xl bg-surface-hover border border-surface-border flex items-center justify-center mb-6 shadow-lg`}>
                                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {benefit.title}
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
