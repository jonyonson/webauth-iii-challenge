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
        <h1>UserList</h1>
        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default requiresAuth(UserList);
