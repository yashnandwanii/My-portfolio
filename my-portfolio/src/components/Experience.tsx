import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "FitStart",
    role: "SE Intern",
    period: "Jun 2025 – Present",
    location: "Remote",
    highlights: [
      "Led backend development for the FitStart platform, architecting scalable services to handle 5K+ daily user authentications, pass validations, and gym partner interactions.",
      "Engineered robust APIs and business logic for GymCard, FitCard, and daily pass systems, driving a 55% increase in user retention and boosting platform engagement.",
      "Integrated real-time check-in and QR pass redemption features using WebSockets and secure token validation, reducing gym entry latency by 40%.",
      "Collaborated cross-functionally to onboard 100+ gym partners during MVP launch, aligning backend workflows with business logic and reducing partner integration time by 60%."
    ]
  },
  {
    company: "SmartBridge",
    role: "SDE Intern",
    period: "Feb 2025 – May 2025",
    location: "Remote",
    highlights: [
      "Designed and implemented a scalable RESTful backend for a Personal Finance Tracker using Node.js and Express, handling budget planning, goal tracking, and expense categorization.",
      "Built and optimized MongoDB schemas to support efficient querying and storage for 10K+ user records, improving data retrieval speed by 45%.",
      "Established secure access controls using JWT-based authentication and middleware, ensuring data protection and compliance with best practices.",
      "Collaborated in an agile team of 6, contributing to sprint planning, version control (Git), and CI/CD workflows, reducing deployment time by 30%."
    ]
  }
];

const Experience: React.FC = () => (
  <div className="p-4 space-y-6">
    <motion.h2 
      className="text-2xl font-bold text-center glowy-text mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Experience
    </motion.h2>
    
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <motion.div 
          key={idx} 
          className="card hover-lift glow-on-hover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="mb-3 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-1 text-glow">{exp.company}</h3>
              <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                {exp.role}
              </span>
            </div>
            <div className="text-sm text-gray-400 md:text-right">
              <div className="font-medium">{exp.period}</div>
              <div className="text-gray-500">{exp.location}</div>
            </div>
          </div>
          
          {/* Highlights */}
          <ul className="space-y-3">
            {exp.highlights.map((highlight, i) => (
              <motion.li 
                key={i}
                className="text-gray-300 leading-relaxed flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: (idx * 0.2) + (i * 0.1) }}
              >
                <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {highlight}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Experience; 