import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import 'milligram/dist/milligram.css';
import './styles/global.scss';
import App from './App';
import configureStore from './store';

const history = createBrowserHistory();

const { store, persistor } = configureStore(history);

render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
                <App history={history} />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
