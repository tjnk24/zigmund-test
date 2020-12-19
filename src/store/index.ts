import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import reposReducer from './reducers/repos';
import rootSaga from './sagas/fetch-repos';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reposReducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export default store;
