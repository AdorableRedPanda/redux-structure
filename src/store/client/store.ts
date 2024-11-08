import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootMiddleware, projectReducer } from '../core';
import { historyReducer, historySagas } from './history';
import { DevTools } from '@/components/DevTools';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		project: projectReducer,
		history: historyReducer,
	},
	enhancers: (getDefault) =>
		[...getDefault(), DevTools.instrument()] as ReturnType<typeof getDefault>,
	devTools: false,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootMiddleware);
sagaMiddleware.run(historySagas);
