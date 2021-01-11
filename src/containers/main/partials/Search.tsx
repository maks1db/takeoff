import cn from 'classnames';
import React, { FC, useState, memo } from 'react';
import { useForm } from 'react-hook-form';

import { contactModel } from '../../partials';
import styles from './Search.scss';

const keys = Object.keys(contactModel);

interface SearchProps {
    onSearch: (searchText: string) => void;
}

const Search: FC<SearchProps> = ({ onSearch }) => {
    const [type, setType] = useState('text');
    const { register, handleSubmit, errors } = useForm();
    return (
        <form className="row" onSubmit={handleSubmit(({ search }) => onSearch(search))}>
            <select
                onChange={e => {
                    const key = e.target.value;
                    setType(contactModel[key].type);
                }}
                className={cn('column', styles.control)}
            >
                {keys.map(x => (
                    <option value={x} key={x}>
                        {contactModel[x].name}
                    </option>
                ))}
            </select>
            <input
                type={type}
                name="search"
                className={cn('column', styles.control, errors.search && styles.error)}
                ref={register({ required: true })}
            />
            <button type="submit" className={cn('column', styles.control)}>
                Search
            </button>
        </form>
    );
};

export default memo(Search);
