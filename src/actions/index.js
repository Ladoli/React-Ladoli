import { ladoliProjects } from "../config/firebase";
import { FETCH_PROJ} from "./types";

export const addToDo = newToDo => async dispatch => {
  ladoliProjects.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  ladoliProjects.child(completeToDoId).remove();
};

export const fetchProj = () => async dispatch => {
  ladoliProjects.on("value", snapshot => {
    dispatch({
      type: FETCH_PROJ,
      payload: snapshot.val()
    });
  });
};
