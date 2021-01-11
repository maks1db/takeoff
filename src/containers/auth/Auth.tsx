import cn from 'classnames';
import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './Auth.scss';
import { Input } from '../../components';

const Auth = () => {
    const {
        register, handleSubmit, errors,
    } = useForm();

    return (
        <form
            className={cn(styles.form)}
            onSubmit={handleSubmit(console.log)}
        >
            <fieldset>
                <Input
                    id="login"
                    type="text"
                    placeholder="Input login"
                    ref={register({ required: true })}
                    errorMessage={errors?.login?.type}
                    title="Login"
                />
                <Input
                    id="password"
                    type="password"
                    placeholder="Input password"
                    ref={register({ required: true })}
                    errorMessage={errors?.password?.type}
                    title="Password"
                />
                <button
                    type="submit"
                    className="button-primary"
                >
                    Sign in
                </button>
            </fieldset>
        </form>
    );
};

export default Auth;
