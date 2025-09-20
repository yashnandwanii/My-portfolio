import React from "react";
import { motion } from "framer-motion";
import PageDivider from "./PageDivider";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Dart", icon: "🎯", color: "from-blue-500 to-cyan-500" },
      { name: "Java", icon: "☕", color: "from-orange-500 to-red-500" },
      { name: "JavaScript", icon: "🟨", color: "from-yellow-400 to-orange-500" },
      { name: "C++", icon: "⚡", color: "from-blue-600 to-purple-600" }
    ]
  },
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "Flutter", icon: "📱", color: "from-blue-400 to-cyan-400" },
      { name: "GetX", icon: "🔧", color: "from-green-500 to-teal-500" },
      { name: "Cubit", icon: "🧊", color: "from-indigo-500 to-blue-500" }
    ]
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
      { name: "Express.js", icon: "🚀", color: "from-gray-600 to-gray-800" },
      { name: "MongoDB", icon: "🍃", color: "from-green-600 to-lime-500" },
      { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-600" },
      { name: "Firebase", icon: "🔥", color: "from-orange-500 to-yellow-500" },
      { name: "Supabase", icon: "⚡", color: "from-green-400 to-cyan-400" }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "📚", color: "from-orange-500 to-red-500" },
      { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-500" },
      { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-500" },
      { name: "CI/CD", icon: "🔄", color: "from-purple-500 to-pink-500" }
    ]
  }
];

const SkillCard: React.FC<{ 
  skill: { name: string; icon: string; color: string }; 
  delay: number;
  index: number;
}> = ({ skill, delay, index }) => (
  <motion.div
    className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${skill.color} p-1 shadow-lg hover:shadow-2xl transition-all duration-300`}
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      duration: 0.5, 
      delay: delay + (index * 0.1),
      type: "spring",
      stiffness: 100
    }}
    whileHover={{ 
      scale: 1.05, 
      rotate: [0, -1, 1, 0],
      transition: { duration: 0.3 }
    }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 h-full">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Icon with pulse animation */}
      <motion.div
        className="text-3xl mb-3 relative z-10"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: delay + 1,
          repeatType: "reverse"
        }}
      >
        {skill.icon}
      </motion.div>
      
      {/* Skill name with typewriter effect */}
      <motion.h4
        className="text-white font-semibold text-sm text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {skill.name}
      </motion.h4>
      
      {/* Animated border glow */}
      <motion.div
        className={`absolute inset-0 rounded-lg bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20`}
        animate={{
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: delay + 2
        }}
      />
      
      {/* Floating particles effect */}
      <motion.div
        className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full opacity-60"
        animate={{
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: delay + index * 0.5
        }}
      />
      <motion.div
        className="absolute bottom-3 left-3 w-1 h-1 bg-white rounded-full opacity-40"
        animate={{
          y: [0, -8, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: delay + index * 0.3
        }}
      />
    </div>
  </motion.div>
);

const Skills: React.FC = () => (
  <div className="pb-32 pt-10 px-4 md:px-8 space-y-12">
    <PageDivider />
    <motion.h2 
      className="text-3xl font-bold text-center glowy-text mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Tech Stack & Expertise
    </motion.h2>
    
    <div className="space-y-12">
      {skillCategories.map((category, categoryIdx) => (
        <motion.div 
          key={categoryIdx} 
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: categoryIdx * 0.2 }}
        >
          {/* Category Header with Icon */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: categoryIdx * 0.2 + 0.3 }}
          >
            <motion.span 
              className="text-4xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: categoryIdx }}
            >
              {category.icon}
            </motion.span>
            <h3 className="text-2xl font-bold text-white text-glow">
              {category.category}
            </h3>
          </motion.div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.skills.map((skill, skillIdx) => (
              <SkillCard 
                key={skillIdx} 
                skill={skill} 
                delay={categoryIdx * 0.3}
                index={skillIdx}
              />
            ))}
          </div>
          
          {/* Decorative line */}
          <motion.div
            className="mt-8 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: categoryIdx * 0.2 + 0.8 }}
          />
        </motion.div>
      ))}
    </div>
    
    {/* Enhanced Hobbies Section */}
    <motion.div 
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-500/20 p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    >
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <div className="relative z-10">
        <motion.div 
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <motion.span 
            className="text-3xl"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎯
          </motion.span>
          <h3 className="text-2xl font-bold text-white text-glow">
            Personal Interests
          </h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "💪", title: "Fitness", desc: "Pushing limits at the gym" },
            { icon: "✈️", title: "Travel", desc: "Exploring new cultures" },
            { icon: "📚", title: "Reading", desc: "Expanding horizons through books" }
          ].map((hobby, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-600/30 p-6 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 + idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
              >
                {hobby.icon}
              </motion.div>
              <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-300 transition-colors">
                {hobby.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {hobby.desc}
              </p>
              
              {/* Floating particles */}
              <motion.div
                className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: idx * 0.3
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

export default Skills; 