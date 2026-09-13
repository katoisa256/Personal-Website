import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const socialLinks = [
  { Icon: Github, href: 'https://github.com/KatoIsa256', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/kato-omoding-932972206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://www.instagram.com/katoisa256/', label: 'Instagram' },
  { Icon: Phone, href: 'https://wa.me/+256705207718', label: 'WhatsApp' },
  { Icon: Mail, href: 'mailto:katoisa256@gmail.com', label: 'Email' },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-[#071525] dark:text-white">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:pb-10">
        <div className="order-2 lg:order-1">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
            <span className="h-px w-10 bg-blue-700 dark:bg-blue-300" /> Full Stack Developer
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }} className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Building digital experiences that <span className="text-blue-700 dark:text-blue-300">matter.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2 }} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
            I&apos;m Kato Isa Omoding, a full stack developer from Kampala, Uganda. I turn ambitious ideas into polished, high-performing web products.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.3 }} className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-blue-800">
              Explore my work <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a href="/Kato_CV.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:-translate-y-1 hover:border-blue-700 hover:text-blue-700 dark:border-slate-600 dark:bg-transparent dark:text-white dark:hover:border-blue-300 dark:hover:text-blue-300">View CV</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, delay: 0.5 }} className="mt-10 flex items-center gap-4">
            <span className="text-sm text-slate-500 dark:text-slate-400">Find me on</span>
            <div className="flex gap-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-700 hover:bg-blue-700 hover:text-white dark:border-slate-700 dark:bg-[#0c2036] dark:text-slate-200 dark:hover:border-blue-400 dark:hover:bg-blue-700">
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.92, x: 32 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }} className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/20 lg:aspect-[5/6]">
            <img src="/2.png" alt="Kato Isa Omoding" className="h-full w-full object-cover object-center" />
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl dark:border-slate-700 dark:bg-[#0c2036] sm:-left-8">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Creating</p>
            <p className="mt-1 font-semibold">Websites, web apps &amp; mobile applications</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
