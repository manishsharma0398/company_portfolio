import React from "react";

import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={props.to} className="card">
      <div className="card-bg">
        <img
          src={props.imgPath}
          alt={props.imgName == null ? "Image" : props.imgName}
        />
      </div>
      <div className="card-content">
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
      </div>
    </Link>
  );
};

export default Card;
