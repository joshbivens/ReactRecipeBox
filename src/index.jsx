//require("../node_modules/materialize-css/dist/css/materialize.css")
require('../public/css/main.css');

import React from 'react';
import ReactDOM from 'react-dom';
import RecipeForm from './components/RecipeForm';
import Recipes from './components/Recipes';

export class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      recipes: [
         { 
          name: 'Mac and Cheese',
          prep: 10,
          cook: 30,
          ingredients: ["Milk", "Cheese", "Macaroni"],
          steps: ["Step 1", "Step 2", "Step 3"]
         },
         { 
          name: 'Mac and Cheese',
          prep: 10,
          cook: 30,
          ingredients: ["Milk", "Cheese", "Macaroni"],
          steps: ["Step 1", "Step 2", "Step 3"]
         },
         { 
          name: 'Mac and Cheese',
          prep: 10,
          cook: 30,
          ingredients: ["Milk", "Cheese", "Macaroni"],
          steps: ["Step 1", "Step 2", "Step 3"]
         },
         { 
          name: 'Mac and Cheese',
          prep: 10,
          cook: 30,
          ingredients: ["Milk", "Cheese", "Macaroni"],
          steps: ["Step 1", "Step 2", "Step 3"]
         },
      ]
    }
  }

	render() {
		return (
      <div className="container">
        <header>
          <h1>React Recipe Box</h1>
        </header>
        <RecipeForm></RecipeForm>
        <h2>Recently Added</h2>
				<Recipes recipes={this.state.recipes}></Recipes>

      </div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
