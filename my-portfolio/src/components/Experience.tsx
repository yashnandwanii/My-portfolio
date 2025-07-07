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
      "Built scalable backend handling 5K+ daily authentications, boosting user retention by 55% via GymCard and FitCard.",
      "Implemented real-time QR redemption with WebSockets, cutting gym entry latency by 40%.",
      "Onboarded 100+ gym partners during MVP, reducing setup time by 60%."
    ]
  },
  {
    company: "SmartBridge",
    role: "SDE Intern",
    period: "Feb 2025 – May 2025",
    location: "Remote",
    highlights: [
      "Developed REST backend for Personal Finance Tracker (Node/Express), supporting 10K+ users with 45% faster data retrieval.",
      "Added JWT authentication and secure middleware for robust data protection.",
      "Collaborated in agile team, managing Git workflows and CI/CD, reducing deployment time by 30%."
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
      
      <div className="w-full max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
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
              <ul className="space-y-3 pl-2 md:pl-4">
                {exp.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md flex-shrink-0"></span>
                    <span className="text-white leading-relaxed text-shadow">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            {/* Minimal, gradient divider between experiences */}
            {idx < experiences.length - 1 && (
              <motion.div
                className="w-full flex justify-center my-8"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 + idx * 0.2, type: 'spring' }}
                style={{ originX: 0.5 }}
              >
                <div
                  className="h-px w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Experience; 