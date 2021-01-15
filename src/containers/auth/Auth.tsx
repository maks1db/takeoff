import cn from 'classnames';
import React, { useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import styles from './Auth.scss';
import { Input } from '../../components/controls';
import { showAppUsers, authUser } from '../../reducers/root';
import { pipeF } from '../../libs/service';

const Auth = () => {
    const {
        register, handleSubmit, errors,
    } = useForm();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showAppUsers());
    }, []);

    const handleAuthSubmit = useCallback(pipeF(authUser, dispatch), []);
    return (
        <>
            <form
                className={cn(styles.form)}
                onSubmit={handleSubmit(handleAuthSubmit)}
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
            <p className={styles.message}>(Посмотрите в консоле браузера список пользователей)</p>
        </>
    );
};

export default Auth;
