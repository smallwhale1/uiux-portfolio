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
          A web application for artists to organize their multimedia references.
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
        <p className="case-study-body">
          As a hobby artist, I first thought about where I personally find
          reference media and inspiration, such as Pinterest, Instagram,
          YouTube, and Google. I surveyed my artist friends as well, asking them
          where they find references and how they go about organizing them.
        </p>
        <p className="case-study-body">
          I soon came to realize there was a common pain point:
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
      <div className="case-study-block">
        <CaseStudyHeading text="Process" />
        <p className="case-study-body">
          I began organizing my thoughts into the application’s pages:
        </p>
        <p className="case-study-body">
          Authentication First, the user would create an account and login,
          enabling them to manage a dashboard of projects, each containing the
          multimedia. To create a new project, users would go through steps
          guiding them through uploading images, adding any links (like to pins
          on Pinterest), and finally linking their Spotify to create a
          project-specific playlist. They would then be brought to their
          dashboard, where all their projects are displayed. Within a project,
          they are able to navigate to its different aspects: uploaded images,
          links, palette, and playlist.
        </p>
        <p className="case-study-body">
          <i>Simple right?</i>
        </p>
        <p className="case-study-body">
          Unfortunately, things didn't go all that smoothly. After mapping out
          the initial pages of the application, I realized that I wanted this
          new platform to be flexible, and this meant accounting for different
          user flows and paths. What if the user didn’t want to sign up for an
          account? Or if they didn’t want to link their Spotify? Routing became
          an unexpectedly complex problem, so I broke it down into a diagram:
        </p>
        <p className="case-study-body">
          Furthermore, I wanted to explore the integration aspect of the
          platform. These different aspects don’t exist in isolation, for
          example, a color palette can be drawn from reference imagery, and the
          mood can be drawn from the images chosen.
        </p>
        <p className="case-study-body">
          So, I decided to implement two integration features: extracting
          palettes imagery and recommending music based on the mood of the
          images.
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
        <CaseStudyHeading text="Result" />
        <p className="case-study-body">
          This is the final result, with the dashboard and project pages:
        </p>
        <p className="case-study-body">
          Here is the link to try it out. Happy creating!
        </p>
      </div>
    </div>
  );
};

export default Inspofolio;
