import {
  combineReducers,
  compose,
  applyMiddleware,
  createStore,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import history from '../navigation/history'

import {
  RouterReducer,
  runSagas as runRouterSagas,
} from './router/index'
import {
  reducers as coreReducers,
  runSagas as runCoreSagas,
} from './core/index'

const appReducer = combineReducers({
  router: RouterReducer,
  ...coreReducers,
})

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.({ })
  ?? compose
const enhancer = composeEnhancers(
  applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
  ),
)

const store = createStore(
  RouterReducer(appReducer),
  enhancer,
)

runRouterSagas(sagaMiddleware)
runCoreSagas(sagaMiddleware)

export default store
