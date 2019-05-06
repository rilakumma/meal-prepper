import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.recipe.image} alt="recipe" className="pic" />
      <div className="card-text">
        <h1>{props.recipe.label}</h1>
        <button>Details</button>
      </div>
      {/* <div className="info">
        <h2>Servings: {props.recipe.yeild}</h2>
        <ul>
          {props.recipe.ingredientLines.map(ingredient => {
            return <li>{ingredient}</li>;
          })}
        </ul>
        <a href={props.recipe.url}>Directions Here</a>
      </div> */}
    </div>
  );
}
