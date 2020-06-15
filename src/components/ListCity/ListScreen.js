import React from "react";
import {ImageBackground, Text, Button, StyleSheet, View, TouchableOpacity} from 'react-native'
import ItemList from "./ItemList";
import {useSelector} from "react-redux";

const ListScreen =(props)=> {
    const state = useSelector(state => state.city);

    let getCity=()=>{
        let view = <Text style={styles.text}>you not have city</Text>;
        if(state.workCity.length > 0){
            view = state.workCity.map( (item,key) =>
                <ItemList key={key} city={item} navigation={props.navigation} />
            )
        }
        return view
    };

        return (
            <>
                {getCity()}
            </>
        );

};

const styles = StyleSheet.create({
    text:{
        color:"white",
        textAlign:"center"
    },

});

export default (ListScreen);


