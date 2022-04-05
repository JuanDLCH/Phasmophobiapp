import './App.css';
import { LandingPage } from './components/pages/LandingPage';
import { GhostDetails } from './components/pages/GhostDetails';
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
          <Route path='/ghosts/:name' element={<GhostDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
