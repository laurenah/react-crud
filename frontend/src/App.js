// imports
import React from 'react';
import './App.css';
import {Security, LoginCallback} from '@okta/okta-react';
import config from './config.js';
import Blog from './components/Blog.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Admin from './components/Admin.js';
import BlogPost from './components/subcomponents/BlogPost.js';

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
                <Route exact path='/' component={Home} />
                <Route path='/implicit/callback' component={LoginCallback} />
                <Route exact path='/blog' component={Blog} />
                <Route path='/contact' component={Contact} />
                <Route path='/admin' component={Admin} />
                <Route 
                    path={'/blog/:postId'}
                    render={(props) => ( // allows for props to be passed like the post ID
                    <BlogPost {...props} />
                    )}
                />
              </Switch>
          </Security>
        </Router>
      </div>    
    );
  }
}

export default App;