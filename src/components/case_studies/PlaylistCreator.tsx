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
        <div className="flex-horizontal">
          <div className="flex-vertical">
            <h2 className="case-study-title">Playlist Creator</h2>
            <p className="case-study-description">
              An <i>interactive interface</i> for filtering media and organizing
              them into a playlist.
            </p>
            <div className={"tools"}>
              {tools.map((tool) => (
                <Tool key={tool} tool={tool} />
              ))}
            </div>
          </div>

          <div className="case-study-side">
            <h3>Role</h3>
            <p>Frontend Developer/Designer</p>
            <br />
            <h3>Timeline</h3>
            <p>March 2024 - April 2024</p>
          </div>
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
        <div className="case-study-flex">
          <div className="case-study-left-text">
            <h3 className="case-study-section-heading">Competitive Analysis</h3>
            <p className="case-study-important-body">
              I began by investigating how existing websites handle aggregation
              and filtering, analyzing the features of each and how they lend
              themselves to the overall user experience.
            </p>
            <p className="case-study-important-body">
              From Pinterest, Amazon, and AirBnb, I chose seven factors related
              how users can favorite items from a list to produce a collection
              of items, and compared each site by the factors they support.
            </p>
          </div>
          <img
            alt="competitive analysis of pinterest, airbnb, and amazon favoriting"
            className="case-study-img-right"
            width={400}
            // style={{ borderRadius: "8px" }}
            src="assets/images/projects/playlist-creator/competitive-analysis.png"
          />
        </div>

        <div className="case-study-points">
          <div className="case-study-point-container">
            <h4 className="case-study-point-header">pinterest</h4>
            <p className="case-study-body case-study-point">
              Pinterest took the most minimal approach, focusing on the visuals
              of the media itself without cluttering the interface with extra
              filters, tags, etc.
            </p>
          </div>
          <div className="case-study-point-container">
            <h4 className="case-study-point-header">amazon</h4>
            <p className="case-study-body case-study-point">
              Amazon had the most functionality, with sorting multiple option
              based filters, and a comprehensive description of each item when
              displaying search results, but sacrifices the ease of adding to
              cart directly from the list display and a more busy, complex
              interface.
            </p>
          </div>
          <div className="case-study-point-container">
            <h4 className="case-study-point-header">airbnb</h4>
            <p className="case-study-body case-study-point">
              Finally, Airbnb seemed to balance functionality with a more clean
              interface, with easing favoriting and removing functionality, a
              filters button that opens up a modal, and concise descriptions of
              each listing.
            </p>
          </div>
        </div>

        <p className="case-study-body">
          For Pinterest and Airbnb, the minimalist, image-focused list items
          with favoriting functionality on hover feels clean and uncluttered.
          Airbnb's approach of clicking the heart icon to favorite an item
          aligns with the user’s mental model of favoriting something.
          Pinterest’s lack of filtering and descriptions makes parsing the
          options more difficult. Amazon’s detailed descriptions, filters, and
          sorting make finding specific products easier if you know what you’re
          looking for. However, the plethora of options and capabilities may be
          initially overwhelming for users, leading to a steeper learning curve.
          Ultimately, I believe Airbnb’s interface takes the best from both
          worlds, balancing a clean interface with substantial searching and
          filtering capabilities.
        </p>
      </div>
      <div className="case-study-block case-study-dark">
        <CaseStudyHeading text="Process" />
        <p className="case-study-body">
          Keeping these insights in mind, I began developing my own playlist
          creator, with the goal of achieving a pleasant interface without
          sacrificing capability.
        </p>

        <p className="case-study-body">
          Users are able to add media represented by a list of cards to a
          favorites playlist. The media are of various genres, and include songs
          tracks and podcasts episodes. Data was collected from publicly
          available data from Spotify's API. Each piece of media is represented
          by a card, which are displayed in a grid-shaped list.
        </p>

        <div className="case-study-flex">
          <div className="case-study-left-text">
            <h3 className="case-study-section-heading">
              Media Card <i>Design</i>
            </h3>
            <p className="case-study-important-body">
              While designing my media cards, I decided to have image-focused
              cards with a small amount of descriptive text below the image. The
              tags at the bottom inform users of the filtering options available
              without cluttering the card with too much text.
            </p>
            <p className="case-study-important-body">
              Modeling off of AirBnb's design, users can favorite the media
              through toggling a heart icon.
            </p>
          </div>
          <img
            alt="media card design"
            className="case-study-img-right"
            width={250}
            style={{ borderRadius: "8px" }}
            src="assets/images/projects/playlist-creator/media-card.png"
          />
        </div>
        <p className="case-study-body">
          Favoriting an item adds it to the favorites playlist, which displays
          the favorited items in the right panel. In the aggregated playlist
          section, the total duration and number of songs is calculated and
          displayed, and the songs and podcast episodes are separated into
          sections. I chose to use dropdowns to allow users to control what
          options to filter by (genre, type of media), as well as sorting by the
          duration of the media. Users can also reset the filters and clear
          their playlist with buttons.
        </p>
        {/* <div className="case-study-images-full">
          <div className="case-study-img-container">
            <img
              className="case-study-img-full"
              src="assets/images/projects/playlist-creator/filters.png"
            />
          </div>
          <div className="case-study-img-container">
            <img
              style={{ borderRadius: "8px" }}
              className="case-study-img-full"
              src="assets/images/projects/playlist-creator/playlist.png"
            />
          </div>
        </div> */}
        <img
          alt="filter design"
          className="img-small"
          src="assets/images/projects/playlist-creator/filters.png"
        />
        <img
          alt="sidebar playlist design"
          className="img-small"
          src="assets/images/projects/playlist-creator/playlist.png"
        />
      </div>
      <div className="case-study-block" style={{ paddingTop: "2rem" }}>
        <CaseStudyHeading text="Learnings" />
        <p className="case-study-body">
          I learned how to perform competitive analysis in order to understand
          the current market and draw inspiration from available options and
          experts before starting my own design process.
        </p>
        <p className="case-study-body">
          I learned that balancing functionality with simplicity is key in
          developing an interface. It’s important to give users options without
          overwhelming them in the process.
        </p>
      </div>
      <div className="case-study-block">
        <CaseStudyHeading text="Result" />
        <p className="case-study-body">Here is a demo of the final product.</p>
        <img
          alt="demo of playlist creator app"
          className="img-small"
          src="assets/images/projects/playlist-creator/playlist-gif.gif"
        />

        <p className="case-study-body">
          You can try it out yourself{" "}
          <a href="https://cs1300-development.vercel.app/" target="_blank">
            here.{" "}
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default PlaylistCreator;
