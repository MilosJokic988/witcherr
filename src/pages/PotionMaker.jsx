// src/pages/PotionMaker.jsx
import { useState } from 'react';
import './PotionMaker.css';

const ingredients = [
  'Drowner Brain',
  'Celandine',
  'White Gull',
  'Aether',
  'Endrega Venom',
  'Han Fiber'
];

const recipes = {
  'Drowner Brain + Celandine': {
    name: 'Swallow',
    description: 'Heals vitality over time.'
  },
  'White Gull + Aether': {
    name: 'Thunderbolt',
    description: 'Increases attack power temporarily.'
  },
  'Endrega Venom + Han Fiber': {
    name: 'Golden Oriole',
    description: 'Grants poison immunity.'
  }
};

function PotionMaker() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [potion, setPotion] = useState(null);

  const handleSelect = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) return;
    if (selectedIngredients.length === 2) return;
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  const handleBrew = () => {
    if (selectedIngredients.length < 2) return;
    const key = selectedIngredients.join(' + ');
    setPotion(recipes[key] || { name: 'Unknown Potion', description: 'The mixture fizzles and fails.' });
  };

  const reset = () => {
    setSelectedIngredients([]);
    setPotion(null);
  };

  return (
    <div className="potion-maker">
      <h2>Potion Maker</h2>
      <p>Select 2 ingredients to brew a potion:</p>
      <div className="ingredients-list">
        {ingredients.map((ing) => (
          <button
            key={ing}
            className={`ingredient-button ${selectedIngredients.includes(ing) ? 'selected' : ''}`}
            onClick={() => handleSelect(ing)}
          >
            {ing}
          </button>
        ))}
      </div>
      <button className="brew-button" onClick={handleBrew} disabled={selectedIngredients.length < 2}>
        Brew
      </button>
      <button className="reset-button" onClick={reset}>Reset</button>
      {potion && (
        <div className="potion-result">
          <h3>{potion.name}</h3>
          <p>{potion.description}</p>
        </div>
      )}
    </div>
  );
}

export default PotionMaker;
