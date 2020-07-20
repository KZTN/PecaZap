import { createStore, Store, applyMiddleware } from "redux";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const store: Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
