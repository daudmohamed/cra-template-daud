import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import rootReducer from "./ducks/rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


// mount it on the Store
const defaultMiddleware = getDefaultMiddleware({
	thunk: false,
	serializableCheck: false
});

// Config for persisted reducer.
const persistConfig = {
	key: 'root',
	storage: storage
};

// Middleware: Redux persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
const store = configureStore({
	reducer: persistedReducer,
	middleware: [...defaultMiddleware, sagaMiddleware],
	devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export default store;
