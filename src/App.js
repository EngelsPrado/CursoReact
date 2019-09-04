import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router} from "@reach/router"
import Home from './Home'
import NotFound from './NotFound'
import Estado from './Estado'

function App() {
  return (
    <div>
      <Router>
     
     <Home   path="/home" /> 
      <Estado path="/estado"/>
     <NotFound default />
    </Router>
    </div>
   );
}

export default App;
