import {
  GET_DATA,
  STORE_DATA
} from './types'

export const getData = () => {
  return {
    type: GET_DATA
  };
};

export const storeData = (data) => {
  return {
    type: STORE_DATA,
    data: data
  };
};
