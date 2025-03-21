import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"
        >
          Kato Isa Omoding
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300"
        >
          Full Stack Developer from Kampala, Uganda
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { Icon: Github, href: 'https://github.com', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
            { Icon: Phone, href: 'https://wa.me/yourwhatsappnumber', label: 'WhatsApp' },
            { Icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-500 dark:hover:bg-purple-500 transition-colors group"
            >
              <Icon size={24} />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}