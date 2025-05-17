import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Characters from './pages/Characters';
import Monsters from './pages/Monsters';
import PotionMaker from './pages/PotionMaker';
import Contracts from './pages/Contracts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />               {/* ovo je "/" */}
          <Route path="about" element={<About />} />
          <Route path="characters" element={<Characters />} />
          <Route path="monsters" element={<Monsters />} />
          <Route path="potion-maker" element={<PotionMaker />} />
          <Route path="contracts" element={<Contracts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
