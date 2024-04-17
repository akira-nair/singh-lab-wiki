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

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Navigation />
          
          {/* <Switch> */}
          <Routes>
            <Route path='/' element={Home()}/>
            <Route path='/about' element={AboutUs()}>
            </Route>

          </Routes>
          {/* </Switch> */}
        </Router>
      {/* Other components and content of your app */}
      </ChakraProvider>
    </div>
  );
}

export default App;
