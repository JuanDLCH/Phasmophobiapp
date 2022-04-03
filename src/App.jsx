import './App.css';
import { LandingPage } from './components/pages/LandingPage';
import { GhostDetails } from './components/pages/GhostDetails';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  return(
    <BrowserRouter>
    <header>
      <Link to='/'>
      </Link>
    </header>
    <main>
      <Routes>
        <Route path='/ghosts/:name' element={<GhostDetails />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </main>
  </BrowserRouter>
  );
}
