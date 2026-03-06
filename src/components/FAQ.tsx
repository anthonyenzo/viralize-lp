"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "O que é o Viralize AI?",
        answer: "O Viralize AI é uma plataforma all-in-one para criadores de conteúdo. Usamos Inteligência Artificial avançada para gerar posts visuais, criar legendas magnéticas, editar Reels automaticamente e converter vídeos do YouTube, Instagram e TikTok, resolvendo todo o fluxo de criação em uma única ferramenta."
    },
    {
        question: "Preciso saber editar vídeos ou imagens?",
        answer: "Não! A nossa IA faz tudo por você. Desde transcrever e cortar seus vídeos até criar posts visuais perfeitos para o seu feed. Você só precisa escrever ou fazer o upload do conteúdo bruto."
    },
    {
        question: "Quais redes sociais a plataforma atende?",
        answer: "Atualmente, o Viralize AI é perfeitamente otimizado para os formatos do Instagram (Reels e Posts), TikTok (Vídeos curtos) e YouTube (Shorts, além de nossa ferramenta de conversão e extração de áudio)."
    },
    {
        question: "Os vídeos baixados nos conversores vêm com marca d'água?",
        answer: "Não. Todos os downloads através dos nossos conversores premium (seja do TikTok, Instagram ou YouTube) são 100% limpos e SEM marca d&apos;água, prontos para você reaproveitar e repostar."
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

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-surface border-t border-surface-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Perguntas <span className="text-primary">Frequentes</span>
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Tire suas dúvidas e comece a criar conteúdo viral agora mesmo.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-primary/50 bg-background shadow-[0_0_15px_var(--color-primary-glow)]" : "border-surface-border bg-background hover:border-zinc-700"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className={`font-semibold text-lg transition-colors ${isOpen ? "text-primary" : "text-white"}`}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-surface-border/50 pt-4">
                                        {faq.answer}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
