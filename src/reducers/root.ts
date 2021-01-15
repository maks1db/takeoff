import { createAction } from '../libs/redux-actions/createAction';
import { createImmutableReducer } from '../libs/redux-actions/createImmutableReducer';

type AuthState = 'ok' | 'error' | '';

const initialState = {
    login: '',
    token: '',
    authState: '' as AuthState,
};

export type RootState = typeof initialState;

export const initApp = createAction('INIT_APP');
export const showAppUsers = createAction('SHOW_APP_USERS');

export const authUser = createAction<{ login: string, password: string }>(
    'AUTH_USER',
);

export const exitUser = createAction('EXIT_USER');

export const setAuthState = createAction<AuthState>('SET_AUTH_STATE');

export const setUserParams = createAction<{ login: string, token: string }>(
    'SET_USER_PARAMS',
);

export default createImmutableReducer(initialState)
    .chain(setUserParams, (state, { payload: { login, token } }) => {
        state.login = login;
        state.token = token;
    })
    .chain(setAuthState, (state, { payload }) => {
        state.authState = payload;
    })
    .chain(exitUser, state => {
        state.authState = '';
        state.login = '';
        state.token = '';
    });
