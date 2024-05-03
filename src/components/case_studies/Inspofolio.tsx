import "../../styles/CaseStudy.css";
import CaseStudyHeading from "./CaseStudyHeading";
import Tool from "../Tool";

type Props = {};

const tools = ["Next.js", "TypeScript", "Firebase"];

const Inspofolio = (props: Props) => {
  return (
    <div className="case-study">
      <div className="case-study-block">
        <CaseStudyHeading text="Case Study" />
        <h2 className="case-study-title">Inspofolio</h2>
        <p className="case-study-description">
          A web application <i>for artists</i> to organize their multimedia
          references.
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
          During the creative process, artists often have to reference media and
          links from many different sources. However, there is currently a lack
          of an organized, integrated environment to manage all of them
          effectively. Born out of my own frustrations, Inspofolio intends to
          address this issue, allowing users to upload and manage a variety of
          multimedia: reference images, embedded content from sites, color
          palettes, and music playlists for each of their projects on a single,
          integrated platform.
        </p>
      </div>
      <div className="case-study-block">
        <CaseStudyHeading text="Research" />
        <div className="case-study-flex">
          <div className="case-study-left-text">
            <h3 className="case-study-section-heading">
              How do we <i>organize</i> references?
            </h3>
            <p className="case-study-important-body">
              As a hobby artist, I first thought about where I personally find
              reference media and inspiration, such as Pinterest, Instagram,
              YouTube, and Google. I surveyed my artist friends as well, asking
              them where they find references and how they go about organizing
              them.
            </p>
          </div>
          <img
            className="case-study-img-right"
            width={400}
            src="assets/images/projects/inspofolio/pinterest.jpg"
          />
        </div>
        <p className="case-study-body">
          I soon came to realize there was a common pain point:{" "}
          <i>
            we draw inspiration from a ton of different places, meaning we
            constantly have a lot of tabs open that we constantly have to switch
            between, or we have to find some haphazard way of organizing these
            disparate sources ourselves.
          </i>
        </p>
        <p className="case-study-body">
          An artist might organize their pins into a collection on Pinterest,
          but what if they also wanted to easily access related posts on
          Instagram, a YouTube process timelapse, or color palettes and
          playlists?
        </p>
      </div>
      <div className="case-study-block case-study-dark">
        <CaseStudyHeading text="Process" />
        <p className="case-study-body">
          I began organizing the steps for the main user flows.
        </p>

        <div className="case-study-points">
          <div className="case-study-point-container">
            <h4 className="case-study-point-header">authentication</h4>
            <p className="case-study-body case-study-point">
              First, the user would create an account and login, enabling them
              to manage a dashboard of projects, each containing the multimedia.
            </p>
          </div>
          <div className="case-study-point-container">
            <h4 className="case-study-point-header">creation</h4>
            <p className="case-study-body case-study-point">
              To create a new project, users would go through steps guiding them
              through uploading images, adding any links (like to pins on
              Pinterest), and finally linking their Spotify to create a
              project-specific playlist.
            </p>
          </div>
          <div className="case-study-point-container">
            <h4 className="case-study-point-header">dashboard</h4>
            <p className="case-study-body case-study-point">
              They would then be brought to their dashboard, where all their
              projects are displayed. Within a project, they are able to
              navigate to its different aspects: uploaded images, links,
              palette, and playlist.
            </p>
          </div>
        </div>

        <p className="case-study-body">
          <i>Simple right?</i>
        </p>
        <p className="case-study-body">
          Unfortunately, things didn't go all that smoothly. I made the mistake
          of hopping right into coding some of the pages, and realized
          something. I wanted this new platform to be flexible, and this meant
          accounting for different user flows and paths. What if the user didn’t
          want to sign up for an account? Or if they didn’t want to link their
          Spotify? Routing became an unexpectedly complex problem, so I took a
          step back and broke it down with a flowchart.
        </p>
        <div className="case-study-images-full">
          <div className="case-study-img-container">
            <img
              className="case-study-img-full"
              src="assets/images/projects/inspofolio/flowchart.png"
            />
          </div>
        </div>

        <div className="case-study-flex">
          <div className="case-study-left-text">
            <h3 className="case-study-section-heading">
              Exploring <i>integration</i>
            </h3>
            <p className="case-study-important-body">
              I also realized that different types of multimedia don’t exist in
              isolation. What if they could inform one another? For example, a
              color palette can be extracted from reference imagery, and a
              particular mood can be drawn from the images uploaded, which can
              inform the type of music that the user wants to listen to.
            </p>
          </div>
          <img
            className="case-study-img-right"
            width={400}
            src="assets/images/projects/inspofolio/color-palette.jpg"
          />
        </div>
        <p className="case-study-body">
          So, I decided to implement extra integration features: generating
          color palettes from the images users uploaded, and recommending music
          for their playlist based on the inferred mood of the images.
        </p>
        <p className="case-study-body">
          Finally, it was time to code everything up. I used Next.js and
          TypeScript for frontend development, and Firebase to manage backend
          operations: the database, image storage, and authentication.
        </p>
      </div>
      <div className="case-study-block" style={{ paddingTop: "2rem" }}>
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
        <CaseStudyHeading text="Result" />
        <p className="case-study-body">
          Here are a few pages from the final result, including the login page,
          project creation step, and dashboard.
        </p>
        <div className="case-study-images-full">
          <div className="case-study-img-container">
            <img
              className="case-study-img-full"
              src="assets/images/projects/inspofolio/inspofolio-1.png"
            />
          </div>
          <div className="case-study-img-container">
            <img
              className="case-study-img-full"
              src="assets/images/projects/inspofolio/inspofolio-2.png"
            />
          </div>
        </div>
        <div className="case-study-images-full">
          <div className="case-study-img-container">
            <img
              className="case-study-img-full"
              src="assets/images/projects/inspofolio/inspofolio-3.png"
            />
          </div>
          <div className="case-study-img-container">
            <img
              className="case-study-img-full"
              src="assets/images/projects/inspofolio/inspofolio-4.png"
            />
          </div>
        </div>
        <p className="case-study-body">
          You can try out the application{" "}
          <a href="https://inspofolio.vercel.app/" target="_blank">
            here.{" "}
          </a>{" "}
          Happy creating!
        </p>
      </div>
    </div>
  );
};

export default Inspofolio;
