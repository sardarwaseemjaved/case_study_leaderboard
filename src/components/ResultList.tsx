import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { UserData } from '../types/userTypes';
interface IResultListProps {
    data: UserData[];
    searchQuery: string;
}

const SORT_BY_NAME_ASC = 'SORT_BY_NAME_ASC'
const SORT_BY_RANK_DESC = 'SORT_BY_RANK_DESC'

const SORT_ASC_ICON = require('../../assets/sort_asc.png')
const SORT_DESC_ICON = require('../../assets/sort_desc.png')

const ResultList: React.FC<IResultListProps> = ({ data, searchQuery }) => {

    const [sortBy, setSortBy] = useState('');


    const onSetSortBy = (newType: string) => {
        setSortBy(prev => {
            if (prev === newType) {//reset sorting on double tap
                return ''
            }
            else {
                return newType
            }
        })

    }

    const renderItem = ({ item, index }: { item: TListItem }) => (
        <View className="flex-row justify-between py-2 px-1 rounded my-1 bg-slate-200" >

            <Text
                className="w-2/4"
                style={searchQuery && item.name.toLowerCase().includes(searchQuery?.toLowerCase()) && { color: 'red' }}
            >
                {item.name}
            </Text>

            <Text className="w-1/4 text-center">
                {item.rank}
            </Text>

            <Text className="w-1/4 text-right">
                {item.bananas}
            </Text>

        </View>
    );
    const renderHeader = () => (
        <View className="flex-row justify-between py-2 px-1 rounded my-1 bg-slate-800">
            <TouchableOpacity onPress={() => onSetSortBy(SORT_BY_NAME_ASC)} className="flex-row w-2/4">
                <Text className="font-extrabold text-white">NAME</Text>
                <Image source={SORT_ASC_ICON} className="w-5 h-5 ml-2" tintColor={SORT_BY_NAME_ASC === sortBy ? 'red' : '#fff'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSetSortBy(SORT_BY_RANK_DESC)} className="flex-row w-1/4">
                <Text className="text-center font-extrabold text-white">RANK</Text>
                <Image source={SORT_DESC_ICON} className="w-5 h-5 ml-2" tintColor={SORT_BY_RANK_DESC === sortBy ? 'red' : '#fff'} />
            </TouchableOpacity>
            <Text className="w-1/4 text-right font-extrabold text-white">Number of bananas</Text>
        </View >
    )

    let sortedData = [...data];
    if (sortBy) {//sort only if a sorting option is pressed
        sortedData = sortedData.sort((a, b) => {
            if (sortBy === SORT_BY_NAME_ASC) {
                return a.name.localeCompare(b.name)
            }
            return a.bananas - b.bananas
        })
    }

    return (
        <FlatList
            data={sortedData}
            ListHeaderComponent={renderHeader}
            renderItem={renderItem}
            keyExtractor={(item) => item.uid}
        />
    );
};

export default ResultList;