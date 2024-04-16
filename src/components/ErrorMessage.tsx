import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ErrorMessageProps {
    message: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <View className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <Text>{message}</Text>
        </View>
    );
};

export default ErrorMessage;