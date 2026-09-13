import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-slate-100 dark:bg-[#0c2036]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
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
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
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
                { Icon: Github, href: 'https://github.com/KatoIsa256', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/kato-omoding-932972206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
                { Icon: Instagram, href: 'https://www.instagram.com/katoisa256/', label: 'Instagram' },
                { Icon: Phone, href: 'https://wa.me/+256705207718', label: 'WhatsApp' },
                { Icon: Mail, href: 'mailto:katoisa256@gmail.com', label: 'Email' },
              ].map(({ Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors"
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
