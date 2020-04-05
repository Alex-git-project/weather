import React from "react";
import {ImageBackground, Text, Button, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native'
import {connect} from "react-redux";
import {setCity} from "../../src/redusers/CityReducer";



class ItemList extends React.Component {
    render(){
        return (
            <View style={styles.block}>
                <View>
                    <Text style={styles.text}>
                        {this.props.city}
                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    block: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        fontSize: 30,
        height: 80,
        padding:20,
        marginTop: 5
    },
    text: {
        fontSize: 20,
        color: "white"
    }
});

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(ItemList);

