import Link from "next/link";
import { Rocket } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-surface-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
                        <div className="p-1.5 sm:p-2 bg-gradient-to-br from-primary to-blue-600 rounded-lg shadow-[0_0_15px_var(--color-primary-glow)]">
                            <Rocket className="text-background fill-current w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                            Viralize <span className="text-primary italic">AI</span>
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {[
                            { label: "Funcionalidades", href: "#features" },
                            { label: "Planos", href: "#pricing" },
                            { label: "FAQ", href: "#faq" }
                        ].map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors hover:glow-sm"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3 sm:gap-6">
                        <Link href="https://app.viralizeaimachine.com/login" className="hidden sm:block text-sm font-semibold text-zinc-300 hover:text-white transition-colors">
                            Fazer login
                        </Link>
                        <Link
                            href="https://app.viralizeaimachine.com/registrar"
                            className="bg-gradient-to-r from-primary to-blue-600 text-background px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm hover:shadow-[0_0_20px_var(--color-primary-glow)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
                        >
                            <span className="hidden sm:inline">Criar meu Primeiro Viral</span>
                            <span className="sm:hidden">Começar agora</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
