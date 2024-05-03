import "../../styles/CaseStudy.css";
import CaseStudyHeading from "./CaseStudyHeading";
import Tool from "../Tool";

type Props = {};

const tools = ["React.js", "TypeScript"];

const PlaylistCreator = (props: Props) => {
  return (
    <div className="case-study">
      <div className="case-study-block">
        <CaseStudyHeading text="Case Study" />
        <h2 className="case-study-title">Playlist Creator</h2>
        <p className="case-study-description">
          An interactive interface for filtering media and organizing them into
          a playlist.
        </p>
        <div className={"tools"}>
          {tools.map((tool) => (
            <Tool key={tool} tool={tool} />
          ))}
        </div>
      </div>
      <div className="case-study-block">
        <CaseStudyHeading text="Problem" />
        <p className="case-study-body">
          From shopping carts to wishlists, managing collection of items is
          everywhere in the digital world. With filtering capabilities, the
          possibilities of such interfaces are endless. However, sometimes, it’s
          too much. I want to be able to find what I want on Amazon, but don’t
          want to have to parse through a ton of filters to get there. And a
          question arises: how do we balance capability with usability? In this
          project, I wanted to build an interface for creating a playlist while
          keeping this balance in mind.
        </p>
      </div>
      <div className="case-study-block">
        <CaseStudyHeading text="Research" />
        <p className="case-study-body">
          I first performed competitive analysis on existing popular interfaces
          that have an aggregation, filtering, or favoriting function.
        </p>
      </div>
      <div className="case-study-block">
        <CaseStudyHeading text="Process" />
        <p className="case-study-body">
          With these thoughts in mind, I began developing my own playlist
          creator, with the goal of achieving a pleasant interface without
          sacrificing capability.
        </p>
        <p className="case-study-body">
          While designing my song cards, I decided to have the imagery be front
          and center without text clutter, modeling off of AirBnb’s approach.
        </p>
      </div>
      <div className="case-study-block">
        <CaseStudyHeading text="Learnings" />
        <p className="case-study-body">
          As a personal project, I learned how to develop a project end-to-end,
          from design to frontend to backend. It was a lot of components to
          manage and integrate, but more rewarding because of it.
        </p>
        <p className="case-study-body">
          I also learned that user flows can be unexpectedly complex if the
          application’s goal is to be flexible and support different user
          journeys. Next time, I plan to work out the routing behavior in
          advance to avoid changing my routing code during the implementation
          process.
        </p>
      </div>
      <div className="case-study-block">
        <CaseStudyHeading text="Learnings" />
        <p className="case-study-body">
          I learned that balancing functionality with simplicity is key in
          developing an interface. It’s important to give users options without
          overwhelming them in the process.
        </p>
      </div>
      <div className="case-study-block">
        <CaseStudyHeading text="Result" />
        <p className="case-study-body">This is the final result:</p>
        <p className="case-study-body">Here is the link to try it out.</p>
      </div>
    </div>
  );
};

export default PlaylistCreator;
