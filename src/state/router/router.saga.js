import { takeLatest, put, all } from 'redux-saga/effects';
import {
  push,
  replace,
  go,
  goBack,
  goForward,
} from 'connected-react-router';
import {
  ROUTE_CHANGE_TYPE_PUSH,
  ROUTE_CHANGE_TYPE_REPLACE,
  ROUTE_CHANGE_TYPE_GO,
  ROUTE_CHANGE_TYPE_GO_BACK,
  ROUTE_CHANGE_TYPE_GO_FORWARD,
} from './router.actions';

function* _pushToRoute({ payload }) {
  const { route: { url: routeUrl }, routeParams } = payload;

  yield put(push(routeUrl, routeParams));
}

function* _replaceRoute({ payload }) {
  const { route: { url: routeUrl }, routeParams } = payload;

  yield put(replace(routeUrl, routeParams));
}

function* _goToRoute({ payload }) {
  const { route: { url: routeUrl }, routeParams } = payload;

  yield put(go(routeUrl, routeParams));
}

function* _goBack() {
  yield put(goBack());
}

function* _goForward() {
  yield put(goForward());
}

export default function* routerSaga() {
  yield all([
    takeLatest(ROUTE_CHANGE_TYPE_PUSH, _pushToRoute),
    takeLatest(ROUTE_CHANGE_TYPE_REPLACE, _replaceRoute),
    takeLatest(ROUTE_CHANGE_TYPE_GO, _goToRoute),
    takeLatest(ROUTE_CHANGE_TYPE_GO_BACK, _goBack),
    takeLatest(ROUTE_CHANGE_TYPE_GO_FORWARD, _goForward),
  ]);
}
