import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { fetchUserDataAsync } from '../redux/actions/userActions';
import SearchInput from '../components/SearchInput';
import ResultList from '../components/ResultList';
import { Dispatch } from 'redux';

const HomeScreen: React.FC = () => {
    const dispatch = useDispatch<Dispatch<any>>();
    const { userData, errorMessage, isProcessing } = useSelector((state: RootState) => state.user);
    const [username, setUsername] = useState('')

    const handleSearch = (username: string) => {
        // Dispatch the fetchUserDataAsync action with the username
        dispatch(fetchUserDataAsync(username));
        setUsername(username)
    };

    useEffect(() => {
        errorMessage && Alert.alert(errorMessage)
    }, [errorMessage])

    return (
        <View className="flex-1 px-4 justify-center">

            <Text className="text-gray-800 text-2xl font-bold mb-4">Case Study Leaderboard</Text>

            <SearchInput onSearch={handleSearch} />

            {userData.length > 0 && <ResultList searchQuery={username} data={userData} />}

        </View>
    );
};

export default HomeScreen;