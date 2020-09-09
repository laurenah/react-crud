// imports
import React from 'react';
import './App.css';
import {Security, LoginCallback} from '@okta/okta-react';
import config from './config.js';
import Blog from './components/blog.js';
import Contact from './components/contact.js';
import Home from './components/home.js';
import Admin from './components/admin.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Root React Component
class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Security {...config}>
              <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/implicit/callback' component={LoginCallback} />
                <Route path='/blog' component={Blog} />
                <Route path='/contact' component={Contact} />
                <Route path='/admin' component={Admin} />
              </Switch>
          </Security>
        </Router>
      </div>    
    );
  }
}

export default App;