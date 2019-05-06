import React, { Component } from "react";
import "./Home.css";
import Search from "../Search/Search";
// import axios from "axios";
// import Card from "../Card/Card";

export default class Home extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       recipes: null
  //     };
  //   }
  //   componentDidMount() {
  //     let search = "vegetarian";
  //     axios
  //       .get(
  //         `https://api.edamam.com/search?q=${search}&to=50&app_id=b0d4ed40&app_key=
  // 4c0680d563ce7f47682cea681756fbad`,
  //         { headers: { "Access-Control-Allow-Origin": "*" } }
  //       )
  //       .then(res => {
  //         this.setState(
  //           {
  //             recipes: res.data.hits
  //           },
  //           () => {
  //             console.log(this.state.recipes);
  //           }
  //         );
  //       });
  //     // axios.get(`https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}`).then(res => {
  //     //   console.log(res.data);
  //     // });
  //   }
  render() {
    // const { recipes } = this.state;

    // const showRecipes =
    //   recipes !== null &&
    //   recipes.map(recipe => {
    //     return <Card recipe={recipe.recipe} />;
    //   });
    return (
      <div className="home">
        <header className="header">
          <span>Meal Prepper</span>
          <ul>
            <li>Login</li>
          </ul>
        </header>
        {/* <div className="banner">
          <p>
            Welcome to Meal Prepper. We make it easy for you to find recipes, add them to your calendar and keep track of what you've made
            and want to try.
          </p>
        </div> */}
        {/* <div className="display">{showRecipes}</div> */}
        <Search />
      </div>
    );
  }
}
