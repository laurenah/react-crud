import React from 'react';
import './App.css';
import {Security, LoginCallback} from '@okta/okta-react';
import config from './config.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Home from './components/home.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super (props)
    this.state = {users: []}
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users: users}));
  }

  render() {
    return (
      <Router>
        <Security {...config}>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>

            <Switch>
              <Route path='/' exact={true} component={Home} />
              <Route path='/implicit/callback' component={LoginCallback} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>

            <div className='users'>
              <h1>Users</h1>
              {this.state.users.map(user => 
                <div key={user.id}>{user.name} - {user.email}</div>
              )}
            </div>
          </div>
        </Security>
      </Router>        
    );
  }
}

export default App;