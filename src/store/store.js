import {createStore, combineReducers} from "redux";
import listReducer from "../redusers/listReducer";

const reducer = combineReducers({
    listReducer,
});

export const initStore =(preloadedState = {}) => {
    return createStore(reducer, preloadedState);
}