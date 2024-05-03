import "../../styles/CaseStudy.css";
import CaseStudyHeading from "./CaseStudyHeading";
import Tool from "../Tool";

type Props = {};

const tools = ["HTML", "CSS", "JavaScript"];

const ResponsiveRedesign = (props: Props) => {
  return (
    <div className="case-study">
      <div className="case-study-block">
        <CaseStudyHeading text="Case Study" />
        <h2 className="case-study-title">Responsive Redesign</h2>
        <p className="case-study-description">
          A responsive redesign of a local bakery website, focusing on usability
          and accesibility.
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
      <div className="case-study-block case-study-dark">
        <CaseStudyHeading text="Identifying Issues" />
        <p className="case-study-body">
          This is the current home page for Let Them Eat Cake:
        </p>
        <div className="case-study-images">
          <img
            className="case-study-img"
            width={400}
            src="assets/images/case-studies/let-them-eat-original.png"
          />
          <img
            className="case-study-img"
            width={400}
            src="assets/images/projects/responsive/original-2.png"
          />
        </div>

        <p className="case-study-body">
          Not bad at all, but after interacting with their site, which you can
          visit here, I noted a few main issues:
        </p>
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
      <div className="case-study-block" style={{ paddingTop: "2rem" }}>
        <CaseStudyHeading text="Process" />
        <p className="case-study-body">
          With the problems identified, I set out to redesign the interface. I
          began with a few sketches that turned into low fidelity prototypes,
          seeking to address the usability issues above:
        </p>
        <div className="case-study-images">
          <img
            height={400}
            className="case-study-img"
            src="assets/images/projects/responsive/desktop-lofi.png"
          />
          <img
            height={400}
            className="case-study-img"
            src="assets/images/projects/responsive/desktop-lofi.png"
          />
          <img
            height={400}
            className="case-study-img"
            src="assets/images/projects/responsive/desktop-lofi.png"
          />
        </div>
        <p className="case-study-body">
          Based on these initial designs, I developed a style guide that
          addressed the prevalent contrast issue throughout the page:
        </p>
        <div className="case-study-images">
          <img
            className="case-study-img"
            width={500}
            src="assets/images/projects/responsive/style-guide.png"
          />
        </div>
        <p className="case-study-body">
          Finally, I developed a high fidelity prototype of the new interface
          before coding the website in HTML/CSS, completing the design process:
        </p>
        <div className="case-study-images-full">
          <div className="case-study-img-container">
            <img
              className="case-study-img-full"
              src="assets/images/projects/responsive/hifi-1.png"
            />
          </div>
          <div className="case-study-img-container">
            <img
              className="case-study-img-full"
              src="assets/images/projects/responsive/hifi-2.png"
            />
          </div>
        </div>
      </div>
      <div className="case-study-images-full">
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
      </div>
      <div className="case-study-images-full">
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
      </div>
    </div>
  );
};

export default ResponsiveRedesign;
