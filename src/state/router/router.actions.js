const prefix = 'ROUTER'
const ROUTE_CHANGE_TYPE_PUSH = `${prefix}.ROUTE_CHANGE_TYPE_PUSH`
const ROUTE_CHANGE_TYPE_REPLACE = `${prefix}.ROUTE_CHANGE_TYPE_REPLACE`
const ROUTE_CHANGE_TYPE_GO = `${prefix}.ROUTE_CHANGE_TYPE_GO`
const ROUTE_CHANGE_TYPE_GO_BACK = `${prefix}.ROUTE_CHANGE_TYPE_GO_BACK`
const ROUTE_CHANGE_TYPE_GO_FORWARD = `${prefix}.ROUTE_CHANGE_TYPE_GO_FORWARD`

const pushToRoute = (route, routeParams) => ({
  type: ROUTE_CHANGE_TYPE_PUSH,
  payload: { route, routeParams },
})

const replaceRoute = (route, routeParams) => ({
  type: ROUTE_CHANGE_TYPE_REPLACE,
  payload: { route, routeParams },
})

const goToRoute = (route, routeParams) => ({
  type: ROUTE_CHANGE_TYPE_GO,
  payload: { route, routeParams },
})

const goBack = () => ({
  type: ROUTE_CHANGE_TYPE_GO_BACK,
})

const goForward = () => ({
  type: ROUTE_CHANGE_TYPE_GO_FORWARD,
})

export {
  ROUTE_CHANGE_TYPE_PUSH,
  ROUTE_CHANGE_TYPE_REPLACE,
  ROUTE_CHANGE_TYPE_GO,
  ROUTE_CHANGE_TYPE_GO_BACK,
  ROUTE_CHANGE_TYPE_GO_FORWARD,
  pushToRoute,
  replaceRoute,
  goToRoute,
  goBack,
  goForward,
}
