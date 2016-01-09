import React from 'react';

export default class Recipes extends React.Component{
  
  render() {
    var recipe = this.props.recipes.map((recipe) => {
      return (
        <div>
          <ul>
            <li>{ recipe.name }</li>
            <li>{ recipe.prep }</li>
            <li>{ recipe.cook }</li>
            <li>Ingredients:{ recipe.ingredients.map((ing) => { 
              return (
                    <div>
                      <ul>
                        <li>{ ing }</li>
                      </ul>
                    </div>
                  ) 
                 })}
            </li>
            <li>Steps:{ recipe.steps.map((step) => { 
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
      <div>
        { recipe }
      </div>
    );
  }
}
