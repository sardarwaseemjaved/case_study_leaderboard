import { UserActionTypes, SEARCH_USER } from '../actions/userActions';

interface UserState {
  username: string;
}

const initialState: UserState = {
  username: '',
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};