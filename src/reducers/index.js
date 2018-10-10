import { combineReducers } from "redux";

import projectData from "./projectsReducer";
import workData from "./workExReducer";

export default combineReducers({
  projectData,
  workData
});
