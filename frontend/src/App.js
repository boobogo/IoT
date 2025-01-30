// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import IoT from './pages/IoT';
import Trade from './pages/Trade';
import './styles/global.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
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