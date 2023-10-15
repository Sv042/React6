import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Sarthak Verma</h1>
          <p>3rd Year Student</p>
          <a href="https://www.linkedin.com/in/sarthak-verma-7a0a02283/">LinkedIn</a>
          <p>Contact: 9667163340</p>
          <nav>
            <ul>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
