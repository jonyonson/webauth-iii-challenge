import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Container from '../components/Container';

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('jwt');
    config.headers.authorization = token;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

function NotLoggedIn() {
  return (
    <Container>
      <div className="not-authed-text">
        You must be logged in to view users. <Link to="/signin">Log in</Link>
      </div>
    </Container>
  );
}

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      // const notLoggedIn = <div>Please login to see our users</div>;
      const token = localStorage.getItem('jwt');
      return <>{token ? <Component {...this.props} /> : <NotLoggedIn />}</>;
    }
  };
}
