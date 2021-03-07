import { combineReducers } from "redux";
import { totalsReducer } from "./reducers";

const rootReducer = combineReducers({
  totals: totalsReducer,
});

export default rootReducer;
