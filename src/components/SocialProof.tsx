"use client";

import { motion } from "framer-motion";

const testimonials = [
    { name: "@pedrotech", role: "Criador Tech", text: "Minha retenção dobrou desde que comecei a usar as legendas dinâmicas da IA." },
    { name: "@marketingmaria", role: "Estrategista", text: "Os posts em formato de frase geraram 3x mais compartilhamentos que meu conteúdo antigo." },
    { name: "@joaofinancas", role: "Educador", text: "Cortar vídeos e adicionar legendas levava horas. Agora leva literally segundos." },
    { name: "@camilalifestyle", role: "Influenciadora", text: "Baixar vídeos do TikTok sem marca d'água para repostar no Reels mudou meu jogo." },
    { name: "@tiagodesign", role: "Designer", text: "A qualidade premium dos posts gerados no Twitter style é absurda. Mantenho a cara da minha marca." },
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

export function SocialProof() {
    return (
        <section className="py-24 bg-background border-b border-surface-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-display font-bold text-white mb-16"
                >
                    Junte-se a <span className="text-primary">milhares</span> de criadores!
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-left"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-blue-600 p-[1px]">
                                    <div className="w-full h-full bg-surface rounded-full flex items-center justify-center text-sm font-bold text-white">
                                        {t.name.charAt(1).toUpperCase()}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                                    <p className="text-xs text-primary">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-sm text-zinc-400 italic leading-relaxed">&quot;{t.text}&quot;</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
