import { createAction } from '../libs/redux-actions/createAction';
import { createImmutableReducer } from '../libs/redux-actions/createImmutableReducer';
import { ContactEntity } from '../containers/partials/types';

const initialState = {
    list: [] as ContactEntity[],
    isFetching: true,
    isEnd: false,
};

export type ContactsState = typeof initialState;

export const getContacts = createAction('GET_CONTACTS');
export const appendContacts = createAction<ContactEntity[]>('APPEND_CONTACTS');
export const clearContacts = createAction('CLEAR_ACTIONS');
export const setEnd = createAction('SET_END');

export const saveContact = createAction<ContactEntity>('SAVE_CONTACT');
export const deleteContact = createAction<string>('DELETE_CONTACT');

export default createImmutableReducer(initialState)
    .chain(appendContacts, (state, { payload }) => {
        state.list.push(...payload);
        state.isFetching = false;
        state.isEnd = false;
    })
    .chain(clearContacts, state => {
        state.list = [];
        state.isFetching = false;
    })
    .chain(getContacts, state => (state.isFetching = true))
    .chain(setEnd, state => (state.isEnd = true));
