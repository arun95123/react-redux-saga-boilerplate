import http from './http';

export const getData = () => {
  return http.get('/data')
    .then(response => response.data)
    .catch(err => {console.log('/data called failed')});
}
