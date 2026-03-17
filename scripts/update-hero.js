const fs = require('fs');
let code = fs.readFileSync('c:\\\\antigravity\\\\ag_kit_01\\\\viralize-lp\\\\src\\\\components\\\\Hero.tsx', 'utf8');

const targetRegex = /<div \s*className="preview-3d-tilt relative z-10 w-full rounded-xl sm:rounded-2xl border border-zinc-700\/50 bg-surface\/50 p-1 sm:p-2 shadow-2xl transition-all duration-700 hover:!transform-none"\s*>[\s\S]*?<\/div>\s*<\/div>/;

const replacementStr = `{/* Desktop Image */}
                        <div 
                            className="hidden md:block relative z-10 w-full rounded-xl sm:rounded-2xl border border-zinc-700/50 bg-surface/50 p-1 sm:p-2 shadow-2xl preview-3d-tilt transition-all duration-700 hover:!transform-none"
                        >
                            <img 
                                src="/images/dashboard-preview.png" 
                                alt="Dashboard do App Viralize AI" 
                                className="w-full h-auto rounded-lg sm:rounded-xl object-cover shadow-[0_0_50px_-12px_rgba(0,242,255,0.3)] transition-all duration-700"
                            />
                        </div>

                        {/* Mobile Image (Sidebar Focus with 3D Diagonal) */}
                        <div 
                            className="block md:hidden relative z-10 w-[110%] -ml-[5%] rounded-2xl border border-zinc-700/50 bg-surface/80 p-1.5 shadow-2xl transition-transform duration-700 origin-center"
                            style={{ 
                                transform: 'perspective(1200px) rotateX(20deg) rotateY(12deg) rotateZ(-4deg) translateY(0px) scale(1.02)',
                                transformStyle: 'preserve-3d',
                                maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
                            }}
                        >
                            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow-[0_0_30px_-5px_rgba(0,242,255,0.2)] bg-[#0A0A0B]">
                                <img 
                                    src="/images/dashboard-preview.png" 
                                    alt="Menu de Ferramentas Viralize AI" 
                                    className="absolute top-0 left-0 w-[250%] sm:w-[180%] max-w-none h-auto object-left-top"
                                    style={{ objectPosition: '0 0' }}
                                />
                            </div>
                        </div>`;

if (targetRegex.test(code)) {
    code = code.replace(targetRegex, replacementStr);
    fs.writeFileSync('c:\\\\antigravity\\\\ag_kit_01\\\\viralize-lp\\\\src\\\\components\\\\Hero.tsx', code);
    console.log('Update done!');
} else {
    console.log('Target regex not found.');
}
