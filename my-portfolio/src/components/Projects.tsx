import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "FitStart",
    description: "A comprehensive fitness platform connecting users with gyms through daily passes and membership cards.",
    tech: ["Node.js", "Express", "MongoDB", "WebSockets", "JWT"],
    features: ["Real-time check-ins", "QR pass redemption", "Gym partner management", "User authentication"],
    github: "https://github.com/yashnandwani/fitstart",
    live: "https://fitstart.com"
  },
  {
    name: "Personal Finance Tracker",
    description: "A web application for tracking personal finances, budgeting, and financial goal management.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    features: ["Budget planning", "Expense categorization", "Goal tracking", "Secure authentication"],
    github: "https://github.com/yashnandwani/finance-tracker",
    live: "https://finance-tracker.com"
  },
  {
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user management, product catalog, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    features: ["Product catalog", "Shopping cart", "Payment processing", "Order management"],
    github: "https://github.com/yashnandwani/ecommerce",
    live: "https://ecommerce-demo.com"
  }
];

const Projects: React.FC = () => (
  <div className="p-4 space-y-6">
    <motion.h2 
      className="text-2xl font-bold text-center glowy-text mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Projects
    </motion.h2>
    
    <div className="space-y-8">
      {projects.map((project, idx) => (
        <motion.div 
          key={idx} 
          className="card hover-lift glow-on-hover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
        >
          {/* Project Header */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-2 text-glow">{project.name}</h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>
          
          {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.span 
                  key={i}
                  className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (idx * 0.2) + (i * 0.1) }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Key Features</h4>
            <ul className="space-y-1">
              {project.features.map((feature, i) => (
                <motion.li 
                  key={i}
                  className="text-gray-300 text-sm flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: (idx * 0.2) + (i * 0.1) }}
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Links */}
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-4 py-2 glow-on-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Code
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-4 py-2 glow-on-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Projects; 