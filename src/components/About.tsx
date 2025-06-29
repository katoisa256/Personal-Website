import { motion } from 'framer-motion';

export function About() {
  return (
    <>
      <section id="about" className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <img
                  src="/2.png"
                  alt="Profile"
                  className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-purple-500 shadow-lg"
                />
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                About Me
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Hello! I'm Kato Isa Omoding, a passionate Full Stack Developer based in Kampala, Uganda.
                  I specialize in creating beautiful, functional, and user-friendly web applications.
                </p>
                <p>
                  With a deep understanding of both front-end and back-end technologies,
                  I bring ideas to life through clean code and intuitive design.
                  My goal is to build digital experiences that make a difference.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing my knowledge with
                  the developer community in Kampala.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
