import React, { useState } from 'react';
import { Button, View, TextInput, Image } from 'react-native';

const SEARCH_ICON = require('../../assets/looking-glass-small.png')

interface SearchInputProps {
    onSearch: (username: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    const handleSearch = () => {
        onSearch(username);
    };

    return (
        <View className="flex-row items-center justify-center mb-4 bg-white">
            <View className="flex-1 flex-row items-center border border-gray-600 rounded px-2">
                <Image source={SEARCH_ICON} width={20} height={20} />
                <TextInput
                    className="h-10 flex-1 ml-2"
                    placeholder="Enter username"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View className="bg-black rounded ml-2 h-10">
                <Button
                    disabled={!username}
                    color={'white'}
                    title="Search"
                    onPress={handleSearch}
                />
            </View>
        </View>
    );
};

export default SearchInput;