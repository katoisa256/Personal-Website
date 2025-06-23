import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet';

const projects = [
  {
    title: "Rentify Application",
    description: "A website for a real estate company specializing in property rentals.",
    image: "/rentify.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveLink: "https://www.rentify.co.ug/home",
    githubLink: "#",
  },
  {
    title: "Camera Security App",
    description: "A comprehensive security application intended to keep people safe.",
    image: "/CameraSecurityApp.png",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    liveLink: "https://www.camerasecurityapp.info/",
    githubLink: "#",
  },
  {
    title: "DH Technologies Website",
    description: "A corporate website for DH Technologies showcasing services and solutions.",
    image: "/dh-technologies.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveLink: "https://dhtechnologies.it.com/",
    githubLink: "#",
  },
  {
    title: "Zoe Design Consult",
    description: "A website for a design consultancy firm specializing in interior and architectural design.",
    image: "/zoe-design.png",
    technologies: ["Next.js", "Contentful CMS", "GraphQL", "Vercel"],
    liveLink: "https://www.zoedesignconsult.org/",
    githubLink: "#",
  },
  {
    title: "Kasule Jacob Portfolio",
    description: "A personal portfolio website with modern design and animations.",
    image: "/KauleJacob.png",
    technologies: ["React", "Three.js", "GSAP", "Framer Motion"],
    liveLink: "https://kasulejacob.pro",
    githubLink: "#",
  },
  // {
  //   title: "Sozi Kraal Hotel Website",
  //   description: "An elegant hotel website with a booking system and virtual tours.",
  //   image: "/SoziKraalHotel.png",
  //   technologies: ["Next.js", "Stripe", "MongoDB", "Cloudinary"],
  //   liveLink: "https://sozikraalhotel.com",
  //   githubLink: "#",
  // },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            <ExternalLink size={20} />
            <span>Visit Platform</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects - Kato Isa Omoding</title>
        <meta
          name="description"
          content="Explore featured development projects by Kato Isa Omoding, including websites, applications, and platforms built with modern web technologies."
        />
      </Helmet>

      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
