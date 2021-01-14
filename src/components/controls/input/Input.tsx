import React, {
    FC,
    InputHTMLAttributes,
    forwardRef,
    RefAttributes,
} from 'react';

import styles from './Input.scss';

interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        RefAttributes<HTMLInputElement> {
    errorMessage?: string;
}

const Input: FC<InputProps> = forwardRef(
    ({
        id, placeholder, type, title, errorMessage, ...rest
    }, ref) => (
        <>
            <label htmlFor={id}>{title}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                name={id}
                ref={ref}
                {...rest}
            />
            {errorMessage && (
                <span className={styles.error}>{errorMessage}</span>
            )}
        </>
    ),
);

export default Input;
