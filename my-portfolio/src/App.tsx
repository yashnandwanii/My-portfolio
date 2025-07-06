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
import Navbar from "./components/Navbar";

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
  );
}

function App() {
  const isMobile = useIsMobile();
  const location = window.location.pathname;

  return (
    <Router>
      <div className="min-h-screen w-full flex items-center justify-center dark-bg">
        <div
          className={`phone-frame premium-iphone-frame ${
            isMobile 
              ? "w-full h-full max-w-full max-h-full bg-black" 
              : "relative overflow-hidden"
          }`}
          style={isMobile ? {} : { 
            width: 480, // Wider for iPhone 16 Pro Max
            height: 1040, // Proportional height
            maxWidth: "100vw", 
            maxHeight: "100vh",
            boxShadow: "0 0 0 2px #181f2e, 0 0 32px 4px rgba(99,102,241,0.12), 0 8px 40px 0 rgba(0,0,0,0.7)",
            borderRadius: 56,
            border: "2.5px solid #181f2e",
            background: "linear-gradient(135deg, #181f2e 0%, #232b3e 100%)"
          }}
        >
          {/* Dynamic Island for desktop */}
          {!isMobile && (
            <div style={{ position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 30, pointerEvents: 'none' }}>
              <div style={{ pointerEvents: 'auto' }}>
                <DynamicIsland />
              </div>
            </div>
          )}
          {/* Content area: less top padding for Home page */}
          <div className={`${location === '/' ? 'pt-32' : 'pt-48'} pb-4 px-4 h-full overflow-y-auto bg-gray-900 rounded-b-3xl premium-content-shadow`}>
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
          {/* Sticky Navbar at the bottom for all devices (now also for mobile) */}
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 40 }}>
            <Navbar />
          </div>
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
