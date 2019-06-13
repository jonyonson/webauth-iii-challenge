import React from 'react';
import axios from 'axios';

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

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const notLoggedIn = <div>Please login to see our users</div>;
      const token = localStorage.getItem('jwt');
      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
