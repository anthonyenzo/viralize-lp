const fs = require('fs');
let heroCode = fs.readFileSync('c:\\\\antigravity\\\\ag_kit_01\\\\viralize-lp\\\\src\\\\components\\\\Hero.tsx', 'utf8');

const oldHeroBlock = `{/* App Dashboard 3D Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-full px-4 perspective-[2000px] mb-8"
                    >
                        {/* Glow effect behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none" />
                        
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
                        </div>
                    </motion.div>`;

const newHeroBlock = `{/* App Dashboard 3D Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-full px-4 perspective-[2000px] mb-8"
                    >
                        {/* Glow effect behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none" />
                        
                        <div 
                            className="preview-3d-tilt relative z-10 w-full rounded-xl sm:rounded-2xl border border-zinc-700/50 bg-surface/50 p-1 sm:p-2 shadow-2xl transition-all duration-700 hover:!transform-none"
                        >
                            <div className="w-full h-[280px] sm:h-[400px] md:h-auto overflow-hidden rounded-lg sm:rounded-xl bg-zinc-900 border border-zinc-800">
                                <img 
                                    src="/images/dashboard-preview.png" 
                                    alt="Dashboard do App Viralize AI" 
                                    className="w-full h-full object-cover object-left-top md:object-center transform scale-[2.2] sm:scale-[1.8] md:scale-100 origin-top-left shadow-[0_0_50px_-12px_rgba(0,242,255,0.3)] transition-all duration-700"
                                />
                            </div>
                        </div>
                    </motion.div>`;

heroCode = heroCode.replace(oldHeroBlock, newHeroBlock);
fs.writeFileSync('c:\\\\antigravity\\\\ag_kit_01\\\\viralize-lp\\\\src\\\\components\\\\Hero.tsx', heroCode);


let cssCode = fs.readFileSync('c:\\\\antigravity\\\\ag_kit_01\\\\viralize-lp\\\\src\\\\app\\\\globals.css', 'utf8');

const cssInjection = \`
@layer utilities {
  .preview-3d-tilt {
    transform: rotateX(20deg) rotateY(15deg) rotateZ(-2deg) translateY(-10px) scale(1.05);
    transform-style: preserve-3d;
    mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  }

  @media (min-width: 768px) {
    .preview-3d-tilt {
      transform: rotateX(15deg) translateY(-20px) scale(1.0);
      mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
      -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
    }
  }
}
\`;

if (!cssCode.includes('.preview-3d-tilt')) {
    cssCode += cssInjection;
    fs.writeFileSync('c:\\\\antigravity\\\\ag_kit_01\\\\viralize-lp\\\\src\\\\app\\\\globals.css', cssCode);
}

console.log('Update done!');
