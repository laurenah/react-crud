import React from 'react';
import './App.css';
import {Security, LoginCallback} from '@okta/okta-react';
import config from './config.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Home from './components/home.js';
import Admin from './components/admin.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Root React Component
class App extends React.Component {

  render() {
    return (
      <div class='outer-container'>
        <Router>
          <Security {...config}>
            <div>
              <ul class='nav'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>

              <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/implicit/callback' component={LoginCallback} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/admin' component={Admin} />
              </Switch>
            </div>
          </Security>
        </Router>
      </div>      
    );
  }
}

export default App;