import React from "react";
import "../styles/Home.css";
import { Button } from "@mui/material";
import { PiArrowBendRightDown } from "react-icons/pi";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="home">
      <div className="home-text">
        <h1 className="home-heading tangerine-bold">
          Hi, I'm <span className="text-highlight">Sophie.</span>
        </h1>
        <p className="home-p">
          A frontend engineer and designer passionate about creating engaging,
          user-centered applications.
        </p>
        <Button variant="contained">
          <span
            className="btn-text"
            style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
          >
            projects
            {/* <PiArrowBendRightDown /> */}
          </span>
        </Button>
      </div>
      <img className="home-img" src="assets/images/home-img.jpg" />
    </div>
  );
};

export default Home;
