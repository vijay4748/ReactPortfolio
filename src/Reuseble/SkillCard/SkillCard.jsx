import React from "react";
import "./SkillCard.css";
const SkillCard = ({ logoSrc, altText, skillName }) => {
  return (
    <div className="skill-logo-Card">
      <img className="logo-img" src={logoSrc} alt={altText} />
      <p className="logo-name">{skillName}</p>
    </div>
  );
};

export default SkillCard;
