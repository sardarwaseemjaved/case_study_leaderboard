import { createStore, applyMiddleware } from 'redux';
import rootReducer, { RootState } from './reducers';
import { RootAction } from './actions';
import { thunk, ThunkMiddleware } from 'redux-thunk';

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>)
);

export default store;