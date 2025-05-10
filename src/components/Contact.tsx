import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export function Contact() {
  return (
    <section id='contact' className="min-h-screen py-20 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your message here..."
                />
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg hover:shadow-xl transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center space-y-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-8 rounded-xl"
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-500/20 rounded-full">
                <PhoneIcon className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+1 (256) 750-356-778</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/20 rounded-full">
                <EnvelopeIcon className="w-8 h-8 text-cyan-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">kato.isa@tgnsystems.org</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-500/20 rounded-full">
                <MapPinIcon className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Kampala, Uganda</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-6 justify-center">
              {/* Add social media icons here */}
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Twitter SVG path */}
                </svg>
              </a>
              {/* Add more social links */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}