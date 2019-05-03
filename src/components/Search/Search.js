import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import Card from "../Card/Card";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      recipes: null
    };
  }
  componentDidMount() {
    let search = "vegetarian";
    axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=b0d4ed40&app_key=
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
    // axios.get(`https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}`).then(res => {
    //   console.log(res.data);
    // });
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
        <div className="display">{showRecipes}</div>
      </div>
    );
  }
}
