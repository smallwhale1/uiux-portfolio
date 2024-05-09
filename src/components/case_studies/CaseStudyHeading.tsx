import React from "react";

type Props = {
  text: string;
};

const CaseStudyHeading = ({ text }: Props) => {
  return (
    <div className="case-study-heading">
      <h2 className="case-study-heading-text">{text}</h2>
      <hr />
    </div>
  );
};

export default CaseStudyHeading;
