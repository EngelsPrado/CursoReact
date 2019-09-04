import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router} from "@reach/router"
import Home from './Home'
import NotFound from './NotFound'



function App() {
  return (
    <div>
      <Router>
     
     <Home   path="/home" /> 

     <NotFound default />
    </Router>
    </div>
   );
}

export default App;
