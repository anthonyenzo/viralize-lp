const fs = require('fs');
let code = fs.readFileSync('c:\\\\antigravity\\\\ag_kit_01\\\\viralize-lp\\\\src\\\\components\\\\Hero.tsx', 'utf8');

const target1 = /className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-background font-bold text-lg hover:bg-cyan-400 hover:shadow-\[0_0_30px_var\(--color-primary-glow\)\] transition-all flex items-center justify-center gap-2"/;
const rep1 = 'className="w-[85%] max-w-[280px] sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-primary text-background font-bold text-base sm:text-lg hover:bg-cyan-400 hover:shadow-[0_0_30px_var(--color-primary-glow)] transition-all flex items-center justify-center gap-2 mx-auto"';

const target2 = /className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface border border-surface-border text-white font-semibold text-lg hover:bg-surface-hover hover:border-zinc-700 transition-all flex items-center justify-center gap-2"/;
const rep2 = 'className="w-[85%] max-w-[280px] sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-surface border border-surface-border text-white font-semibold text-base sm:text-lg hover:bg-surface-hover hover:border-zinc-700 transition-all flex items-center justify-center gap-2 mx-auto"';

if (target1.test(code) && target2.test(code)) {
    code = code.replace(target1, rep1).replace(target2, rep2);
    fs.writeFileSync('c:\\\\antigravity\\\\ag_kit_01\\\\viralize-lp\\\\src\\\\components\\\\Hero.tsx', code);
    console.log('Update done!');
} else {
    console.log('Target regex not found.');
}
