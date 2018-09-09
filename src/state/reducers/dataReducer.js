import { FETCH_TODOS, FETCH_TODOS_COMPLETE } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, loading: true };
    case FETCH_TODOS_COMPLETE:
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
};
