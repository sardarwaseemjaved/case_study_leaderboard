import { UserActionTypes, FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE } from '../actions/userActions';
import { UserData } from '../../types/userTypes';

type UserRootState = {
    userData: UserData[],
    errorMessage: string,
    isProcessing: boolean,
}
// Define the initial state for the user
const initialState: UserRootState = {
    userData: [],
    errorMessage: '',
    isProcessing: false
};

// Define the reducer function
const userReducer = (state = initialState, action: UserActionTypes): UserRootState => {
    switch (action.type) {
        case FETCH_USER_DATA_REQUEST:
            // Handle request action
            state = {
                ...state,
                userData: [],
                isProcessing: true,
                errorMessage: ''
            };
            return state;
        case FETCH_USER_DATA_SUCCESS:
            // Handle success action
            state = {
                ...state,
                isProcessing: false,
                userData: action.payload,
                errorMessage: ''
            };
            return state; // Update state with fetched user data
        case FETCH_USER_DATA_FAILURE:
            // Handle failure action
            state = {
                ...state,
                userData: [],
                isProcessing: false,
                errorMessage: action.payload || 'Something went wrong!'
            };
            return state; // Return the current state
        default:
            return state;
    }
};

export default userReducer;