import React from "react";

const WholeRecipe = ({ recipe }) => {
  return (
    <div className='recipe-popup'>
      <h2 className='popup recipe-name'>{recipe.name}</h2>
      <div className='popup recipe-info'>
        <div>
          <div className='ingredients-list-title'>
            <b>Ingredients:</b>
          </div>
          <div className='ingredients-list-container'>
            {recipe.ingredients.map((ingredientElement, idx) => (
              <div className='individual-ingredient' key={idx}>
                {/* <div className='ingredient-name'> */}
                {ingredientElement.ingredient}, {/* </div> */}
                {ingredientElement.estimated_amount
                  ? ingredientElement.estimated_amount
                  : null}
                {ingredientElement.measured_amount
                  ? `${ingredientElement.measured_amount} ${ingredientElement.measured_unit}`
                  : null}
              </div>
            ))}
          </div>
        </div>
        <div className='recipe-image'>Image here</div>
      </div>
    </div>
  );
};

export default WholeRecipe;
