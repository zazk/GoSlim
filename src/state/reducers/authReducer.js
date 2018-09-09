import { FETCH_USER } from '../types';

export default (state = false, action) => {
  switch (action.type) {
    case FETCH_USER:
      console.log('AUTH', action.payload);
      return action.payload || null;
    default:
      return state;
  }
};
