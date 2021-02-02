import './App.css';
// React-router-dom comprend l'API de routage requise pour les navigateurs
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Router path="/" exact />
        </Switch>
      </Router>

    </>
    
  );
}

export default App;
