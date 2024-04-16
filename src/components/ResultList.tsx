import React from 'react';
import { FlatList, Text, View } from 'react-native';
type TListItem = { uid: string; name: string; rank: number; bananas: number }
interface IResultListProps {
    data: TListItem[];
}

const ResultList: React.FC<IResultListProps> = ({ data }) => {
    const renderItem = ({ item, index }: { item: TListItem }) => (
        <View className="flex-row justify-between py-2 px-1 rounded my-1 bg-slate-200" >
            <Text className="w-2/4">{item.name}</Text>
            <Text className="w-1/4 text-center">{item.rank}</Text>
            <Text className="w-1/4 text-right">{item.bananas}</Text>
        </View>
    );
    const renderHeader = () => (
        <View className="flex-row justify-between py-2 px-1 rounded my-1 bg-slate-800">
            <Text className="w-2/4 font-extrabold text-white">NAME</Text>
            <Text className="w-1/4 text-center font-extrabold text-white">RANK</Text>
            <Text className="w-1/4 text-right font-extrabold text-white">Number of bananas</Text>
        </View>
    )

    return (
        <FlatList
            data={data}
            ListHeaderComponent={renderHeader}
            renderItem={renderItem}
            keyExtractor={(item) => item.uid}
        />
    );
};

export default ResultList;