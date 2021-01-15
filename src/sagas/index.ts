import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import contactsSaga from './contactsSaga';

import initSaga from './initSaga';

export default function* rootSaga() {
    yield all([
        initSaga(),
        authSaga(),
        contactsSaga(),
    ]);
}
