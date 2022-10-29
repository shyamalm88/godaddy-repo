import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import repoDataReducer from "../reducers/repoDataReducer";
import detailsDataReducer from "../reducers/detailsDataReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combineStore = combineReducers({
  repoData: repoDataReducer,
  detailsData: detailsDataReducer,
});

const store = createStore(
  combineStore,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
