import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { ChakraProvider } from '@chakra-ui/react';
import Banner from './components/Banner';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Wiki from './pages/Wiki';
import LinuxOscar from './pages/wiki/LinuxOscar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#917f76' }}>
      <ChakraProvider>
        <Router>
          <Navigation />

          {/* <Switch> */}
          <Routes>
            <Route path='/' element={Home()} />
            <Route path='/about' element={AboutUs()} />
            <Route path='wiki' element={Wiki()}>
              <Route path='linux_and_oscar' element={LinuxOscar()}/>
            </Route>

          </Routes>
          {/* </Switch> */}
          <Footer />
        </Router>
        {/* Other components and content of your app */}
      </ChakraProvider>
    </div>
  );
}

export default App;
