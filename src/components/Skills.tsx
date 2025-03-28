import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description: "Building responsive and interactive user interfaces with modern frameworks and tools."
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    description: "Creating robust and scalable server-side applications and APIs."
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "AWS", "CI/CD"],
    description: "Implementing efficient development workflows and deployment strategies."
  }
];

function FallbackSkillCard({ category, items, description }: {
  category: string;
  items: string[];
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold mb-4 text-purple-500">{category}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <FallbackSkillCard key={skill.category} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}