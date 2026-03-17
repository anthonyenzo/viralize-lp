"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, Play, Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
    return (
        <section id="features" className="pt-12 pb-24 bg-surface border-y border-surface-border relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Feature 1 */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                            <Quote size={16} />
                            <span className="text-sm font-medium">Post Twitter</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            Posts visuais que retêm a atenção.
                        </h2>
                        <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                            Crie posts no formato mais consumido do momento. Adicione sua foto, @usuário, selo de verificado e gere frases de efeito prontas para o feed ou stories com estética nativa e aparência de conteúdo real, não de anúncio.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {["Formatos otimizados para Instagram e TikTok", "Gerações Ilimitadas", "Configurações de Aparência Exclusivas"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300">
                                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/signup"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold hover:bg-primary hover:text-background transition-all"
                        >
                            Testar agora
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl transform scale-95" />
                        <div className="relative bg-background border border-surface-border rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden group">
                            {/* Mockup UI */}
                            <div className="flex items-center justify-between border-b border-surface-border pb-4 mb-4">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                                </div>
                                <div className="text-xs text-zinc-500 font-mono">viralize-editor</div>
                            </div>
                            <div className="bg-surface rounded-xl p-6 border border-surface-border text-center shadow-inner relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl -mr-16 -mt-16 pointer-events-none" />
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 p-0.5">
                                        <div className="w-full h-full bg-background rounded-full border-2 border-background" />
                                    </div>
                                    <div className="text-left">
                                        <div className="flex items-center gap-1">
                                            <span className="font-bold text-white text-sm">Seu Nome</span>
                                            <svg className="w-4 h-4 text-primary fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                        </div>
                                        <span className="text-xs text-zinc-500">@usuario</span>
                                    </div>
                                </div>
                                <p className="text-lg sm:text-xl text-white font-medium text-left leading-relaxed mb-4">
                                    &quot;O segredo do conteúdo viral não é a edição perfeita, é a retenção nos primeiros 3 segundos.&quot;
                                </p>
                                <div className="text-left text-primary text-sm font-medium">10:42 PM · 15 Mar 2026</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 mb-24 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-6">
                            <Play size={16} />
                            <span className="text-sm font-medium">Criador de Reels & Legendas</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            Deixe a IA criar seus vídeos.
                        </h2>
                        <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                            Faça upload do seu vídeo e deixe nossa Inteligência Artificial analisar o contexto para gerar legendas magnéticas, cortar silêncios e montar seu Reel automaticamente.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {["Transcrição ultra precisa em PT-BR", "Identificação de palavras-chave", "Animações dinâmicas de texto"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300">
                                    <CheckCircle2 className="text-teal-400 w-5 h-5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/signup"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 font-semibold hover:bg-teal-500 hover:border-teal-500 hover:text-black transition-all"
                        >
                            Criar Reel agora
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/20 to-transparent rounded-3xl blur-2xl transform scale-95" />
                        <div className="relative bg-background border border-surface-border rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden group">
                            {/* Mockup UI - AI Workflow */}
                            <div className="flex items-center justify-between border-b border-surface-border pb-4 mb-8">
                                <span className="text-sm text-zinc-400 font-medium">AI Reels Workflow</span>
                                <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-md">Magic Mode</span>
                            </div>

                            <div className="space-y-6 relative">
                                {/* Connection Line */}
                                <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent hidden sm:block" />

                                {/* Step 1 */}
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-teal-500/5">
                                        <Play className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div className="flex-1 bg-surface/50 border border-surface-border p-3 rounded-xl">
                                        <div className="text-xs text-teal-400 font-bold mb-1 uppercase tracking-wider">Passo 1</div>
                                        <div className="text-sm text-white font-medium">Upload do Conteúdo</div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0 shadow-lg shadow-teal-500/10">
                                        <Quote className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div className="flex-1 bg-teal-500/5 border border-teal-500/20 p-3 rounded-xl ring-1 ring-teal-500/20">
                                        <div className="text-xs text-teal-400 font-bold mb-1 uppercase tracking-wider">Passo 2</div>
                                        <div className="text-sm text-white font-medium">IA Gera Legendas e Cortes</div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex items-center gap-4 relative z-10 scale-105 transform origin-left">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shrink-0 shadow-xl shadow-teal-500/20">
                                        <CheckCircle2 className="w-6 h-6 text-black" />
                                    </div>
                                    <div className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-xl shadow-lg">
                                        <div className="text-xs text-teal-100 font-bold mb-1 uppercase tracking-wider">Resultado</div>
                                        <div className="text-sm text-black font-bold">Vídeo Viral Pronto!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                            <Download size={16} />
                            <span className="text-sm font-medium">Conversores Premium</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            Baixe e reaproveite qualquer conteúdo.
                        </h2>
                        <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                            Converta e baixe vídeos do YouTube (MP4/MP3), Reels do Instagram e vídeos do TikTok em alta qualidade e sem marca d&apos;água. O conversor mais rápido e intuitivo.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {["Downloads em 720p e 1080p", "Extração de MP3 em 320kbps", "Sem marca d'água"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300">
                                    <CheckCircle2 className="text-purple-400 w-5 h-5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-3xl blur-2xl transform scale-95" />
                        <div className="relative bg-background border border-surface-border rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden group">
                            {/* Mockup UI - Downloader */}
                            <div className="bg-surface rounded-xl p-4 sm:p-6 border border-surface-border">
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                                    <div className="flex-1 h-12 bg-background border border-surface-border rounded-lg flex items-center px-4 overflow-hidden">
                                        <span className="text-zinc-500 truncate text-sm">https://www.youtube.com/watch?v=dQw4w9WgXcQ</span>
                                    </div>
                                    <button className="h-12 px-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                                        Analisar
                                    </button>
                                </div>

                                <div className="p-4 border border-surface-border bg-background rounded-lg flex flex-col sm:flex-row items-center gap-4">
                                    <div className="w-full sm:w-16 h-40 sm:h-24 bg-zinc-800 rounded flex items-center justify-center">
                                        <Play className="text-zinc-600 w-8 h-8" />
                                    </div>
                                    <div className="flex-1 text-center sm:text-left">
                                        <div className="h-4 w-3/4 bg-zinc-800 rounded mb-2 mx-auto sm:mx-0" />
                                        <div className="h-3 w-1/2 bg-zinc-800 rounded mb-4 mx-auto sm:mx-0" />
                                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                            <button className="px-3 py-1.5 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded hover:bg-primary/20 transition-colors flex items-center gap-1">
                                                <Download size={12} /> MP4 1080p
                                            </button>
                                            <button className="px-3 py-1.5 text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded hover:bg-purple-500/20 transition-colors flex items-center gap-1">
                                                <Download size={12} /> MP3 Audio
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
