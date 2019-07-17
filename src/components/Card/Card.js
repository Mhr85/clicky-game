import React from "react";

import "./Card.css";

const Card = props => (
    <div className="Card col-md-3 mt-3" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "",)} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default Card;