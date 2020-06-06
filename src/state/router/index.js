import { RouterReducer } from './router.reducer';
import routerSaga from './router.saga';

const runSagas = (sagaMiddleware) => {
  [
    routerSaga,
  ].forEach(sagaMiddleware.run)
};

export { RouterReducer, runSagas };
