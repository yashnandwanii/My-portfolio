import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const AnimatedBackground = lazy(() => import("./AnimatedBackground"));

const socials = [
  { name: "Email", url: "mailto:yashnandwani47@gmail.com", icon: <HiOutlineMail size={28} color="#6366f1" /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/yash-nandwani", icon: <FaLinkedin size={28} color="#0A66C2" /> },
  { name: "GitHub", url: "https://github.com/yashnandwani", icon: <FaGithub size={28} color="#fff" /> },
  { name: "LeetCode", url: "https://leetcode.com/u/YashNandwani63/", icon: <SiLeetcode size={28} color="#FFA116" /> },
];

const Home: React.FC = () => (
  <div className="relative flex flex-col items-center justify-center h-full text-center p-4 space-y-8 overflow-hidden">
    {/* Animated Background - positioned within the iPhone frame */}
    <Suspense fallback={<Loader />}>
      <AnimatedBackground />
    </Suspense>

    {/* Content Layer */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
      {/* Avatar/Profile Section */}
      <motion.div
        className="profile-image-container w-24 h-24 profile-glow"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {/* Profile image */}
        <img
          src="https://i.ibb.co/rKSZxfh6/IMG-2216.jpg"
          alt="Yash Nandwani"
          className="w-full h-full object-cover rounded-full profile-image"
          loading="lazy"
          style={{ filter: 'blur(8px)', transition: 'filter 0.4s' }}
          onLoad={e => (e.currentTarget.style.filter = 'blur(0)')}
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold glowy-text mb-2"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Yash Nandwani
      </motion.h1>

      {/* Tagline */}
      <motion.h2
        className="text-lg md:text-xl text-white mb-6 max-w-md text-glow text-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Mobile App Developer | Backend Enthusiast | Tech Explorer
      </motion.h2>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 justify-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl hover:scale-110 transition-all duration-200 hover:shadow-lg glow-on-hover"
            title={social.name}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-white max-w-md mx-auto leading-relaxed text-glow text-shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Passionate about building scalable apps, solving DSA challenges, and exploring new technologies.
        Welcome to my interactive portfolio!
      </motion.p>

      {/* Quick Stats */}
      <motion.div
        className="grid grid-cols-2 gap-4 w-full max-w-xs mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <div className="card text-center glow-on-hover">
          <div className="text-2xl font-bold glowy-text">800+</div>
          <div className="text-sm text-white text-shadow">DSA Problems</div>
        </div>
        <div className="card text-center glow-on-hover">
          <div className="text-2xl font-bold glowy-text">10+</div>
          <div className="text-sm text-white text-shadow">Projects</div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Home; 