import {
  combineReducers,
  compose,
  applyMiddleware,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from '../navigation/history.js';

import {
  RouterReducer,
  runSagas as runRouterSagas,
} from './router/index.js';
import {
  reducers as coreReducers,
  runSagas as runCoreSagas,
} from './core/index.js';

const appReducer = combineReducers({
  router: RouterReducer,
  ...coreReducers,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.({  }) ?? compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
  ),
);

const store = createStore(
  RouterReducer(appReducer),
  enhancer,
);

runRouterSagas(sagaMiddleware);
runCoreSagas(sagaMiddleware);

export default store;
