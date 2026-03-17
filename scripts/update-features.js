const fs = require('fs');
let code = fs.readFileSync('c:\\\\antigravity\\\\ag_kit_01\\\\viralize-lp\\\\src\\\\components\\\\Features.tsx', 'utf8');

// Global Animations Update
code = code.replace(/opacity: 0, x: -30/g, 'opacity: 0, y: 30');
code = code.replace(/opacity: 0, x: 30/g, 'opacity: 0, y: 30');
code = code.replace(/opacity: 1, x: 0/g, 'opacity: 1, y: 0');
code = code.replace(/opacity: 0, scale: 0.95/g, 'opacity: 0, y: 30');
code = code.replace(/opacity: 1, scale: 1/g, 'opacity: 1, y: 0');
code = code.replace(/viewport=\{\{ once: true \}\}/g, 'viewport={{ once: true, margin: "-100px" }}');
code = code.replace(/transition=\{\{ duration: 0\.8 \}\}/g, 'transition={{ duration: 0.6, ease: "easeOut" }}');

// Post Twitter Buttons
code = code.replace(
    'className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold hover:bg-primary hover:text-background transition-all"',
    'className="hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold hover:bg-primary hover:text-background transition-all w-fit"'
);
code = code.replace(
    /<\/div>\s*<\/motion\.div>\s*<\/div>\s*\{\/\* Feature 2 \*\/\}/,
    `</div>
                        {/* Mobile Button - Post Twitter */}
                        <div className="mt-8 flex justify-center lg:hidden">
                            <Link href="/signup" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold text-lg hover:bg-primary hover:text-background transition-all">
                                Testar agora
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Feature 2 */}`
);

// Criador de Reels Buttons
code = code.replace(
    'className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 font-semibold hover:bg-teal-500 hover:border-teal-500 hover:text-black transition-all"',
    'className="hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 font-semibold hover:bg-teal-500 hover:border-teal-500 hover:text-black transition-all w-fit"'
);
code = code.replace(
    /<\/div>\s*<\/motion\.div>\s*<\/div>\s*\{\/\* Feature 3 \*\/\}/,
    `</div>
                        {/* Mobile Button - Criador de Reels */}
                        <div className="mt-8 flex justify-center lg:hidden">
                            <Link href="/signup" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 font-bold text-lg hover:bg-teal-500 hover:border-teal-500 hover:text-black transition-all">
                                Criar Reel agora
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Feature 3 */}`
);

// Conversores Buttons
code = code.replace(
    /<\/ul>\s*<\/motion\.div>/,
    `</ul>
                        <Link
                            href="/signup"
                            className="hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-semibold hover:bg-purple-500 hover:border-purple-500 hover:text-white transition-all w-fit"
                        >
                            Converter agora
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>`
);
code = code.replace(
    /Analisar\s*<\/button>/g,
    `Converter
                                    </button>`
);
code = code.replace(
    /<\/div>\s*<\/motion\.div>\s*<\/div>\s*<\/div>\s*<\/section>/,
    `</div>
                        {/* Mobile Button - Conversores */}
                        <div className="mt-8 flex justify-center lg:hidden">
                            <Link href="/signup" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold text-lg hover:bg-purple-500 hover:border-purple-500 hover:text-white transition-all">
                                Converter agora
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>`
);

fs.writeFileSync('c:\\\\antigravity\\\\ag_kit_01\\\\viralize-lp\\\\src\\\\components\\\\Features.tsx', code);
console.log('Update done!');
