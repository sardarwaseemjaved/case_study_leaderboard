import leaderboardData from '../constants/leaderboard.json';
import { UserDataList } from '../types/userTypes';

// Function to fetch user data from the JSON file
export const fetchUserData = async (): Promise<UserDataList> => {
    return leaderboardData;
};