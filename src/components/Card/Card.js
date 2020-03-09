import React from "react";
import StyledCard from "./StyledCard";

/**
 * Card to display a project.
 */
export default function Card(props) {
  return (
    <StyledCard className="card">
      <div className="image-holder">
        <img src={props.imageUrl}></img>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text"></p>
        <a className="card-button" href="#">Go somewhere</a>
      </div>
    </StyledCard>
  );
}
