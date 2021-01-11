import React, { FC } from 'react';
import { Route, Switch, Router } from 'react-router';
import { History } from 'history';

import {
    Auth, Main, Contact, Page404,
} from './containers';

interface AppProps {
    history: History;
}

const App: FC<AppProps> = ({ history }) => (
    <Router history={history}>
        <Switch>
            <Route path="/auth">
                <Auth />
            </Route>
            <Route path="/contact/:id?">
                <Contact />
            </Route>
            <Route path="/" exact>
                <Main />
            </Route>
            <Route path="/404">
                <Page404 />
            </Route>
        </Switch>
    </Router>
);

export default App;
