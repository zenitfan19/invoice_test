import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Authorization from './pages/Authorization';
import Terminals from './pages/Terminals';
import Customers from './pages/Customers';
import SideBar from './components/SideBar';

const App = () => (
  <Router>
    <SideBar />
    <Switch>      
      <Route 
        path="/"
        render={() => <h2>Main Page</h2>}
        exact />
      <Route
        path="/terminals"
        component={Terminals} />
      <Route
        path="/buyers"
        component={Customers} />
      <Route        
        render={() => <h2>404 page</h2>} />
    </Switch>
  </Router> 
);

export default App;