import React from 'react';

export default class extends React.Component{
  constructor() {
    super();
    this.state = {
      recipes: [
        {
          name: "Mac and Cheese",
          prep: 30,
          cook: 60,
          ingredients: ["Milk", "Cheese", "Macaroni"],
          steps: ["Step 1", "Step 2", "Step 3"]
        },
        {
          name: "Spagette",
          prep: 10,
          cook: 30,
          ingredients: ["Tomato sauce", "Pasta", "MacaParmesaroni"],
          steps: ["Step 1", "Step 2", "Step 3"]
        }
      ]
    }  
  }
  
  render() {

    var recipe = this.state.recipes.map((recipe) => {
      return (
        <div>
          <ul>
            <li>{ recipe.name }</li>
            <li>{ recipe.prep }</li>
            <li>{ recipe.cook }</li>
            <li>{ recipe.ingredients.map((ing) => { 
              return (
                <div>
                  <ul>
                    <li>{ ing }</li>
                  </ul>
                </div>
              ) 
            })}
            </li>
            <li>{ recipe.steps.map((step) => { 
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
