import React, { Component } from 'react';
import axios from 'axios';
import Container from './Container';
import requiresAuth from '../auth/requiresAuth';

class UserList extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const endpoint = 'http://localhost:5000/api/users';
    axios
      .get(endpoint)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
      .catch(({ response }) => {
        console.error('ERROR', response);
      });
  }

  render() {
    console.log('rerender');
    return (
      <Container>
        <h1>Our Users</h1>
        <ul className="user-list">
          {this.state.users.map(u => (
            <li className="user-list-item" key={u.id}>
              <span className="bold">username:</span> {u.username}
              {/* <br />
              <span className="bold">department:</span> {u.department} */}
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default requiresAuth(UserList);
