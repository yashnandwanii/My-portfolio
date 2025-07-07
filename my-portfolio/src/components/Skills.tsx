import React from "react";
import { motion } from "framer-motion";
import PageDivider from "./PageDivider";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Dart", level: 90 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "C++", level: 75 }
      
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "GetX", level: 95 },
      { name: "Cubit", level: 75 },
      
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 80 },
      { name: "Supabase", level: 85 }
      
    ]
  },
  
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      
      { name: "CI/CD", level: 70 }
    ]
  }
];

const SkillBar: React.FC<{ skill: { name: string; level: number }; delay: number }> = ({ skill, delay }) => (
  <motion.div 
    className="mb-4"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-300 font-medium text-glow">{skill.name}</span>
      <span className="text-indigo-100 text-sm text-shadow">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <motion.div
        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

const Skills: React.FC = () => (
  <div className="pb-32 pt-10 px-4 md:px-8 space-y-8">
    <PageDivider />
    <motion.h2 
      className="text-2xl font-bold text-center glowy-text mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Skills & Expertise
    </motion.h2>
    
    <div className="space-y-8">
      {skillCategories.map((category, categoryIdx) => (
        <motion.div 
          key={categoryIdx} 
          className="card hover-lift glow-on-hover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIdx * 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center text-glow">
            {category.category}
          </h3>
          
          <div className="space-y-4">
            {category.skills.map((skill, skillIdx) => (
              <SkillBar 
                key={skillIdx} 
                skill={skill} 
                delay={(categoryIdx * 0.2) + (skillIdx * 0.1)}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
    
    {/* Hobbies */}
    <motion.div 
      className="card hover-lift glow-on-hover"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <h3 className="text-xl font-semibold text-white mb-6 text-center text-glow">
        Hobbies
      </h3>
      <ul className="space-y-4 px-2 md:px-6">
        {[
          "Pushing my limits at the gym and embracing an active lifestyle",
          "Exploring new places, cultures, and experiences",
          "Diving into captivating books and expanding my horizons",
          "    ",
          " "
        ].map((hobby, idx) => (
          <motion.li
            key={idx}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 + idx * 0.1 }}
            whileHover={{ x: 5 }}
          >
            <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md flex-shrink-0"></span>
            <span className="text-white leading-relaxed text-shadow">{hobby}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </div>
);

export default Skills; 