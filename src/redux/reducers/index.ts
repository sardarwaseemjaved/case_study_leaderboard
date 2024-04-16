
import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Import your userReducer

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

// Combine reducers
const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;