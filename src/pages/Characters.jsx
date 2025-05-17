// src/pages/Characters.jsx
import './Characters.css';
import characters from '../data/characters';

function Characters() {
  return (
    <div className="characters-container">
      <h2>Witcher Characters</h2>
      <div className="character-cards">
        {characters.map((char, index) => (
          <div key={index} className="character-card">
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
            <p>{char.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
