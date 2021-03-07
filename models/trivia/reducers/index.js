import { combineReducers } from "redux";
import { totals } from "./reducers";

const rootReducer = combineReducers({
  totals,
});

export default rootReducer;
