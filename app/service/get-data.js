const getDataApi = require('../api/get-data');

module.exports.getData = () => {
  return getDataApi.getData().then(
    response => {
      return response.data
    }
  ).catch(
    err => {console.log('GET DATA FAILED')}
  );
};
