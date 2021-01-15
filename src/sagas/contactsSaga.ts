import { LOCATION_CHANGE, push } from 'connected-react-router';
import {
    takeLatest, call, put, select, all,
} from 'redux-saga/effects';
import { CONTACTS_URL } from '../constants';
import { fetchWrapper } from '../helpers';
import {
    getContacts,
    appendContacts,
    setEnd,
    deleteContact,
    saveContact,
} from '../reducers/contacts';
import State from '../reducers/types';

const { error } = console;
const FETCH_LIMIT = 30;

const selector = (state: State) => ({
    count: state.contacts.list.length,
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    isAuth: state.root.authState === 'ok',
});

function* getContactsWorker() {
    const {
        count,
        isAuth,
        pathname,
        search,
    }: ReturnType<typeof selector> = yield select(selector);

    if (pathname !== '/' || !isAuth) {
        return;
    }

    let params = `?_start=${count}&_limit=${FETCH_LIMIT}`;
    if (search) {
        params += search.replace('=', '_like=').replace('?', '&');
    }

    try {
        const contacts = yield call(fetchWrapper, `${CONTACTS_URL}${params}`);
        if (contacts.length === 0) {
            yield put(setEnd());
        } else {
            yield put(appendContacts(contacts));
        }
    } catch (e) {
        error(e);
    }
}

function* deleteContactWorker({
    payload: id,
}: ReturnType<typeof deleteContact>) {
    yield call(fetchWrapper, `${CONTACTS_URL}/${id}`, { method: 'DELETE' });
    yield put(push('/'));
}

function* saveContactWorker({
    payload: { id, ...rest },
}: ReturnType<typeof saveContact>) {
    const method = id ? 'PATCH' : 'POST';
    const { id: newId } = yield call(fetchWrapper, `${CONTACTS_URL}/${id || ''}`, {
        method,
        body: JSON.stringify(rest),
    });

    // eslint-disable-next-line eqeqeq
    if (id != newId) {
        yield put(push(`/contact/${newId}`));
    }
}

export default function* contactsSaga() {
    yield all([
        takeLatest([LOCATION_CHANGE, getContacts], getContactsWorker),
        takeLatest(deleteContact, deleteContactWorker),
        takeLatest(saveContact, saveContactWorker),
    ]);
}
