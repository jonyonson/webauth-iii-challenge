import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import UserList from './components/UserList';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <nav>
            <NavLink activeClassName="active-navlink" to="/users">
              Users
            </NavLink>
            <NavLink activeClassName="active-navlink" to="/signup">
              Sign Up
            </NavLink>
            <NavLink activeClassName="active-navlink" to="/signin">
              Login
            </NavLink>
          </nav>
        </header>
        <main>
          <Route path="/users" component={UserList} />
          <Route path="/signup" component={Register} />
          <Route path="/signin" component={Login} />
        </main>
      </div>
    );
  }
}

export default App;
