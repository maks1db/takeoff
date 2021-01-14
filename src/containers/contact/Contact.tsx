import React, { FC, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteContact, saveContact } from '../../reducers/contacts';

import { Input } from '../../components/controls';
import { CONTACTS_URL } from '../../constants';
import { fetchWrapper } from '../../helpers';
import { contactModel } from '../partials';
import styles from './Contact.scss';

const keys = Object.keys(contactModel);
const actions = { deleteContact, saveContact };

const Contact: FC = () => {
    const {
        register, errors, handleSubmit, setValue, formState,
    } = useForm();

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!id) {
            return;
        }

        fetchWrapper(`${CONTACTS_URL}/${id}`).then(contact => {
            if (!contact) {
                return;
            }

            keys.map(k => setValue(k, contact[k]));
        });
    }, []);

    const dispatch = useDispatch();
    const disapatchedActions = useMemo(
        () => bindActionCreators(actions, dispatch),
        [],
    );

    return (
        <form
            onSubmit={handleSubmit(contact =>
                disapatchedActions.saveContact({ ...contact, id } as any))}
            className={styles.form}
        >
            <fieldset>
                {keys.map(k => (
                    <Input
                        id={k}
                        name={k}
                        type={contactModel[k].type}
                        title={contactModel[k].name}
                        ref={register({ required: true })}
                        errorMessage={errors?.[k]?.type}
                        key={k}
                    />
                ))}
            </fieldset>
            <div className={styles.buttons}>
                <button type="submit" disabled={!formState.isDirty}>
                    Save
                </button>
                {id && (
                    <button
                        type="button"
                        className="button-outline"
                        onClick={() => disapatchedActions.deleteContact(id)}
                    >
                        Delete
                    </button>
                )}
            </div>
        </form>
    );
};

export default Contact;
