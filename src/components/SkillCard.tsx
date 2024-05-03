import "../styles/SkillCard.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Skill } from "../util/interfaces";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [cardInView, setCardInView] = useState(false);

  useEffect(() => {
    if (inView) {
      setCardInView(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`skill-card ${cardInView && "skill-card-visible"} btn-text`}
      style={{
        color: "#000000",
      }}
    >
      {skill.icon} {skill.skill}
    </div>
  );
};

export default SkillCard;
