import { createStore, Store, applyMiddleware } from "redux";
import { CustomersState } from "./modules/Customers/types";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  customers: CustomersState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
