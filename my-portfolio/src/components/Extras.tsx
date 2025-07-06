import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "LeetCode Master",
    description: "Solved 4000+ problems with consistent performance",
    icon: "🏆",
    stats: "4000+ Problems"
  },
  {
    title: "Hackathon Winner",
    description: "Won multiple hackathons and coding competitions",
    icon: "🚀",
    stats: "5+ Wins"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to various open source projects",
    icon: "🌟",
    stats: "10+ Repositories"
  }
];

const interests = [
  {
    category: "Technology",
    items: ["Machine Learning", "Blockchain", "Cloud Computing", "DevOps"]
  },
  {
    category: "Hobbies",
    items: ["Reading Tech Blogs", "Playing Chess", "Photography", "Traveling"]
  },
  {
    category: "Learning",
    items: ["System Design", "Data Science", "Mobile Development", "UI/UX Design"]
  }
];

const Extras: React.FC = () => (
  <div className="p-4 space-y-8">
    <motion.h2 
      className="text-2xl font-bold text-center glowy-text mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Achievements & More
    </motion.h2>
    
    {/* Achievements */}
    <div className="space-y-6">
      <motion.h3 
        className="text-xl font-semibold text-center text-white text-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Notable Achievements
      </motion.h3>
      
      <div className="grid gap-6">
        {achievements.map((achievement, idx) => (
          <motion.div 
            key={idx} 
            className="card hover-lift glow-on-hover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + (idx * 0.2) }}
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{achievement.icon}</div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-1 text-glow">{achievement.title}</h4>
                <p className="text-white text-sm mb-2 text-shadow">{achievement.description}</p>
                <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {achievement.stats}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    {/* Interests */}
    <div className="space-y-6">
      <motion.h3 
        className="text-xl font-semibold text-center text-white text-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Interests & Hobbies
      </motion.h3>
      
      <div className="grid gap-6">
        {interests.map((interest, idx) => (
          <motion.div 
            key={idx} 
            className="card hover-lift glow-on-hover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 + (idx * 0.2) }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 text-center text-glow">
              {interest.category}
            </h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {interest.items.map((item, itemIdx) => (
                <motion.span
                  key={itemIdx}
                  className="px-4 py-2 bg-gray-700/50 text-indigo-100 text-sm rounded-full border border-gray-600 hover:border-indigo-500 transition-colors duration-200 glow-on-hover text-shadow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + (idx * 0.2) + (itemIdx * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    {/* Contact Info */}
    <motion.div 
      className="card hover-lift glow-on-hover text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.8 }}
    >
      <h3 className="text-xl font-semibold text-white mb-4 text-glow">Get In Touch</h3>
      <p className="text-white mb-4 text-shadow">
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
      </p>
      <div className="flex justify-center space-x-4">
        <motion.a
          href="mailto:yashnandwani47@gmail.com"
          className="btn-primary glow-on-hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Email Me
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yash-nandwani"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary glow-on-hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LinkedIn
        </motion.a>
      </div>
    </motion.div>
  </div>
);

export default Extras; 