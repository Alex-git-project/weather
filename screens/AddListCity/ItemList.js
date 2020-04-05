import React from "react";
import {ImageBackground, Text, Button, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native'
import {connect} from "react-redux";
import {setCity} from "../../src/redusers/CityReducer";


class ItemList extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.block} onPress={() => {
                this.props.event(this.props.city)
            }}>
                <Text style={styles.text}>
                    {this.props.city}
                </Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    block: {
        fontSize: 20,
        height: 60,
        padding: 10,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 100 + "%",
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    text: {
        fontSize: 20,
        color: "black"
    }
});

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(ItemList);

