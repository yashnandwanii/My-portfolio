import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Vellore Institute of Technology",
    period: "2022 - 2026",
    location: "Vellore, Tamil Nadu",
    gpa: "8.5/10",
    highlights: [
      "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks",
      "Active member of coding clubs and hackathon communities",
      "Participated in various technical workshops and seminars"
    ]
  }
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credential: "AWS-CCP-123456"
  },
  {
    name: "Google Cloud Platform Fundamentals",
    issuer: "Google Cloud",
    date: "2024",
    credential: "GCP-FUND-789012"
  }
];

const Education: React.FC = () => (
  <div className="p-4 space-y-8">
    <motion.h2 
      className="text-2xl font-bold text-center glowy-text mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Education
    </motion.h2>
    
    {/* Education */}
    <div className="space-y-6">
      {education.map((edu, idx) => (
        <motion.div 
          key={idx} 
          className="card hover-lift glow-on-hover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="mb-3 md:mb-0 md:flex-1">
              <h3 className="text-xl font-semibold text-white mb-1 text-glow">{edu.degree}</h3>
              <p className="text-lg text-white mb-2 text-shadow">{edu.school}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></span>
                  <span className="text-indigo-100 text-shadow">{edu.period}</span>
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></span>
                  <span className="text-indigo-100 text-shadow">{edu.location}</span>
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                GPA: {edu.gpa}
              </div>
            </div>
          </div>
          
          {/* Highlights */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Highlights</h4>
            <ul className="space-y-2">
              {edu.highlights.map((highlight, i) => (
                <motion.li 
                  key={i}
                  className="text-white text-sm leading-relaxed flex items-start text-shadow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: (idx * 0.2) + (i * 0.1) }}
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
    
    {/* Certifications */}
    <div className="space-y-4">
      <motion.h3 
        className="text-xl font-semibold text-center glowy-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Certifications
      </motion.h3>
      
      <div className="grid gap-4">
        {certifications.map((cert, idx) => (
          <motion.div 
            key={idx} 
            className="card hover-lift glow-on-hover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + (idx * 0.2) }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-3 md:mb-0">
                <h4 className="text-lg font-semibold text-white mb-1 text-glow">{cert.name}</h4>
                <p className="text-white text-sm text-shadow">{cert.issuer}</p>
                <p className="text-indigo-100 text-xs text-shadow">Credential: {cert.credential}</p>
              </div>
              <div className="text-right">
                <span className="inline-block bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-600">
                  <span className="text-indigo-100 text-shadow">{cert.date}</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Education; 