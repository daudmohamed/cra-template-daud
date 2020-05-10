import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CounterState} from "./counterTypes";
import {RootState} from "../../../store";

export const counterSlice = createSlice({
	name: 'counter',
	initialState:  {
		value: 0,
	} as CounterState,
	reducers: {
		increment: state => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		decrement: state => {
				state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
				state.value += action.payload;
		}
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;