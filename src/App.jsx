import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authorization from './pages/Authorization';
import Terminals from './pages/Terminals';
import Customers from './pages/Customers';
import SideBar from './components/SideBar';
import burgerIcon from './assets/images/burger-menu-icon.svg';
import './App.scss';

export default class App extends Component {
  state = {
    isLoggedIn: false,
    userName: null,
    mobileMenuOpened: false
  };

  userLogIn = (userName = null) => {
    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: !isLoggedIn,
      userName
    }));
  }

  toggleMobileMenu = (e) => {
    const clickedElement = e.target;

    if (clickedElement.closest('.side-bar') === null || clickedElement.tagName === 'A') {      
      this.setState(({ mobileMenuOpened }) => {
        return ({
          mobileMenuOpened: !mobileMenuOpened
        });
      });
    }

    return false;
  };

  render() {
    const { isLoggedIn, userName, mobileMenuOpened } = this.state;
    const burgerClass = mobileMenuOpened ? 'burger-menu-btn opened' : 'burger-menu-btn';
    const handleDocumentClick = mobileMenuOpened
                                  ? (e) => this.toggleMobileMenu(e)
                                  : null;
    const handleBurgerClick = !mobileMenuOpened
                                  ? (e) => this.toggleMobileMenu(e)
                                  : null;

    return (
      <div
        className="app"
        onClick={handleDocumentClick}>
        <div
          className={burgerClass}
          onClick={handleBurgerClick}>
            <img src={burgerIcon} alt="burger-menu-icon"/>
        </div>
        <Router>
          <SideBar
            isLoggedIn={isLoggedIn}
            userLogIn={this.userLogIn}
            userName={userName}
            mobileMenuOpened={mobileMenuOpened} />
          <div className="content-bar">
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
          </div>
        </Router>
      </div>
    );
  }  
}