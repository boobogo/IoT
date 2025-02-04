// App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import IoT from './pages/IoT';
import Trade from './pages/Trade';
import { ThemeContext } from './context/ThemeContext';
import './styles/global.css';
import { Sun, Moon } from 'lucide-react';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Router>
      <div className="app">
        <Header />
        <button
          onClick={toggleTheme}
          className="w-10 h-10 absolute top-0 right-0" 
        >
          {theme === 'light' ? <Moon className="text-white"/> : <Sun className="text-white"/>}
        </button>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/IoT" element={<IoT />} />
            <Route path="/trade" element={<Trade />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;