import React from "react";
import SkillsCv from "./SkillsCv";
import ExperienceCv from "./ExperienceCv";

const SkillsAndExpCv = (props) => {
  return (
    <div className="d-flex container-fluid">
      <SkillsCv />
      <ExperienceCv />
    </div>
  );
};

export default SkillsAndExpCv;
