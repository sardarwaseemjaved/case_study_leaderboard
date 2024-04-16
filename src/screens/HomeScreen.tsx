import React from 'react';
import { View, Text } from 'react-native';
import SearchInput from '../components/SearchInput';
import ResultList from '../components/ResultList';
import ErrorMessage from '../components/ErrorMessage';

const HomeScreen: React.FC = () => {
    // Mock data for demonstration
    const data = [
        { uid: '1', name: 'Shirley Kauffman', rank: 1, bananas: 6609 },
        { uid: '2', name: 'Earleen Douse', rank: 2, bananas: 1900 },
    ];

    // Mock error message for demonstration
    const errorMessage: string | null = null;

    // Function to handle search
    const handleSearch = (username: string) => {
        // search logic here
        // Update data and errorMessage accordingly
    };

    return (
        <View className="flex-1 px-4">

            <Text className="text-gray-800 text-2xl font-bold mb-4">Case Study Leaderboard</Text>

            <SearchInput onSearch={handleSearch} />

            {errorMessage && <ErrorMessage message={errorMessage} />}

            <ResultList data={data} />

        </View>
    );
};

export default HomeScreen;