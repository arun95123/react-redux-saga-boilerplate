const axios = require('axios');

module.exports.getData = () => {
  const options = {
    method:'get',
    url:'http://localhost:3232/data'
  }
  return axios(options);
};
