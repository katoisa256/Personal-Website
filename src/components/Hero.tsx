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
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_18%,rgba(168,85,247,0.28),transparent_28%),radial-gradient(circle_at_78%_25%,rgba(6,182,212,0.22),transparent_30%),linear-gradient(135deg,#020617_0%,#111827_52%,#0f172a_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:3.5rem_3.5rem] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:pb-10">
        <div className="order-2 lg:order-1">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            <span className="h-px w-10 bg-cyan-300" /> Full Stack Developer
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }} className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Building digital experiences that <span className="bg-gradient-to-r from-purple-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">matter.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2 }} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
            I&apos;m Kato Isa Omoding, a full stack developer from Kampala, Uganda. I turn ambitious ideas into polished, high-performing web products.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.3 }} className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:-translate-y-1 hover:shadow-cyan-500/25">
              Explore my work <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a href="/Kato_CV.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-white/10">View CV</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, delay: 0.5 }} className="mt-10 flex items-center gap-4">
            <span className="text-sm text-slate-400">Find me on</span>
            <div className="flex gap-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500 hover:text-white">
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.92, x: 32 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }} className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-tr from-purple-600/70 via-cyan-400/30 to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-2xl shadow-black/50 lg:aspect-[5/6]">
            <img src="/2.png" alt="Kato Isa Omoding" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Based in</p>
              <p className="mt-1 text-2xl font-semibold">Kampala, Uganda</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/15 bg-slate-900/80 px-5 py-4 shadow-xl backdrop-blur-md sm:-left-8">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Creating</p>
            <p className="mt-1 font-semibold text-white">Websites &amp; web apps</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
