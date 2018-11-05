import { ladoliProjects, ladoliWork } from "../config/firebase";
import { FETCH_PROJ, FETCH_WORK} from "./types";

export const fetchProj = () => async dispatch => {
  ladoliProjects.on("value", snapshot => {
    dispatch({
      type: FETCH_PROJ,
      payload: snapshot.val()
    });
  });
};

export const fetchWorkEx = () => async dispatch => {
  ladoliWork.on("value", snapshot => {
    dispatch({
      type: FETCH_WORK,
      payload: snapshot.val()
    });
  });
};
