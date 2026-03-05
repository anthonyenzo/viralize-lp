import Link from "next/link";
import { Instagram, Twitter, Youtube, Zap } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-surface-border py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="p-1.5 bg-primary rounded-lg">
                                <Zap className="text-black fill-current w-5 h-5" />
                            </div>
                            <span className="text-xl font-display font-bold text-white">Viralize AI</span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            A ferramenta definitiva para criadores que buscam escala, retenção e autoridade no digital através da Inteligência Artificial.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Produto</h4>
                        <ul className="space-y-4">
                            {["Funcionalidades", "Conversores", "Planos", "API"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-zinc-400 hover:text-primary transition-colors text-sm">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-4">
                            {["Termos de Uso", "Privacidade", "Cookies", "Segurança"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-zinc-400 hover:text-primary transition-colors text-sm">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Social</h4>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Youtube].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-surface-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-xs">
                        © 2026 Viralize AI. Todos os direitos reservados.
                    </p>
                    <p className="text-zinc-600 text-[10px] uppercase tracking-tighter">
                        Feito com inteligência e focado em escala.
                    </p>
                </div>
            </div>
        </footer>
    );
}
