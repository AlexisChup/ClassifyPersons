import { combineReducers } from "redux";
import listPersons from "./listPersons";
import sortedPersons from "./sortedPersons";

export default combineReducers({
  listPersons,
  sortedPersons
});
