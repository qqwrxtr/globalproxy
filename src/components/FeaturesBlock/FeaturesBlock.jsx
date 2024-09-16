import "./featuresblock.css";
import React from "react";

const FeaturesBlock = (props) => {
  return (
    <div className="features_block">
      <div className="content_features">
        <div className="img_features">
          <img src={props.img} alt="" />
        </div>
        <div className="text_features">
          <div className="title_features">
            <p>{props.title}</p>
          </div>
          <div className="subtitle_features">
            <p>{props.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBlock;
