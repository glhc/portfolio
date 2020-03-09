import React from "react";
import StyledCard from "./StyledCard";

/**
 * Card to display a project.
 */
export default function Card(props) {
  return (
    <StyledCard className="card">
      <div className="image-holder">
        {props.imageUrl ?
          <img src={props.imageUrl} alt="screenshot of the project"></img>
        :
        <h3 class="no-image">No Image Found</h3>
        }
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {props.title &&
            props.title
          }
        </h5>
        <p className="card-text">
          {props.description ?
            props.description
          :
            "la la lalala lal al al al lala lal al la la  la aala"
          }
        </p>
        <a className="card-button" href="#">See it Live</a>
      </div>
    </StyledCard>
  );
}
