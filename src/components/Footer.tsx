import "../styles/Footer.css";
import { IconButton } from "@mui/material";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <h3 className="footer-heading">Thanks for visiting!</h3>
      <div className="date-socials">
        <p>Last updated: May 2024</p>
        <ul className={"external-links"}>
          <li className={"link"}>
            <a href="https://github.com/smallwhale1" target="_blank">
              <IconButton>
                <AiFillGithub color={"#ffffff"} />
              </IconButton>
            </a>
          </li>
          <a
            href="https://www.linkedin.com/in/sophie-zhang-237428235/"
            target="_blank"
          >
            <li className={"link"}>
              <IconButton>
                <AiFillLinkedin color={"#ffffff"} />
              </IconButton>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
