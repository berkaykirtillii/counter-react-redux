import { combineReducers, createStore ,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {counterReducer, colorReducer} from "./reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
);

export default store