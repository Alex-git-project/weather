import React from "react";
import {Text, TouchableOpacity} from 'react-native'
import {styles} from "./style";

const ItemList = ({city, event}) => {

    return (
        <TouchableOpacity style={styles.block} onPress={() => {
            event(city)
        }}>
            <Text style={styles.text}>
                {city}
            </Text>
        </TouchableOpacity>
    );
};

export default ItemList;

