import "../styles/Topbar.css";
import { IconButton, useTheme } from "@mui/material";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { BiX } from "react-icons/bi";

interface Props {}

// Tailwind Zinc
const navbarColor = "#27272a";

const Topbar = ({}: Props) => {
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
        <div className={"name tangerine-bold"}>SZ</div>
        <ul className={"links"}>
          {!collapsed && (
            <>
              {/* Navigation links within page */}
              <li className={"link"}>
                <div>home</div>
              </li>
              <li className={"link"}>
                <div>projects</div>
              </li>
              <li className={"link"}>
                <div>resume</div>
              </li>
            </>
          )}
          {/* Link icons */}
          {/* <ul className={"external-links"}>
            <li className={"link"}>
              <a href="https://github.com/smallwhale1" target="_blank">
                <IconButton>
                  <AiFillGithub color={scrolledDown ? "#ffffff" : "#000000"} />
                </IconButton>
              </a>
            </li>
            <a
              href="https://www.linkedin.com/in/sophie-zhang-237428235/"
              target="_blank"
            >
              <li className={"link"}>
                <IconButton>
                  <AiFillLinkedin
                    color={scrolledDown ? "#ffffff" : "#000000"}
                  />
                </IconButton>
              </li>
            </a>
            {collapsed && (
              <li className={"link"}>
                <IconButton
                  onClick={() => {
                    setMenuOpen(true);
                  }}
                >
                  <AiOutlineMenu />
                </IconButton>
              </li>
            )}
          </ul> */}
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
                className={`menu-link`}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <div>projects</div>
              </li>
              <li
                className={`menu-link`}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <div>skills</div>
              </li>
            </ul>
          </div>
        }
      </nav>
    </div>
  );
};

export default Topbar;
