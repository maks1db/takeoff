import React, { FC } from 'react';
import { Route, Switch, Router } from 'react-router';
import { History } from 'history';

import {
    Auth, Main, Contact, Page404, AuthWrapper,
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
                <AuthWrapper>
                    <Contact />
                </AuthWrapper>
            </Route>
            <Route path="/" exact>
                <AuthWrapper>
                    <Main />
                </AuthWrapper>
            </Route>
            <Route path="/404">
                <Page404 />
            </Route>
        </Switch>
    </Router>
);

export default App;
