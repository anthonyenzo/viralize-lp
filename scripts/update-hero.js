const fs = require('fs');
let code = fs.readFileSync('c:\\\\antigravity\\\\ag_kit_01\\\\viralize-lp\\\\src\\\\components\\\\Hero.tsx', 'utf8');

const targetStr = `
                        <div 
                            className="relative z-10 w-full rounded-2xl border border-zinc-700/50 bg-surface/50 p-2 shadow-2xl transition-transform duration-700 hover:rotate-x-0"
                            style={{ 
                                transform: 'rotateX(15deg) translateY(-20px)',
                                transformStyle: 'preserve-3d',
                                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                            }}
                        >
                            <img 
                                src="/images/dashboard-preview.png" 
                                alt="Dashboard do App Viralize AI" 
                                className="w-full h-auto rounded-xl object-cover shadow-[0_0_50px_-12px_rgba(0,242,255,0.3)] transition-all duration-700"
                            />
                        </div>`;

const replacementStr = `
                        {/* Desktop Image */}
                        <div 
                            className="hidden md:block relative z-10 w-full rounded-2xl border border-zinc-700/50 bg-surface/50 p-2 shadow-2xl transition-transform duration-700 hover:rotate-x-0"
                            style={{ 
                                transform: 'rotateX(15deg) translateY(-20px)',
                                transformStyle: 'preserve-3d',
                                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                            }}
                        >
                            <img 
                                src="/images/dashboard-preview.png" 
                                alt="Dashboard do App Viralize AI" 
                                className="w-full h-auto rounded-xl object-cover shadow-[0_0_50px_-12px_rgba(0,242,255,0.3)] transition-all duration-700"
                            />
                        </div>

                        {/* Mobile Image (Sidebar Focus with 3D Diagonal) */}
                        <div 
                            className="block md:hidden relative z-10 w-full rounded-2xl border border-zinc-700/50 bg-surface/50 p-2 shadow-2xl transition-transform duration-700 origin-center"
                            style={{ 
                                transform: 'perspective(1500px) rotateX(20deg) rotateY(15deg) rotateZ(-5deg) translateY(-10px) scale(1.05)',
                                transformStyle: 'preserve-3d',
                                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                            }}
                        >
                            <img 
                                src="/images/dashboard-mobile.png" 
                                alt="Menu de Ferramentas Viralize AI" 
                                className="w-full h-auto rounded-xl object-cover shadow-[0_0_30px_-5px_rgba(0,242,255,0.2)] transition-all duration-700"
                            />
                        </div>`;

code = code.replace(targetStr, replacementStr);
fs.writeFileSync('c:\\\\antigravity\\\\ag_kit_01\\\\viralize-lp\\\\src\\\\components\\\\Hero.tsx', code);
console.log('Update done!');
