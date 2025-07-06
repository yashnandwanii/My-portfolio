import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  HiHome, 
  HiBriefcase, 
  HiRocketLaunch, 
  HiAcademicCap, 
  HiBolt, 
  HiStar
} from "react-icons/hi2";

const pages = [
  { name: "Home", path: "/", icon: HiHome },
  { name: "Experience", path: "/experience", icon: HiBriefcase },
  { name: "Projects", path: "/projects", icon: HiRocketLaunch },
  { name: "Education", path: "/education", icon: HiAcademicCap },
  { name: "Skills", path: "/skills", icon: HiBolt },
  { name: "Extras", path: "/extras", icon: HiStar },
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
              className={`flex flex-col items-center justify-center px-3 py-1 rounded-xl transition-all duration-200 relative ${isActive ? 'bg-gradient-to-b from-indigo-500/20 to-purple-600/20' : 'hover:bg-gray-800/50'}`}
              style={{ minWidth: 48 }}
            >
              <div className={`flex items-center justify-center w-8 h-8 mb-1 rounded-lg ${isActive ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl text-white' : 'bg-gray-800/50 text-gray-300'}`}>
                <IconComponent size={22} />
              </div>
              <span className={`text-xs font-semibold ${isActive ? 'glowy-text' : 'text-gray-300'} transition-all`}>{page.name}</span>
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