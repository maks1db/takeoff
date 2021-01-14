import React, { FC } from 'react';
import styles from './User.scss';

interface UserCotrolProps {
    login: string;
    onExit: () => void;
}

const UserControl: FC<UserCotrolProps> = ({ login, onExit }) => (
    <div className={styles.wrapper}>
        <span>{login}</span>
        <button className="button-outline" type="button" onClick={onExit}>
            Exit
        </button>
    </div>
);

export default UserControl;
