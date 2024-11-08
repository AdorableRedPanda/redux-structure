import { configureStore, type Store } from '@reduxjs/toolkit';
import { projectReducer, rootMiddleware } from '@/store/core';
import { historySagas } from './history';
import type { AppStore } from '@/types';
const createSagaMiddleware = require('redux-saga').default;

export const createStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	const store = configureStore({
		reducer: {
			project: projectReducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(sagaMiddleware),
	});

	sagaMiddleware.run(rootMiddleware);
	sagaMiddleware.run(historySagas);

	return store as Store<AppStore>;
};
