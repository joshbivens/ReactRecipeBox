//require("../node_modules/materialize-css/dist/css/materialize.css")
import React from 'react';
import ReactDOM from 'react-dom';
import RecipeForm from './components/RecipeForm';

export class App extends React.Component {
	render() {
		return (
      <div>
        <RecipeForm />
      </div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
