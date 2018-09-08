import { STORE_DATA } from '../actions/types';

const initialState = {
  content: {}
};

export default function(state = initialState, action){
  switch(action.type){
    case STORE_DATA:{
      return {
        ...state,
        content: action.data
      };
    }
    default:
        return state;
  }
};
