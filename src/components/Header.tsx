import Link from "next/link";
import { Zap } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-surface-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="p-2 bg-gradient-to-br from-primary to-blue-600 rounded-lg shadow-[0_0_15px_var(--color-primary-glow)]">
                            <Zap className="text-background fill-current w-6 h-6 group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-2xl font-display font-bold text-white tracking-tight">
                            Viralize <span className="text-primary italic">AI</span>
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {["Funcionalidades", "Conversores", "Planos", "FAQ"].map((link) => (
                            <Link
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors hover:glow-sm"
                            >
                                {link}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <Link href="/login" className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors">
                            Fazer login
                        </Link>
                        <Link
                            href="/signup"
                            className="bg-gradient-to-r from-primary to-blue-600 text-background px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_20px_var(--color-primary-glow)] hover:scale-105 active:scale-95 transition-all"
                        >
                            Criar meu Primeiro Viral
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
