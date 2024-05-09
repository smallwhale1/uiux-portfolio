import "../styles/Topbar.css";
import { IconButton, useTheme } from "@mui/material";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { Section } from "../util/interfaces";

interface Props {
  smoothScroll: (section: Section) => void;
}

// Tailwind Zinc
const navbarColor = "#27272a";

const Topbar = ({ smoothScroll }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const theme = useTheme();
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
        setMenuOpen(false);
      }
      setShowNavbar(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={"topbar-container"}
      style={
        !scrolledDown
          ? {
              backgroundColor: "#fffaf3",
              height: "8rem",
            }
          : { backgroundColor: navbarColor, height: "6rem" }
      }
    >
      <nav
        className={"topbar"}
        style={
          !scrolledDown
            ? { height: "8rem" }
            : { height: "6rem", color: "#ffffff" }
        }
      >
        <div
          className={"name tangerine-bold"}
          onClick={() => smoothScroll(Section.HOME)}
        >
          SZ
        </div>
        <ul className={"links"}>
          {!collapsed && (
            <>
              {/* Navigation links within page */}
              <li className={"link"} onClick={() => smoothScroll(Section.HOME)}>
                <div>home</div>
              </li>
              <li
                className={"link"}
                onClick={() => smoothScroll(Section.PROJECTS)}
              >
                <div>projects</div>
              </li>
              <li className={"link"}>
                <a
                  href="resume.pdf"
                  target="_blank"
                  style={{ color: scrolledDown ? "#ffffff" : "#000000" }}
                >
                  resume
                </a>
              </li>
            </>
          )}

          {collapsed && (
            <li className="link">
              <IconButton
                onClick={() => {
                  setMenuOpen(true);
                }}
              >
                <AiOutlineMenu color={scrolledDown ? "#ffffff" : "#000000"} />
              </IconButton>
            </li>
          )}
        </ul>

        {
          <div
            className={`collapsed-menu ${menuOpen && "collapsed-menu-shown"}`}
          >
            <IconButton
              onClick={() => {
                setMenuOpen(false);
              }}
              sx={{ alignSelf: "flex-end" }}
            >
              <BiX />
            </IconButton>
            <ul className={"menu"}>
              {/* Navigation links within page */}
              <li
                style={{ color: "#000000" }}
                className={`menu-link`}
                onClick={() => {
                  smoothScroll(Section.HOME);
                  setMenuOpen(false);
                }}
              >
                <div>Home</div>
              </li>
              <li
                style={{ color: "#000000" }}
                className={`menu-link`}
                onClick={() => {
                  smoothScroll(Section.PROJECTS);
                  setMenuOpen(false);
                }}
              >
                <div>projects</div>
              </li>
              <li className={"menu-link"}>
                <a
                  href="resume.pdf"
                  target="_blank"
                  style={{ color: "#000000" }}
                >
                  resume
                </a>
              </li>
            </ul>
          </div>
        }
      </nav>
    </div>
  );
};

export default Topbar;
