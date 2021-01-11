import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '../../components';
import { contactModel } from '../partials';
import styles from './Contact.scss';

const keys = Object.keys(contactModel);

const Contact: FC = () => {
    const { register, errors, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(console.log)} className={styles.form}>
            <fieldset>
                {keys.map(k => (
                    <Input
                        id={k}
                        name={k}
                        type={contactModel[k].type}
                        title={contactModel[k].name}
                        ref={register({ required: true })}
                        errorMessage={errors?.[k]?.type}
                    />
                ))}
            </fieldset>
            <div className={styles.buttons}>
                <button type="submit">Save</button>
                <button type="button" className="button-outline">
                    Delete
                </button>
            </div>
        </form>
    );
};

export default Contact;
