"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactCTA() {
    const phoneNumber = "5538984020274";
    const message = encodeURIComponent("Olá! Vim pela página da plataforma Viralize AI Machine e gostaria de saber mais.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <section className="py-24 relative overflow-hidden bg-surface">
            {/* Soft Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-12 md:p-16 rounded-[40px] border border-surface-border bg-background/50 backdrop-blur-xl text-center shadow-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                            Ainda restou alguma <span className="text-primary">dúvida?</span>
                        </h2>
                        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Não deixe que uma pergunta te impeça de viralizar. Clique abaixo e fale diretamente com o nosso time especializado pelo WhatsApp.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all group"
                        >
                            <MessageCircle className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" />
                            Entre em contato com a gente!
                        </a>
                    </motion.div>
                    
                    <p className="mt-8 text-sm text-zinc-500 font-medium tracking-wide uppercase">
                        Resposta rápida em horário comercial
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
