//require("../node_modules/materialize-css/dist/css/materialize.css")
import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
	render() {
		return (
      <div>
        <h1>Hello World!</h1>
      </div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
