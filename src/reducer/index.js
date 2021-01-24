import { combineReducers } from "redux";

import { initialState as mainInitialState, mainReducer } from "./mainReducer";

export const rootReducer = combineReducers({
  main: mainReducer,
});

export const initialState = {
  main: mainInitialState,
};
