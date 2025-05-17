import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="fog-overlay" />
      <h1 className="home-title">Welcome to Witcher World</h1>
      <button
        className="witcher-button"
        onClick={() => navigate('/characters')}
      >
        Explore Characters
      </button>
    </div>
  );
}

export default Home;
