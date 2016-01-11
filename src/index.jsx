//require("../node_modules/materialize-css/dist/css/materialize.css")
import React from 'react';
import ReactDOM from 'react-dom';
import RecipeForm from './components/RecipeForm';
import Recipes from './components/Recipes';

export class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      recipes: [
        { name: 'Mac and Cheese',
          prep: 10,
          cook: 30,
          ingredients: ["Milk", "Cheese", "Macaroni"],
          steps: ["Step 1", "Step 2", "Step 3"]
         }
      ]
    }  
  }
  
  handleAddIngredient(newIng) {
    this.setState({
      ingredients: this.state.ingredients.concat([newIng])
    })
  }
  
	render() {
		return (
      <div>
<<<<<<< HEAD
        <RecipeForm add={this.handleAddIngredient.bind(this)}/>
				<Recipes recipes={this.state.recipes}/>
=======
        <RecipeForm />
		<Recipes />
>>>>>>> c3e019cfcb21de0dbe0c1504734077e1352af3cc
      </div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
