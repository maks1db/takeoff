import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import root from './root';
import contacts from './contacts';

export default (history: History) =>
    combineReducers({
        router: connectRouter(history),
        root: persistReducer(
            {
                key: 'root',
                storage,
                keyPrefix: 'takeoff.',
                whitelist: ['token'],
            },
            root,
        ),
        contacts,
    });
