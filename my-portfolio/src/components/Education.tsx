import React from "react";
import { motion } from "framer-motion";
import PageDivider from "./PageDivider";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "VIT Bhopal",
    period: "2022 - 2026",
    location: "Bhopal, Madhya Pradesh",
    gpa: "8.36/10",
    highlights: [
      "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks",
      "Active member of coding clubs and hackathon communities",
      "Participated in various technical workshops and seminars"
    ]
  },
  {
    degree:"12th",
    school:"Modern Senior Secondary School",
    period:"2020 - 2021",
    location:"Rewari, Haryana",
    gpa:"9.02/10",
    highlights:["Relevant Coursework: Mathematics, Physics, Chemistry, Computer Science, English"]
  },
  {
    degree:"10th",
    school:"Modern Senior Secondary School",
    period:"2018 - 2019",
    location:"Rewari, Haryana",
    gpa:"9.15/10",
    highlights:["Relevant Coursework: Mathematics, English, Hindi, Social Science, Science, "]
  }
];

const certifications = [
  {
    name: "MongoDB Aggregation Fundamentals",
    issuer: "MongoDB",
    date: "2025",
    credential: "https://drive.google.com/file/d/1zsrrfYuAhlxImsgKgxL45-eSwEIUUb53/view?usp=sharing"
  },
  {
    name: "MongoDB Certification",
    issuer: "MongoDB University",
    date: "2025",
    credential: "https://drive.google.com/file/d/1a7FfthSzGOz9HzkuVW8XW60DuySWXOAp/view?usp=drive_link"
  },
  {
    name: "Oracle Certified Foundations Associate",
    issuer: "Oracle University",
    date: "2025",
    credential: "https://drive.google.com/file/d/1bJnEYgmmfHf0HIR0v2TBAQfQlh6p-FFt/view?usp=sharing"
  },
  {
    name: "Backend Development",
    issuer: "Physics Wallah",
    date: "2025",
    credential: "https://drive.google.com/file/d/1I_F9mNUvd1tpEZBG3CxTykJ5OGO_Muuq/view?usp=drive_link"
  },
  {
    name: "Getting Started with Artificial Intelligence",
    issuer: "IBM",
    date: "2025",
    credential: "https://drive.google.com/file/d/1tZIJ3GfJOMApZ-txHanP0_Qu_h3omsI9/view?usp=drive_link"
  },
  {
    name: "Flutter Development",
    issuer: "Udemy",
    date: "2024",
    credential: "https://drive.google.com/file/d/1v68i1Xr_b9N1SUoAVFY3rt57AVc34DH6/view?usp=drive_link"
  },
  {
    name: "Cloud Computing",
    issuer: "NPTEL",
    date: "2024",
    credential: "https://drive.google.com/file/d/1koUcHkyXaxOtBWTdxw5fE1SpF4-rvJnq/view?usp=drive_link"
  },
  {
    name: "Marketing Analytics",
    issuer: "NPTEL",
    date: "2024",
    credential: "https://drive.google.com/file/d/1DU5eykAJ-XHlLRANr5kKGfywoBkancv7/view?usp=drive_link"
  },
  {
    name: "Java Basics",
    issuer: "Sololearn",
    date: "2023",
    credential: "https://drive.google.com/file/d/19e5ZHT7IU-3OxiGRuXT5k0pDVF2fpISh/view?usp=drive_link"
  },
  {
    name: "Bits and Bytes of Networking",
    issuer: "Coursera",
    date: "2023",
    credential: "https://drive.google.com/file/d/1KJQuezj6ez2jYmUlz5pFxn_ubcxV-GjV/view?usp=drive_link"
  },
  
];

const Education: React.FC = () => (
  <div className="pb-32 pt-10 px-4 md:px-8 space-y-8">
    <PageDivider />
    <motion.h2 
      className="text-3xl font-bold text-center glowy-text mb-12 mt-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Education Timeline
    </motion.h2>
    
    {/* Timeline Container */}
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-600 to-pink-500"></div>
      
      {/* Education Timeline */}
      <div className="space-y-20">
        {education.map((edu, idx) => (
          <motion.div 
            key={idx} 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-2 md:left-6 top-6 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg shadow-indigo-500/50 z-10">
              <div className="absolute inset-1 bg-black rounded-full"></div>
            </div>
            
            {/* Content Card */}
            <div className="ml-12 md:ml-16">
              <motion.div 
                className="card hover-lift glow-on-hover relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Timeline connector */}
                <div className="absolute left-0 top-6 w-4 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0 md:flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                      <h3 className="text-xl font-semibold text-white text-glow">{edu.degree}</h3>
                    </div>
                    <p className="text-lg text-white mb-3 text-shadow ml-5">{edu.school}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 ml-5">
                      <span className="flex items-center bg-gray-800/50 px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></span>
                        <span className="text-indigo-100 text-shadow">{edu.period}</span>
                      </span>
                      <span className="flex items-center bg-gray-800/50 px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></span>
                        <span className="text-indigo-100 text-shadow">{edu.location}</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
                
                {/* Highlights */}
                <div className="ml-5">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide flex items-center">
                    <span className="w-3 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 mr-2"></span>
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {edu.highlights.map((highlight, i) => (
                      <motion.li 
                        key={i}
                        className="text-white text-sm leading-relaxed flex items-start text-shadow"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (idx * 0.3) + (i * 0.1) }}
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm"></span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    {/* Certifications Timeline */}
    <div className="relative mt-24">
      <motion.h3 
        className="text-xl font-semibold text-center glowy-text mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Certifications
      </motion.h3>
      
      {/* Timeline Line for Certifications */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-600 to-indigo-500"></div>
      
      <div className="space-y-8">
        {certifications.map((cert, idx) => (
          <motion.div 
            key={idx} 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + (idx * 0.3) }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-2 md:left-6 top-4 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg shadow-pink-500/50 z-10">
              <div className="absolute inset-1 bg-black rounded-full"></div>
            </div>
            
            {/* Content Card */}
            <div className="ml-12 md:ml-16">
              <motion.div 
                className="card hover-lift glow-on-hover relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Timeline connector */}
                <div className="absolute left-0 top-4 w-4 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600"></div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-3 md:mb-0 ml-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-6 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
                      <h4 className="text-lg font-semibold text-white text-glow">{cert.name}</h4>
                    </div>
                    <p className="text-white text-sm text-shadow ml-5">{cert.issuer}</p>
                    {cert.credential && (
                      <a
                        href={cert.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 ml-5 px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-200 glow-on-hover"
                      >
                        Show Credential
                      </a>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-600 shadow-sm">
                      <span className="text-indigo-100 text-shadow">{cert.date}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Education; 