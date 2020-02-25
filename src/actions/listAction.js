import {createActions} from 'redux-actions';

export const {loadList, setUser} = createActions({
    LOAD_LIST: () => ({}),
    SET_USER: (userName) => ({userName})
});