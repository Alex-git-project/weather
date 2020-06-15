import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchComponent from "../src/components/AddListCity/SearchComponent";

export default function SearchComponentTab({navigation}) {
    return (
        <SearchComponent navigation={navigation}/>
    )
}
