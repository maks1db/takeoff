import React from 'react';
import {
    Head, Row, UserControl, Search,
} from './partials';
import styles from './Main.scss';

const Main = () => (
    <div>
        <UserControl />
        <Search onSearch={console.log} />
        <table>
            <Head />
            <tbody>
                <Row
                    age={10}
                    country="Липецк"
                    firtName="акси"
                    lastName="sdfdsf"
                    id={1}
                    phone="sdfdsf"
                    photo="sdsdggsd"
                />
            </tbody>
        </table>
        <button type="button" className={styles.fixedButton}>New</button>
    </div>
);

export default Main;
