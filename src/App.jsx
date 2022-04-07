import './App.css';
import { LandingPage } from './pages/LandingPage';
import { GhostDetails } from './pages/GhostDetails';
import { VoiceLines } from './pages/VoiceLines';
import { GhostBuster } from './pages/GhostBuster';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavbarComp from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavbarComp />
      </div>
      <main>
        <Routes>
          <Route path='/voicelines/:name' element={<VoiceLines  />} />
          <Route path='/ghosts/:name' element={<GhostDetails />} />
          <Route path='/ghostbuster' element={<GhostBuster />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
