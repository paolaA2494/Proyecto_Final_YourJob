import React from "react";
import estrella from "../images/estrella.png";
const QualificationCv = (props) => {
  return (
    <div className="d-flex justify-content-center my-4">
      <h2 className="text-center">
        <img src={estrella} className="cards-img" width="5px" />
        4.7
      </h2>
    </div>
  );
};

export default QualificationCv;
