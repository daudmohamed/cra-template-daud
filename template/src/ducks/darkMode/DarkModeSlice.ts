import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";

export type DarkModeState = {
	isOn: boolean
}

export const darkModeSlice = createSlice({
	name: 'darkmode',
	initialState: {
		isOn: true
	} as DarkModeState,
	reducers: {
		toggleDarkMode: state => {
			state.isOn = !state.isOn;
		}
	}
});

export const { toggleDarkMode } = darkModeSlice.actions;

export const selectDarkMode = (state: RootState) => state.darkMode;

export default darkModeSlice.reducer;