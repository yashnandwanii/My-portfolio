import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  HiHome, 
  HiBriefcase, 
  HiRocketLaunch, 
  HiAcademicCap, 
  HiBolt, 
  HiStar,
  HiDevicePhoneMobile,
  HiBars3,
  HiXMark,
  HiHeart,
  HiCodeBracket
} from "react-icons/hi2";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Extras from "./components/Extras";

const pages = [
  { name: "Home", path: "/", icon: HiHome },
  { name: "Experience", path: "/experience", icon: HiBriefcase },
  { name: "Projects", path: "/projects", icon: HiRocketLaunch },
  { name: "Education", path: "/education", icon: HiAcademicCap },
  { name: "Skills", path: "/skills", icon: HiBolt },
  { name: "Extras", path: "/extras", icon: HiStar },
];

const Placeholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-full fade-in">
    <h1 className="text-3xl font-bold mb-4 glowy-text">{title}</h1>
    <p className="text-lg text-gray-400">This is the {title} page.</p>
  </div>
);

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth <= 768);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

function DynamicIsland() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
      <div 
        className={`dynamic-island transition-all duration-500 cursor-pointer ${
          isExpanded ? 'w-80 h-32' : 'w-32 h-8'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {isExpanded ? (
          <div className="flex items-center justify-center h-full text-white text-sm">
            <div className="text-center">
              <div className="mb-1 flex justify-center">
                <HiDevicePhoneMobile size={24} />
              </div>
              <div className="text-xs opacity-80">Portfolio Active</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
}

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white"
      >
        {isOpen ? (
          <HiXMark size={24} />
        ) : (
          <HiBars3 size={24} />
        )}
      </button>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'bg-black/50' : 'bg-transparent pointer-events-none'}`}>
        <div className={`absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-gray-700 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 pt-20">
            <h3 className="text-xl font-bold text-white mb-6 glowy-text">Navigation</h3>
            <nav className="space-y-4">
              {pages.map((page) => {
                const IconComponent = page.icon;
                return (
                  <Link
                    key={page.path}
                    to={page.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      location.pathname === page.path 
                        ? 'bg-gradient-to-r from-indigo-500/20 to-purple-600/20 text-white border border-indigo-500/30' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <IconComponent size={20} />
                    <span className="font-medium">{page.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

function DesktopNavigation() {
  const location = useLocation();
  
  return (
    <nav className="glass rounded-b-2xl border-b border-gray-700/50">
      <div className="flex justify-around items-center py-4 px-2">
        {pages.map((page) => {
          const IconComponent = page.icon;
          return (
            <Link
              key={page.path}
              to={page.path}
              className={`nav-link text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200 flex flex-col items-center space-y-1 ${
                location.pathname === page.path 
                  ? 'text-white bg-gradient-to-r from-indigo-500/20 to-purple-600/20 glowy-text' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <IconComponent size={20} />
              <span>{page.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="glass border-t border-gray-700/50 py-4 px-4 text-center">
      <div className="text-sm text-gray-400">
        © 2024 <span className="glowy-text font-semibold">Yash Nandwani</span>. All rights reserved.
      </div>
      <div className="text-xs text-gray-500 mt-1 flex items-center justify-center space-x-1">
        <span>Built with</span>
        <div className="text-red-400">
          <HiHeart size={12} />
        </div>
        <span>using</span>
        <div className="text-indigo-400">
          <HiCodeBracket size={12} />
        </div>
        <span>React, TypeScript & Tailwind CSS</span>
      </div>
    </footer>
  );
}

function App() {
  const isMobile = useIsMobile();
  
  return (
    <Router>
      <div className="min-h-screen w-full flex items-center justify-center dark-bg">
        <div
          className={`phone-frame ${
            isMobile 
              ? "w-full h-full max-w-full max-h-full bg-black" 
              : "relative rounded-3xl overflow-hidden hover-lift border-8 border-gray-800"
          }`}
          style={isMobile ? {} : { 
            width: 430, // iPhone 16 Pro Max width
            height: 932, // iPhone 16 Pro Max height
            maxWidth: "100vw", 
            maxHeight: "100vh"
          }}
        >
          {/* Dynamic Island for desktop */}
          {!isMobile && <DynamicIsland />}
          
          {/* Mobile Navigation */}
          {isMobile && <MobileNavigation />}
          
          {/* Desktop Navigation */}
          {!isMobile && <DesktopNavigation />}
          
          {/* Content area */}
          <div className="pt-4 pb-4 px-4 h-full overflow-y-auto bg-gray-900">
            <Routes>
              {pages.map((page) => (
                <Route
                  key={page.path}
                  path={page.path}
                  element={
                    page.name === "Home" ? <Home /> :
                    page.name === "Experience" ? <Experience /> :
                    page.name === "Projects" ? <Projects /> :
                    page.name === "Education" ? <Education /> :
                    page.name === "Skills" ? <Skills /> :
                    page.name === "Extras" ? <Extras /> :
                    <Placeholder title={page.name} />
                  }
                />
              ))}
              <Route path="*" element={<Placeholder title="Home" />} />
            </Routes>
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
      
      {/* Responsive: Remove iPhone frame on mobile */}
      <style>{`
        @media (max-width: 768px) {
          div[style*='width: 430px'] {
            width: 100vw !important;
            height: 100vh !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </Router>
  );
}

export default App;
