import React from 'react';

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl}></img>
      <h2 className="card-title">{props.title}</h2>
      <p></p>
    </div>
  );
}
