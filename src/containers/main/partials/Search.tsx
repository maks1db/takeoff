import cn from 'classnames';
import { path } from 'ramda';
import React, {
    FC, useState, memo, useEffect,
} from 'react';
import { useForm } from 'react-hook-form';
import { pipeF } from '../../../libs/service';

import { contactModel } from '../../partials';
import styles from './Search.scss';

const keys = Object.keys(contactModel);

interface SearchProps {
    onSearch: (query: { search: string }) => void;
    search: string;
}

const Search: FC<SearchProps> = ({ onSearch, search }) => {
    const [activeKey, setKey] = useState('firstName');
    const {
        register, handleSubmit, errors, setValue,
    } = useForm();

    useEffect(() => {
        const [key, value] = search.replace('?', '').split('=');

        key && setKey(key);
        value && setValue('search', decodeURIComponent(value));
    }, [search]);

    return (
        <form
            className="row"
            onSubmit={handleSubmit(({ search: value }) => {
                onSearch({ search: `?${activeKey}=${value}` });
            })}
        >
            <select
                onChange={pipeF(path(['target', 'value']), setKey)}
                className={cn('column', styles.control)}
                value={activeKey}
            >
                {keys.map(x => (
                    <option value={x} key={x}>
                        {contactModel[x].name}
                    </option>
                ))}
            </select>
            <input
                type={contactModel[activeKey].type}
                name="search"
                className={cn(
                    'column',
                    styles.control,
                    errors.search && styles.error,
                )}
                ref={register({ required: true })}
            />
            <button type="submit" className={cn('column', styles.control)}>
                Search
            </button>
        </form>
    );
};

/**
 * Не делаем ререндера
 */
export default memo(Search);
