import { connectRouter } from 'connected-react-router';

import history from '../../navigation/history.js';

export const RouterReducer = connectRouter(history);
