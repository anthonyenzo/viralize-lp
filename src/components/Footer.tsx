import Link from "next/link";
import { Instagram, Rocket } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-surface-border py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <Link href="/" className="flex items-center gap-2 mb-6">
                        <div className="p-1.5 bg-primary rounded-lg">
                            <Rocket className="text-black fill-current w-5 h-5" />
                        </div>
                        <span className="text-xl font-display font-bold text-white">Viralize AI</span>
                    </Link>
                    
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-md mx-auto mb-8">
                        Autoridade, Produtividade e Viralização. <br />A plataforma all-in-one para criadores de conteúdo. 🩵
                    </p>

                    <div className="flex gap-4">
                        <Link
                            href="#"
                            className="w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all"
                        >
                            <Instagram size={18} />
                        </Link>
                    </div>
                </div>

                <div className="pt-8 border-t border-surface-border flex justify-center items-center">
                    <p className="text-zinc-500 text-xs text-center cursor-default">
                        © 2026 Viralize AI. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
