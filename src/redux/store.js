import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducer";

const enhancers = applyMiddleware(thunk, logger);
const store = createStore(reducers, enhancers);

export default store;
