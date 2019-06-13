import React, { Component } from 'react';
import axios from 'axios';

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
    return (
      <div>
        <h1>UserList</h1>
        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default requiresAuth(UserList);
