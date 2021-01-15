import { push } from 'connected-react-router';
import {
    call, put, takeLatest,
} from 'redux-saga/effects';

import { STATUS_URL } from '../constants';
import { fetchWrapper } from '../helpers';
import { initApp } from '../reducers/root';
import { authWorker } from './authSaga';

const { error } = console;

function* initWorker() {
    /**
     * Проверка на работу сервера
     */
    try {
        const { status } = yield call(fetchWrapper, STATUS_URL);
        if (status === 'ok') {
            yield call(authWorker);
            return;
        }
    } catch (e) {
        error(e);
    }

    yield put(push('/404'));
}

export default function* initSaga() {
    yield takeLatest([initApp], initWorker);
}
