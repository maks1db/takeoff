import { createAction } from '../libs/redux-actions/createAction';
import { createImmutableReducer } from '../libs/redux-actions/createImmutableReducer';

const initialState = {
    user: {
        login: '',
        token: '',
    },
};

export type RootState = typeof initialState

export const initApp = createAction('INIT_APP');

export const setUserParams = createAction<{ login: string, token: string }>(
    'SET_USER_PARAMS',
);

export default createImmutableReducer(initialState).chain(
    setUserParams,
    (state, { payload }) => (state.user = payload),
);
