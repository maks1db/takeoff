import { push } from 'connected-react-router';
import { tap } from 'ramda';
import React, { FC, useEffect, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useActionOnVisibility } from '../../components/service';

import { pipeF } from '../../libs/service';
import { clearContacts, getContacts } from '../../reducers/contacts';
import { exitUser } from '../../reducers/root';
import State from '../../reducers/types';
import styles from './Main.scss';
import {
    Head, Row, Search, UserControl,
} from './partials';

const actions = {
    exitUser,
    clearContacts,
    push,
    getContacts,
};
const mapState = (state: State) => ({
    user: state.root,
    contacts: state.contacts.list,
    isFetching: state.contacts.isFetching,
    search: state.router.location.search,
    isEnd: state.contacts.isEnd,
});
const Main: FC = () => {
    const {
        user, contacts, isFetching, search, isEnd,
    } = useSelector(
        mapState,
        shallowEqual,
    );

    const dispatch = useDispatch();
    const dispatchedActions = useMemo(
        () => bindActionCreators(actions, dispatch),
        [],
    );

    const handleSearchContacts = pipeF(
        tap(dispatchedActions.clearContacts),
        dispatchedActions.push,
    );

    useEffect(() => () => dispatchedActions.clearContacts(), []);
    const ref = useActionOnVisibility(
        !isEnd && !isFetching && dispatchedActions.getContacts,
    );

    return (
        <div>
            <UserControl
                login={user.login}
                onExit={dispatchedActions.exitUser}
            />
            <Search onSearch={handleSearchContacts} search={search} />
            <table>
                <Head />
                <tbody>
                    {contacts.map(contact => (
                        <Row
                            {...contact}
                            key={contact.id}
                            onClick={dispatchedActions.push}
                        />
                    ))}
                </tbody>
            </table>
            {isFetching && !isEnd && (
                <div className={styles.fetch}>
                    <img
                        src="https://zheleznogorsk-130.bnkf.ru/img/loading.gif"
                        alt="loading"
                    />
                </div>
            )}
            <div ref={ref} />
            <button
                type="button"
                className={styles.fixedButton}
                onClick={() => dispatchedActions.push('/contact')}
            >
                New
            </button>
        </div>
    );
};

export default Main;
