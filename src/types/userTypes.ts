export type UserData = {
    bananas: number;
    lastDayPlayed: string;
    longestStreak: number;
    name: string;
    stars: number;
    subscribed: boolean;
    uid: string;
    rank?: number;
}
export interface UserDataList {
    [userId: string]: UserData;
}