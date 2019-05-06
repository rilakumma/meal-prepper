import React, { Component } from "react";
import "./Search.css";
import axios from "axios";
import Card from "../Card/Card";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      recipes: null,
      search: ""
    };
  }
  getRecipes() {
    axios
      .get(
        `https://api.edamam.com/search?q=${this.state.search}&to=50&app_id=b0d4ed40&app_key=
4c0680d563ce7f47682cea681756fbad`,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(res => {
        this.setState(
          {
            recipes: res.data.hits
          },
          () => {
            console.log(this.state.recipes);
          }
        );
      });
  }
  render() {
    const { recipes } = this.state;

    const showRecipes =
      recipes !== null &&
      recipes.map(recipe => {
        return <Card recipe={recipe.recipe} />;
      });
    return (
      <div className="search">
        <div className="bar">
          <input onChange={e => this.setState({ search: e.target.value })} className="search-bar" />
          <button onClick={() => this.getRecipes()}>Search</button>
        </div>
        <div className="display">{showRecipes}</div>
      </div>
    );
  }
}
