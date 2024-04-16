import { createStore, combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer';

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Define root state type
export type RootState = ReturnType<typeof rootReducer>;

// Create Redux store
const store = createStore(rootReducer);

export default store;