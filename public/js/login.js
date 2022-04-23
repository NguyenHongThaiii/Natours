/* eslint-disable */
const axios = require('axios');
import { showAlert } from './alert.js';
export const login = async (email, password) => {
  try {
    const res = await axios.post('http://localhost:3000/api/v1/users/login', {
      email,
      password,
    });
    // const res = await axios({
    //   method: 'POST',
    //   url: 'http://127.0.0.1:3000/api/v1/users/login',
    //   data: {
    //     email,
    //     password
    //   }
    // });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    // console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/v1/users/logout');
    // const res = await axios({
    //   method: 'GET',
    //   url: 'http://127.0.0.1:3000/api/v1/users/logout',
    // });
    if ((res.data.status = 'success')) {
      window.setTimeout(() => {
        location.assign('/');
      }, 500);
    }
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};
