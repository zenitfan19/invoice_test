import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authorization from './pages/Authorization';
import Terminals from './pages/Terminals';
import Customers from './pages/Customers';
import DetailedCustomer from './pages/DetailedCustomer';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import SideBar from './components/SideBar';
import burgerIcon from './assets/images/burger-menu-icon.svg';
import './App.scss';

export default class App extends Component {
  state = {
    isLoggedIn: !!sessionStorage.getItem('testApp_isLoggedIn'),
    userName: sessionStorage.getItem('testApp_userName'),
    mobileMenuOpened: false
  };

  userLogIn = (userName = null) => {
    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: !isLoggedIn,
      userName
    }));

    if (userName) {
      sessionStorage.setItem('testApp_isLoggedIn', true);
      sessionStorage.setItem('testApp_userName', userName);
    } else {
      sessionStorage.removeItem('testApp_isLoggedIn');
      sessionStorage.removeItem('testApp_userName');
    }
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

  // componentDidMount() {
  //   const isLoggedIn = sessionStorage.getItem('testApp_isLoggedIn');
  //   const userName = sessionStorage.getItem('testApp_userName');

  //   console.log(isLoggedIn);
  //   if (isLoggedIn) {
  //     this.setState({
  //       isLoggedIn,
  //       userName
  //     });
  //   }
  // }

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
                render={() => <MainPage 
                                isLoggedIn={isLoggedIn} />}
                exact />
              <Route
                path="/terminals"
                render={() => <Terminals
                                isLoggedIn={isLoggedIn} />} />
              <Route
                path="/buyers"
                render={() => <Customers 
                                isLoggedIn={isLoggedIn} />}
                exact/>
              <Route
                path="/buyers/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <DetailedCustomer 
                          isLoggedIn={isLoggedIn}
                          userId={id} />;
                }} />
              <Route        
                render={() => <NotFoundPage /> } />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }  
}