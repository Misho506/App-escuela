import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import { routerMiddleware } from 'connected-react-router';
import rootSaga from './sagas/rootSaga';
import rootReducer from './reducers/rootReducer';

export const history = createBrowserHistory();

function setupStore(initialState = {}) {
  const middlewares = [];

  // The logger middleware is only enabled in development because there is a
  // memory leak related to allocating large strings but not subsequently
  // deallocating them.
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({ collapsed: true });
    middlewares.push(logger);
  }
  const sagaMiddleware = createSagaMiddleware();
  const routerMid = routerMiddleware(history);

  middlewares.push(sagaMiddleware);
  middlewares.push(routerMid);

  const store = createStore(
    rootReducer(history),
    initialState,
    applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export const store = setupStore();