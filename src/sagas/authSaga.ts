import { push } from 'connected-react-router';
import { omit } from 'ramda';
import {
    call, select, put, takeLatest, all,
} from 'redux-saga/effects';

import { USERS_URL } from '../constants';
import { fetchWrapper } from '../helpers';
import { getContacts } from '../reducers/contacts';
import {
    setUserParams,
    showAppUsers,
    authUser,
    setAuthState,
    exitUser,
} from '../reducers/root';
import State from '../reducers/types';

const { table, log } = console;

const isAuthPathname = pathname => pathname === '/auth';

const selector = (state: State) => ({
    token: state.root.token,
    authState: state.root.authState,
    pathname: state.router.location.pathname,
});

export function* authWorker() {
    const {
        authState,
        pathname,
        token,
    }: ReturnType<typeof selector> = yield select(selector);

    /**
     * Пользователь авторизован
     */
    if (authState === 'ok') {
        return;
    }

    /**
     * Проверим токен
     */
    if (token) {
        const users = yield call(fetchWrapper, `${USERS_URL}?token=${token}`);

        const user = users[0];
        if (user) {
            yield all([
                put(setUserParams(user)),
                put(setAuthState('ok')),
                isAuthPathname(pathname) && put(push('/')),
                pathname === '/' && put(getContacts()),
            ]);
            return;
        }
    }

    if (!isAuthPathname(pathname)) {
        yield put(push('/auth'));
    }
}

function* showAppUsersWorker() {
    const users = yield call(fetchWrapper, USERS_URL);

    log('-------------------------------------------------');
    log('DEMO USERS');
    table(users.map(omit(['token'])));
    log('-------------------------------------------------');
}

function* authUserWorker({
    payload: { login, password },
}: ReturnType<typeof authUser>) {
    const users = yield call(
        fetchWrapper,
        `${USERS_URL}?login=${login}&password=${password}`,
    );

    if (users.length === 0) {
        yield put(setAuthState('error'));
    } else {
        yield all([
            put(setUserParams(users[0])),
            put(setAuthState('ok')),
            put(push('/')),
        ]);
    }
}

export default function* authSaga() {
    yield all([
        takeLatest(showAppUsers, showAppUsersWorker),
        takeLatest(authUser, authUserWorker),
        takeLatest(exitUser, function* () {
            yield put(push('/auth'));
        }),
    ]);
}
