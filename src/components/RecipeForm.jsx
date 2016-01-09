import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div>
        <form>
      
          <div>
            <input type="text" id="name" placeholder="Recipe Name" min="0"/>
          </div>
        
          <div>
            <input type="number" id="prep" name="prep" placeholder="Prep Time in minutes" min="0"/>
          </div>
        
          <div>
            <input type="number" id="cook" name="cook" placeholder="Cook Time"/>
          </div>

          <div>
            <textarea id="ingredients" class="materialize-textarea" placeholder="Ingredients"></textarea>
          </div>

          <div>
            <textarea id="steps" class="materialize-textarea" placeholder="Steps"></textarea>
          </div>
        
          <input id="add" type="submit" value="Add"/>
        
        </form>
      </div>
    )
  }
}