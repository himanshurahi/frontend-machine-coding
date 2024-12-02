import { motion } from "framer-motion";
import { ThemeToggle } from "../components/ThemeToggle";
import { ExternalLink, Github } from "lucide-react";

export const Home = () => {
  const projects = [
    {
      title: "React Pagination",
      description:
        "Implementation of infinite scrolling with image lazy loading",
      demo: "/pagination",
      github: "https://github.com/yourusername/infinite-gallery",
      tags: ["React", "Intersection Observer", "Unsplash API"],
    },
    {
      title: "Infinite Image Gallery",
      description:
        "Implementation of infinite scrolling with image lazy loading",
      demo: "https://example.com/infinite-gallery",
      github: "https://github.com/yourusername/infinite-gallery",
      tags: ["React", "Intersection Observer", "Unsplash API"],
    },
    {
      title: "File Explorer",
      description: "Interactive file system explorer with tree view",
      demo: "https://example.com/file-explorer",
      github: "https://github.com/yourusername/file-explorer",
      tags: ["React", "Recursion", "Tree Data Structure"],
    },
    {
      title: "Kanban Board",
      description: "Drag and drop task management board",
      demo: "https://example.com/kanban",
      github: "https://github.com/yourusername/kanban",
      tags: ["React DnD", "Redux", "TypeScript"],
    },
    {
      title: "Auto-complete Search",
      description: "Search with debouncing and suggestions",
      demo: "https://example.com/autocomplete",
      github: "https://github.com/yourusername/autocomplete",
      tags: ["React", "Debouncing", "Trie"],
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
