import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import UserList from './components/UserList';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/signin');
  };

  render() {
    return (
      <div className="app">
        <header>
          <nav>
            <NavLink activeClassName="active-navlink" to="/users">
              Users
            </NavLink>
            {!localStorage.getItem('jwt') && (
              <>
                <NavLink activeClassName="active-navlink" to="/signup">
                  Sign Up
                </NavLink>

                <NavLink activeClassName="active-navlink" to="/signin">
                  Login
                </NavLink>
              </>
            )}
            {localStorage.getItem('jwt') && (
              <button onClick={this.logout}>Logout</button>
            )}
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

export default withRouter(App);
