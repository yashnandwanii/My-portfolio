import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  HiHome, 
  HiBriefcase, 
  HiRocketLaunch, 
  HiAcademicCap, 
  HiBolt
} from "react-icons/hi2";

const pages = [
  { name: "Home", path: "/", icon: HiHome },
  { name: "Experience", path: "/experience", icon: HiBriefcase },
  { name: "Projects", path: "/projects", icon: HiRocketLaunch },
  { name: "Education", path: "/education", icon: HiAcademicCap },
  { name: "Skills", path: "/skills", icon: HiBolt },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="w-full flex justify-center items-center py-4 px-2 z-20" style={{ position: 'relative' }}>
      <div className="glass rounded-2xl shadow-lg flex justify-center items-center gap-2 px-2 py-2" style={{ minWidth: 340, maxWidth: 420 }}>
        {pages.map((page) => {
          const IconComponent = page.icon;
          const isActive = location.pathname === page.path;
          return (
            <Link
              key={page.path}
              to={page.path}
              className={`flex flex-col items-center justify-center px-3 py-1 rounded-xl transition-all duration-300 relative group will-change-transform will-change-shadow ${isActive ? 'bg-gradient-to-b from-indigo-500/20 to-purple-600/20' : ''}`}
              style={{ minWidth: 48 }}
            >
              <div className={`flex items-center justify-center w-8 h-8 mb-1 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_24px_0_rgba(99,102,241,0.18)] group-hover:bg-gradient-to-br group-hover:from-indigo-500/30 group-hover:to-purple-600/30 group-hover:backdrop-blur-md group-hover:-translate-y-1 ${isActive ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl text-white' : 'bg-gray-800/50 text-gray-300'}`}>
                <IconComponent size={22} />
              </div>
              <span className={`text-xs font-semibold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent group-hover:drop-shadow-md ${isActive ? 'glowy-text' : 'text-gray-300'}`}>{page.name}</span>
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-xl animate-pulse"></span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar; 