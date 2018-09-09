import { todosRef } from '../../config/firebase';
import { FETCH_TODOS, FETCH_TODOS_COMPLETE } from '../types';

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  dispatch({
    type: FETCH_TODOS,
    loading: true
  });
  todosRef.on('value', snapshot => {
    dispatch({
      type: FETCH_TODOS_COMPLETE,
      payload: snapshot.val(),
      loading: false
    });
  });
};
