import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import root from './root';

export default (history: History) =>
    combineReducers({
        router: connectRouter(history),
        root: persistReducer(
            { key: 'token', storage, keyPrefix: 'takeoff.' },
            root,
        ),
    });
