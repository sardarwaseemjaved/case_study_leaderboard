export const SEARCH_USER = 'SEARCH_USER';

interface SearchUserAction {
  type: typeof SEARCH_USER;
  payload: string; // Username
}

export type UserActionTypes = SearchUserAction;

// Action creators
export const searchUser = (username: string): UserActionTypes => ({
  type: SEARCH_USER,
  payload: username,
});