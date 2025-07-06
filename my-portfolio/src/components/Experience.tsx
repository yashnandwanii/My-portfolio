import React from "react";
import { motion } from "framer-motion";
import PageDivider from "./PageDivider";

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

const Experience: React.FC = () => {
  return (
    <div className="relative pb-10 pt-10 px-4 md:px-8 flex flex-col items-center min-h-full">
      <PageDivider />
      <motion.h2 
        className="text-3xl font-bold text-center glowy-text mb-12 mt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      
      <div className="w-full max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="group"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="glass bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold glowy-text mb-2 group-hover:text-indigo-300 transition-colors">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                      {exp.role}
                    </span>
                    <span className="text-indigo-200 text-sm font-medium">
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-indigo-100 text-lg font-medium">
                    {exp.period}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {exp.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-white leading-relaxed text-shadow">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 