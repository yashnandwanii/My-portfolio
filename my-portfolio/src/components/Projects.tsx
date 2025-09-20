import React from "react";
import { motion } from "framer-motion";
import PageDivider from "./PageDivider";

const projects = [
  {
    name: "Meal-Monkey",
    description: "A food delivery application with seamless real-time order tracking, designed to handle 10+ concurrent users and ensure smooth, uninterrupted user experiences across platforms.",
    tech: ["Flutter", "Firebase", "NodeJs", "MongoDB", "Google Maps", "Razorpay"],
    features: [
      "Real-time order tracking for 10+ users",
      "Secure, scalable backend with NodeJs & MongoDB",
      "Robust user authentication and real-time data sync",
      "99.9% uptime infrastructure",
      "Revamped UI with Flutter and state management",
      "25% reduction in cart abandonment, 15% increase in conversions"
    ],
    period: "Feb 2025 – Jun 2025",
    github: "https://github.com/yashnandwanii/Meal-Monkey",
    live: "https://meal-monkey-demo.com"
  },
  {
    name: "Quizzler",
    description: "A scalable quiz platform for 10+ tech students with 10+ topic-wise quizzes covering DevOps, Kubernetes, and Networking.",
    tech: ["Flutter", "GETX", "Firebase", "Gemini", "REST API"],
    features: [
      "Dynamic quiz generation with Gemini LLM",
      "10+ topic-wise quizzes",
      "Real-time backend with Firebase Firestore & Auth",
      "Supports 100+ quiz attempts and user management",
      "80% reduction in manual curation via AI"
    ],
    period: "Nov 2024 – Jun 2025",
    github: "https://github.com/yashnandwanii/Quizzler",
    live: "https://quizzler-demo.com"
  },
  {
    name: "Task Management App",
    description: "A productivity app for managing tasks, deadlines, and team collaboration with offline support.",
    tech: ["Flutter", "Cubit", "SQLite", "Docker", "TypeScript"],
    features: [
      "Task creation, deadlines, and reminders",
      "Offline support with SQLite",
      "Team collaboration and status tracking",
      "Dockerized backend for easy deployment"
    ],
    period: "2025",
    github: "https://github.com/yashnandwanii/Task-Manager-App",
    live: "https://task-manager-demo.com"
  },
  {
    name: "News App",
    description: "A modern news application with real-time updates, personalized feeds, and push notifications.",
    tech: ["Flutter", "GetX", "Firebase", "NEWS API"],
    features: [
      "Personalized news feed",
      "Real-time updates and push notifications",
      "Seamless navigation with GetX",
      "Firebase backend for scalability and analytics"
    ],
    period: "2025",
    github: "https://github.com/yashnandwanii/news_app",
    live: "https://news-app-demo.com"
  },
  {
    name: "Threads Social Media App",
    description: "A social media platform for sharing threads, posts, and engaging with a vibrant community.",
    tech: ["Flutter", "GetX", "Supabase"],
    features: [
      "Threaded posts and real-time comments",
      "Supabase backend for instant data sync",
      "Modern UI with Flutter and GetX",
      "Community engagement features"
    ],
    period: "2025",
    github: "https://github.com/yashnandwanii/Threads",
    live: "https://threads-demo.com"
  },
  
];

const Projects: React.FC = () => (
  <div className="pb-32 pt-10 px-4 md:px-8 space-y-6">
    <PageDivider />
    <motion.h2 
      className="text-3xl font-bold text-center glowy-text mb-12 mt-2"
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
            <p className="text-white leading-relaxed text-shadow">{project.description}</p>
          </div>
          
          {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.span 
                  key={i}
                  className="px-3 py-1 bg-gray-700/50 text-indigo-100 text-xs rounded-full border border-gray-600 text-shadow"
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
                  className="text-white text-sm flex items-center text-shadow"
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