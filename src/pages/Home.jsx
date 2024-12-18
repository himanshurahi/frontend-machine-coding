import { motion } from "framer-motion";
import { ThemeToggle } from "../components/ThemeToggle";
import { ExternalLink, Github } from "lucide-react";

export const Home = () => {
  const projects = [
    {
      title: "Pagination Component",
      description:
        "Effortless navigation through large datasets using React pagination.",
      demo: "/pagination",
      github: "https://github.com/yourusername/react-pagination",
      tags: ["React", "CSS", "pagination"],
    },
    {
      title: "Memory Game",
      description:
        "A fun and interactive memory-matching game built with React.",
      demo: "/memory-game",
      github: "https://github.com/yourusername/memory-game",
      tags: ["React", "Game"],
    },

    {
      title: "Poll Widget",
      description:
        "A customizable React widget for creating and managing polls.",
      demo: "/poll-widget",
      github: "https://github.com/yourusername/poll-widget",
      tags: ["React", "Widget"],
    },
    {
      title: "Grid Lights",
      description:
        "A customizable React widget for creating and managing polls.",
      demo: "/grid-lights",
      github: "https://github.com/yourusername/grid-lights",
      tags: ["React", "Widget"],
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold"
          >
            Frontend Machine Coding Projects
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body">
                <h2 className="card-title text-2xl mb-2">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="badge badge-primary badge-outline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm gap-2"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
