import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import makeRootReducer from '../reducers';
import { initApp } from '../reducers/root';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (history: History) => {
    const middlewareList = [
        routerMiddleware(history),
        sagaMiddleware,
    ];
    const store = createStore(
        makeRootReducer(history),
        composeWithDevTools(applyMiddleware(...middlewareList)),
    );

    sagaMiddleware.run(rootSaga);

    store.dispatch(initApp());
    const persistor = persistStore(store);

    return { store, persistor };
};

export default configureStore;
