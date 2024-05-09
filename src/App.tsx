import "./styles/App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Home from "./components/Home";
import Topbar from "./components/Topbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import { Section } from "./util/interfaces";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState<Section>(Section.HOME);
  const [contentVisible, setContentVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const smoothScroll = (section: Section) => {
    let element: HTMLElement | undefined;

    switch (section) {
      case Section.HOME:
        if (!homeRef.current) return;
        element = homeRef.current;
        break;
      case Section.PROJECTS:
        if (!projectRef.current) return;
        element = projectRef.current;
        break;
    }

    if (element) {
      const { top } = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const targetTop = scrollTop + top - 150;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeBox = homeRef.current?.getBoundingClientRect();
      const projectsBox = projectRef.current?.getBoundingClientRect();
      const vh = window.innerHeight;

      if (!homeBox || !projectsBox) return;

      // Calculate the distance from the top of the viewport
      const homeFromTop = homeBox.top;
      const projectsFromTop = projectsBox.top;

      const viewPoint = vh / 2;

      if (projectsFromTop < viewPoint) {
        setActiveView(Section.PROJECTS);
      } else {
        setActiveView(Section.HOME);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Topbar smoothScroll={smoothScroll} />
      <div ref={homeRef}>
        <Home smoothScroll={smoothScroll} />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <Footer />
      {/* <Skills /> */}
    </ThemeProvider>
  );
}

export default App;
