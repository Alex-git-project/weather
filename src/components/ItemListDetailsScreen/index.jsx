import React from "react";
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'


export default function ItemListDetailsScreen({title,value}) {

    return (
        <View style={styles.columnBox}>
            <Text style={styles.itemBox}>{title}</Text>
            <Text style={styles.itemBox}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    columnBox: {
        width: 200,
        borderStyle: "solid",
        borderColor: "white",
        borderBottomWidth: 2,
        padding: 10,
    },
    itemBox: {
        color: "white",
        fontSize: 25,
    }
});

