import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Wiki from './pages/Wiki';
import Footer from './components/Footer';
import Publications from './pages/Publications';
import JoinUs from './pages/JoinUs';
import News from './pages/News';


function App() {
  return (
    <div className="App" style={{ backgroundColor: '#917f76' }}>
      <ChakraProvider>
        <Router>
          <Navigation />
          {/* Specifies pages of website */}
          <Routes>
            <Route path='/' element={Home()} />
            <Route path='about' element={AboutUs()} />
            <Route path='wiki' element={Wiki()} />
            <Route path='publications' element={Publications()} />
            <Route path='news' element={News()} />
            <Route path='join' element={JoinUs()} />
          </Routes>
          <Footer />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
