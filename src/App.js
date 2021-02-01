import './App.css';
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
