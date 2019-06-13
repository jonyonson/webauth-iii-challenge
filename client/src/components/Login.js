import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: '',
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:5000/api/login';
    const { username, password } = this.state;
    axios
      .post(endpoint, { username, password })
      .then(res => {
        console.log(res.data);
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/users');
      })
      .catch(error => {
        this.setState({ error: error.response.data.message });
        // console.log(error.response.data.message);
      });
  };

  render() {
    return (
      <div className="auth">
        <div className="auth-card">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Username"
              name="username"
              autoComplete="off"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />
            <input
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
            <button type="submit">Login</button>
          </form>
          <div className="auth-text">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
        {this.state.error && (
          <div className="auth-error">{this.state.error}</div>
        )}
      </div>
    );
  }
}

export default Login;
