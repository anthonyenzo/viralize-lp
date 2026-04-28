"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Básico",
        price: "R$ 49,90",
        period: "/mês",
        description: "Ideal para começar a testar o poder da IA.",
        features: [
            "Posts Tweet ilimitados",
            "Clonador de Carrossel ilimitado",
            "Frases de Efeito ilimitadas",
            "5 gerações de Reels com IA grátis por mês",
            "5 gerações de Legendas com IA grátis por mês",
        ],
        buttonText: "Assinar Básico",
        buttonPrimary: false,
        popular: false,
    },
    {
        name: "Premium",
        price: "R$ 147",
        period: "/mês",
        description: "O essencial para crescer sua marca.",
        features: [
            "Todos os benefícios do Plano Básico",
            "30 gerações de Reels com IA por mês",
            "30 gerações de Legendas com IA por mês",
            "Conversores ilimitados (YouTube, Instagram, TikTok)",
            "Downloads em FULL HD e sem marca d'água"
        ],
        buttonText: "Assinar Premium",
        buttonPrimary: true,
        popular: true,
    },
    {
        name: "Anual",
        price: "R$ 107",
        period: "/mês",
        description: "Desconto agressivo para comprometidos.",
        features: [
            "Todos os benefícios Premium",
            "Suporte prioritário",
            "Acesso antecipado a novas IAs",
            "Economize R$ 480 no ano"
        ],
        buttonText: "Assinar Anual",
        buttonPrimary: false,
        popular: false,
        tag: "Maior Desconto"
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

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Comece agora e evolua com sua <span className="text-primary">audiência.</span>
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Cancele quando quiser. Sem taxas ocultas.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 max-w-6xl mx-auto items-center"
                >
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className={`relative rounded-3xl p-6 sm:p-8 bg-surface border transition-all duration-300 ${plan.popular
                                ? "border-primary shadow-[0_0_30px_var(--color-primary-glow)] md:-translate-y-4 md:scale-105 z-10"
                                : "border-surface-border hover:border-primary/30"
                                }`}
                        >
                            {plan.tag && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-primary text-background text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                                    {plan.tag}
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-zinc-400 text-sm mb-6 h-10">{plan.description}</p>

                            <div className="mb-6">
                                <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                                <span className="text-zinc-500">{plan.period}</span>
                            </div>

                            <Link
                                href="https://app.viralizeaimachine.com/registrar"
                                className={`w-full py-3 px-6 rounded-full font-bold flex justify-center items-center transition-all mb-8 ${plan.buttonPrimary
                                    ? "bg-primary text-background hover:bg-cyan-400 hover:shadow-[0_0_20px_var(--color-primary-glow)]"
                                    : "bg-surface-hover border border-surface-border text-white hover:bg-zinc-800"
                                    }`}
                            >
                                {plan.buttonText}
                            </Link>

                            <ul className="space-y-4">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-zinc-600"}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
