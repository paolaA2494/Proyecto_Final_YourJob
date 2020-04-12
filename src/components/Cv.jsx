import React from "react";
import TitleCv from "./TitleCv";
import ImageCv from "./ImageCv";
import QualificationCv from "./QualificationCv";
import DescripcionCv from "./DescripcionCv";
import PriceCv from "./PriceCv";
import ReserveCv from "./ReserveCv";
import SkillsAndExpCv from "./SkillsAndExpCv";
import Confirmation from "./Confirmation";

class Cv extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {  }
  }
  render() {
    return (
      <div className="container-fluid row justify-content-center">
        <div className="col-sm-6">
          <TitleCv />
          <ImageCv />
          <QualificationCv />
          <DescripcionCv />
          <PriceCv />
          <ReserveCv />
        </div>
        <SkillsAndExpCv />
        <Confirmation />
      </div>
    );
  }
}

export default Cv;
