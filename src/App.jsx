import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authorization from './pages/Authorization';
import Terminals from './pages/Terminals';
import Customers from './pages/Customers';
import SideBar from './components/SideBar';

export default class App extends Component {
  state = {
    isLoggedIn: false
  };

  userLogIn = () => {
    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: !isLoggedIn
    }));
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <Router>
        <SideBar
          isLoggedIn={isLoggedIn}
          userLogIn={this.userLogIn} />
        <Switch>  
          <Route 
            path="/login"
            render={() => <Authorization
                            isLoggedIn={isLoggedIn}
                            userLogIn={this.userLogIn} />}
            exact />
          <Route 
            path="/"
            render={() => <h2>Main Page</h2>}
            exact />
          <Route
            path="/terminals"
            render={() => <Terminals
                            isLoggedIn={isLoggedIn} />} />
          <Route
            path="/buyers"
            render={() => <Customers 
                            isLoggedIn={isLoggedIn} />} />
          <Route        
            render={() => <h2>404 page</h2>} />
        </Switch>
      </Router> 
    );
  }  
}