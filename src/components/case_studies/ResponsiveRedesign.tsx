import "../../styles/CaseStudy.css";
import CaseStudyHeading from "./CaseStudyHeading";
import Tool from "../Tool";

type Props = {};

const tools = ["HTML", "CSS", "Figma"];

const ResponsiveRedesign = (props: Props) => {
  return (
    <div className="case-study">
      <div className="case-study-block">
        <CaseStudyHeading text="Case Study" />
        <div className="flex-horizontal">
          <div className="flex-vertical">
            <h1 className="case-study-title">Responsive Redesign</h1>
            <p className="case-study-description">
              A <i>responsive redesign</i> of a local bakery website, focusing
              on usability and accesibility.
            </p>
            <div className={"tools"}>
              {tools.map((tool) => (
                <Tool key={tool} tool={tool} />
              ))}
            </div>
          </div>
          <div className="case-study-side">
            <h3>Role</h3>
            <p>Frontend Designer/Developer</p>
            <br />
            <h3>Timeline</h3>
            <p>February 2024 - March 2024</p>
          </div>
        </div>
      </div>
      <div className="case-study-block">
        <CaseStudyHeading text="Problem" />
        <p className="case-study-body">
          In the digital age, having an easy-to-use, accessible website has
          become a necessity for businesses. However, crafting an interface to
          support the diverse range of users that interact with it is difficult:
          users might be browsing on mobile devices, have difficulty
          differentiating between colors, or just be impatient and in a hurry.
        </p>
        <p className="case-study-body">
          A local bakery near me, Let Them Eat Cake, has a great website, but
          fails to address some of these concerns. For example, the color and
          image choices make certain areas particularly difficult to read. I
          redesigned the home page of their site to craft an interface that
          would improve its usability and accessibility for a variety of users.
        </p>
      </div>

      <div className="case-study-block">
        <CaseStudyHeading text="Identifying Issues" />
        <div className="case-study-flex">
          <div className="case-study-left-text">
            <h3 className="case-study-section-heading">
              <i>Analyzing</i> the current site
            </h3>
            <p className="case-study-important-body">
              Take a look at the current home page for Let Them Eat Cake. You
              can visit their site here.
            </p>
            <p className="case-study-important-body">
              While I like the decorative feeling of the page, after interacting
              with their site, which you can visit here, I noted a few main
              issues.
            </p>
          </div>
          <img
            alt="let them eat cake homepage"
            className="case-study-img-right"
            width={400}
            src="assets/images/case-studies/let-them-eat-original.png"
          />
        </div>

        <div className="case-study-points">
          <div className="case-study-point-container">
            <h4 className="case-study-point-header">color</h4>
            <p className="case-study-body case-study-point">
              Colors are very low contrast in many areas, meaning those with
              vision impairments might be unable to read the page.
            </p>
          </div>
          <div className="case-study-point-container">
            <h4 className="case-study-point-header">layout</h4>
            <p className="case-study-body case-study-point">
              There are multiple layers of navigation at the top of the screen,
              and navigation links are often repeated unnecessarily, creating
              clutter that makes it potentially confusing for users to navigate
              to the pages they want.
            </p>
          </div>
          <div className="case-study-point-container">
            <h4 className="case-study-point-header">findability</h4>
            <p className="case-study-body case-study-point">
              Users seeking to find the hours and the location have to scroll
              all the way to the bottom, meaning important information is
              hidden.
            </p>
          </div>
        </div>
      </div>
      <div className="case-study-block case-study-dark">
        <CaseStudyHeading text="Process" />
        <p className="case-study-body">
          With the problems identified, I set out to redesign the interface. I
          began with a few sketches that turned into low fidelity prototypes,
          seeking to address issues including those listed above.
        </p>
        <div className="case-study-images-full">
          <div className="case-study-img-container">
            <img
              alt="figma desktop lofi of redesigned website"
              className="case-study-img-full"
              src="assets/images/projects/responsive/desktop-lofi.png"
            />
          </div>

          <div className="case-study-img-container">
            <img
              alt="figma tablet lofi of redesigned website"
              className="case-study-img-full"
              src="assets/images/projects/responsive/tablet-lofi.png"
            />
          </div>
          <div className="case-study-img-container">
            <img
              alt="figma mobile lofi of redesigned website"
              className="case-study-img-full"
              src="assets/images/projects/responsive/mobile-lofi.png"
            />
          </div>
        </div>
        <div className="case-study-flex">
          <div className="case-study-left-text">
            <h3 className="case-study-section-heading">Style Guide</h3>
            <p className="case-study-important-body">
              Based on these initial designs, I developed a style guide with my
              main components that addressed the prevalent contrast issue
              throughout the page.
            </p>
          </div>
          <img
            alt="style guide of redesigned website"
            className="case-study-img-right"
            width={400}
            src="assets/images/projects/responsive/style-guide.png"
          />
        </div>

        <p className="case-study-body">
          Finally, I developed high fidelity prototypes of the new interface
          before coding the website in HTML/CSS, completing the design process.
        </p>

        <div className="case-study-img-container">
          <img
            alt="hifi profotypes of redesigned website"
            className="case-study-img-full"
            src="assets/images/projects/responsive/hifis.png"
          />
        </div>
      </div>

      <div className="case-study-block" style={{ paddingTop: "2rem" }}>
        <CaseStudyHeading text="Learnings" />
        <p className="case-study-body">
          Throughout this process, I learned how important it is to identify the
          core usability issues before implementing an interface. This ensures
          that the user is always kept at the center of the design process.
        </p>
        <p className="case-study-body">
          I also learned to break up the development process into different
          high-level steps in order to keep my thought process organized. This
          helped me visualize the product holistically before diving into the
          details of implementation.
        </p>
      </div>
      <div className="case-study-block">
        <CaseStudyHeading text="Result" />
        <p className="case-study-body">
          Based on the high fidelity prototype, I coded the redesign in HTML/CSS
          with a bit of JavaScript for responsiveness. You can visit the
          redesigned website{" "}
          <a href="https://smallwhale1.github.io/cs1300-responsive-redesign/">
            here!
          </a>
        </p>
        <img
          alt="demo of redesigned website"
          className="img-small"
          src="assets/images/projects/responsive/responsive-gif.gif"
        />
        {/* <div className="case-study-images-full">
          <div className="case-study-img-container">
            <img
              className="case-study-img-full"
              src="assets/images/projects/responsive/responsive-1.png"
            />
          </div>
          <div className="case-study-img-container">
            <img
              className="case-study-img-full"
              src="assets/images/projects/responsive/responsive-2.png"
            />
          </div>
        </div> */}
        {/* <div className="case-study-images-full">
          <div className="case-study-img-container">
            <img
              className="case-study-img-full"
              src="assets/images/projects/responsive/responsive-3.png"
            />
          </div>
          <div className="case-study-img-container">
            <img
              className="case-study-img-full"
              src="assets/images/projects/responsive/responsive-4.png"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ResponsiveRedesign;
