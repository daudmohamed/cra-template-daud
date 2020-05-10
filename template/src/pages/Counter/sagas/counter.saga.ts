import { takeLatest, put } from 'redux-saga/effects'
import {createAction, Action} from "@reduxjs/toolkit";
import {
	incrementByAmount,
} from '../ducks/counterSlice';

export const incrementAsyncSaga = createAction<number>("counter/incrementAsyncSaga");

function* incrementSaga(action: Action) {
	if (incrementAsyncSaga.match(action)) {
		yield put(incrementByAmount(
			action.payload
		))
	}
}

function* counterSaga() {
	yield takeLatest(incrementAsyncSaga.type, incrementSaga)
}

export default counterSaga;