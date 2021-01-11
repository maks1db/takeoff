import { push } from 'connected-react-router';
import { omit } from 'ramda';
import { call, select, put } from 'redux-saga/effects';

import { USERS_URL } from '../constants';
import { fetchWrapper } from '../helpers';
import { setUserParams } from '../reducers/root';
import State from '../reducers/types';

export default function* authWorker() {
    const token = yield select((state: State) => state.root.user.token);
    if (!token) {
        const users = yield call(
            fetchWrapper,
            `${USERS_URL}?token=${token}123`,
        );

        const user = users[0];
        if (user) {
            yield put(setUserParams(
                omit(['password'], user) as any,
            ));
        } else {
            yield put(push('/auth'));
        }
    }
}
