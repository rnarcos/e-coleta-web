import { connectRouter } from 'connected-react-router'

import history from '../../navigation/history'

export const RouterReducer = connectRouter(history)
