import { useState } from 'react';
import './Contracts.css';

const contracts = [
  {
    id: 1,
    title: 'Hunt the Griffin',
    description: 'A dangerous Griffin is terrorizing a nearby village. Eliminate it.',
    reward: '200 crowns',
    difficulty: 'High',
  },
  {
    id: 2,
    title: 'Clear the Drowners',
    description: 'The local river is infested with Drowners. Protect the villagers.',
    reward: '100 crowns',
    difficulty: 'Medium',
  },
  {
    id: 3,
    title: 'Investigate the Noonwraith',
    description: 'A Noonwraith haunts the old mill at night. Cleanse it.',
    reward: '150 crowns',
    difficulty: 'Medium',
  },
  {
    id: 4,
    title: 'Exterminate the Botchling',
    description: 'A Botchling is terrorizing the local hamlet. Find and destroy it..',
    reward: '180 crowns',
    difficulty: 'High',
  },
  {
    id: 5,
    title: 'Track the Ekimmara',
    description: 'An Ekimmara lurks in the nearby caves.Protect the miners.',
    reward: '160 crowns',
    difficulty: 'High',
  },
  {
    id: 6,
    title: 'Deal with the Foglet',
    description: 'A Foglet is attacking travelers near the swamps. Find and eliminate it.',
    reward: '130 crowns',
    difficulty: 'Medium',
  },
];


function Contracts() {
  const [acceptedContracts, setAcceptedContracts] = useState([]);

  const handleAccept = (id) => {
    if (!acceptedContracts.includes(id)) {
      setAcceptedContracts([...acceptedContracts, id]);
    }
  };

  const handleDecline = (id) => {
    setAcceptedContracts(acceptedContracts.filter(cid => cid !== id));
  };

  return (
    <div className="contracts">
      <h2>Witcher Contracts</h2>
      <p>Take on random contracts and hunt down monsters across the Continent.</p>
      <div className="contract-list">
        {contracts.map(contract => (
          <div key={contract.id} className="contract-card">
            <h3>{contract.title}</h3>
            <p>{contract.description}</p>
            <p><strong>Reward:</strong> {contract.reward}</p>
            <p><strong>Difficulty:</strong> {contract.difficulty}</p>
            {!acceptedContracts.includes(contract.id) ? (
              <button onClick={() => handleAccept(contract.id)}>Accept Contract</button>
            ) : (
              <button onClick={() => handleDecline(contract.id)} className="decline-btn">Cancel Contract</button>
            )}
          </div>
        ))}
      </div>
      {acceptedContracts.length > 0 && (
        <div className="accepted-contracts">
          <h3>Accepted Contracts</h3>
          <ul>
            {acceptedContracts.map(id => {
              const c = contracts.find(contract => contract.id === id);
              return <li key={id}>{c.title}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Contracts;
