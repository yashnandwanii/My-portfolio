import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
  HiCodeBracket,
  HiSun,
  HiMoon
} from "react-icons/hi2";
import Loader from "./components/Loader";
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
  const [isExpanded, setIsExpanded] = React.useState(false);

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
          <a
            href="https://drive.google.com/file/d/1RpN4MfmMThM6WcSz7hcAKD6KN_zbgPdM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 bg-transparent border border-white text-white text-xs font-semibold rounded-lg no-underline"
            style={{ minWidth: 120, textDecoration: 'none' }}
          >
            View Resume
          </a>
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
          className="phone-frame premium-iphone-frame overflow-hidden"
          style={isMobile ? {} : {
            width: 520,
            height: 1040,
            maxWidth: '100vw',
            maxHeight: '100vh',
            boxShadow: '0 0 0 2px #181f2e, 0 0 32px 4px rgba(99,102,241,0.12), 0 8px 40px 0 rgba(0,0,0,0.7)',
            borderRadius: 56,
            border: '2.5px solid #181f2e',
            background: 'linear-gradient(135deg, #181f2e 0%, #232b3e 100%)',
            position: 'relative'
          }}
        >
          {/* Dynamic Island for all devices */}
            <div style={{ position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 30, pointerEvents: 'none' }}>
              <div style={{ pointerEvents: 'auto' }}>
                <DynamicIsland />
              </div>
            </div>
          {/* Content area: less top padding for Home page */}
          <div className={`${location === '/' ? 'pt-32' : 'pt-48'} pb-4 pt-8 pb-8 px-6 h-full overflow-y-auto premium-content-shadow`}>
            <Suspense fallback={<Loader />}>
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
            </Suspense>
          </div>
          {/* Sticky Navbar at the bottom for all devices (now also for mobile) */}
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 40 }}>
            <Navbar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
