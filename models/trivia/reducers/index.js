import { combineReducers } from "redux";
import { totalReducer } from "./reducers";

const rootReducer = combineReducers({
  totals: totalReducer,
});

export default rootReducer;
