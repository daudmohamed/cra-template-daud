import { all, fork } from "redux-saga/effects";
import counterSaga from "../pages/Counter/sagas/counter.saga";

export default function* rootSaga () {
	yield all([
		fork(counterSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
	]);
}