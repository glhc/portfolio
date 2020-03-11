import React from "react";
import StyledCard from "./StyledCard";

/**
 * Card to display a project.
 */
export default function Card(props) {
  return (
    <StyledCard className="card">
      <div className="image-holder">
        {props.image ?
          <img className="card-image" src={props.image} alt="screenshot of the project"></img>
        :
        <h3 className="no-image">No Image Found</h3>
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
        <div className="card-button-container">
          {props.siteUrl &&
            <a className="card-button live" href={props.siteUrl}>Visit Site</a>
          }
          {props.codeUrl &&
            <a className="card-button code" href={props.codeUrl}>View Code</a>
          }
        </div>
      </div>
    </StyledCard>
  );
}
