import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { fetchUserData } from '../../services/userService';
import { UserData, UserDataList } from '../../types/userTypes';

// Action types
export const FETCH_USER_DATA_REQUEST = 'FETCH_USER_DATA_REQUEST';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

// Action interfaces
interface FetchUserDataRequestAction {
    type: typeof FETCH_USER_DATA_REQUEST;
}

interface FetchUserDataSuccessAction {
    type: typeof FETCH_USER_DATA_SUCCESS;
    payload: UserData[];
}

interface FetchUserDataFailureAction {
    type: typeof FETCH_USER_DATA_FAILURE;
    payload: string; // Error message
}

// Combined action type
export type UserActionTypes =
    | FetchUserDataRequestAction
    | FetchUserDataSuccessAction
    | FetchUserDataFailureAction;

// Async action creator to fetch user data
export const fetchUserDataAsync = (searchQuery: string = ''): ThunkAction<void, RootState, null, UserActionTypes> => async (dispatch) => {
    dispatch({ type: FETCH_USER_DATA_REQUEST });

    try {
        let userData = await fetchUserData(); // Call the service function to fetch data
       
        let filteredData = filterUserData(userData, searchQuery);
       
        if (filteredData.length) {
            dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: filteredData });
        }
        else {
            dispatch({
                type: FETCH_USER_DATA_FAILURE,
                payload: 'This user name does not exist! Please specify an existing user name!'
            });
        }
    } catch (error) {
        dispatch({ type: FETCH_USER_DATA_FAILURE, payload: error.message });
    }
};

const filterUserData = (userData: UserDataList, searchQuery: string): UserData[] => {
    // Convert user data to an array and sort by bananas (descending by default)
    const userList = Object.values(userData)
        .sort((a, b) => b.bananas - a.bananas);

    // Assign ranks based on sorted banana count
    userList.forEach((user, index) => (user.rank = index + 1));

    // Handle fuzzy search (lowercase for case-insensitive matching)
    const searchTerm = searchQuery.toLowerCase();

    // If searched user is found, handle highlighting and potentially swapping
    let searchedUser;
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].name.toLowerCase().includes(searchTerm)) {
            searchedUser = userList[i];
            break;
        }
    }

    //If searched user is not found, return empty list
    if (!searchedUser) {
        return [];
    }

    // If searched user is within top 10, return the list unchanged
    if (searchedUser.rank <= 10) {
        return userList.slice(0, 10);
    }
    // If searched user isn't top 10, swap with last user
    else if (searchedUser.rank > 10) {
        userList[9] = searchedUser
        return userList.slice(0, 10);
    }

    // 9. Return the top 10 users
    return userList.slice(0, 10);
};