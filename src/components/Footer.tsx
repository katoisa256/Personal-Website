import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Kato Isa Omoding
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full Stack Developer based in Kampala, Uganda. Passionate about creating beautiful and functional web experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Github, href: 'https://github.com', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { Icon: Phone, href: 'https://wa.me/yourwhatsappnumber', label: 'WhatsApp' },
                { Icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
              ].map(({ Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-500 dark:hover:bg-purple-500 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {currentYear} Kato Isa Omoding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}