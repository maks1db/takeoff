import React, { FC } from 'react';
import styles from './User.scss';

const UserControl: FC = () => (
    <div className={styles.wrapper}>
        <span>User</span>
        <button className="button-outline" type="button">
            Exit
        </button>
    </div>
);

export default UserControl;
