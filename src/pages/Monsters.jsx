// src/pages/Monsters.jsx
import './Monsters.css';
import monsters from '../data/monsters';

function Monsters() {
  return (
    <div className="monsters-container">
      <h2>Monsters of the Continent</h2>
      <div className="monster-cards">
        {monsters.map((monster, index) => (
          <div key={index} className={`monster-card danger-${monster.danger.toLowerCase()}`}>
            <img src={monster.image} alt={monster.name} />
            <h3>{monster.name}</h3>
            <p>Danger Level: {monster.danger}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Monsters;
