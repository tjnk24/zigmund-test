import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reposReducer from './reducers/repos';
import rootSaga from './sagas/fetch-repos';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reposReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
