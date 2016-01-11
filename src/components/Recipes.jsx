import React from 'react';

export default class Recipes extends React.Component{
  
  render() {
    var recipe = this.props.recipes.map((recipe) => {
      return (
        <div className="recipe-card">
          <ul>
            <li><h3><i className="fa fa-book"></i> { recipe.name }</h3></li>
            <hr/>
            <li>
              <span className="head-text"><i className="fa fa-clock-o"></i> Prep Time: </span>{ recipe.prep } 
              <span id="cooktime"><span className="head-text"><i className="fa fa-clock-o"></i> Cook Time: </span>{ recipe.cook }</span></li>
            <hr/>
            <li><span className="head-text">Ingredients:</span>{ recipe.ingredients.map((ing) => { 
              return (
                    <div>
                      <ul>
                        <li>{ ing }</li>
                      </ul>
                    </div>
                  ) 
                 })}
            </li>
            <li><span className="head-text">Steps:</span>{ recipe.steps.map((step) => { 
              return (
                    <div>
                      <ul>
                        <li>{ step }</li>
                      </ul>
                    </div>
                  ) 
                 })}
            </li>
          </ul>
        </div>
      )
    });
    
    return(
      <div className="recipe-list">
        { recipe }
      </div>
    );
  }
}
