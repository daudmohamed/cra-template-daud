import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../pages/Counter/ducks/counterSlice";
import darkModeReducer from "../ducks/darkMode/DarkModeSlice";

const rootReducer = combineReducers({
	counter: counterReducer,
	darkMode: darkModeReducer
});

export default rootReducer;