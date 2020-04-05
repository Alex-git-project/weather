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
                <View>
                    <Button title="add City" onPress={()=>{this.props.dispatch(setCity(this.props.city))}}/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    block: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        height: 80,
        padding:20,
        marginTop: 5,
        flexDirection:"row",
        justifyContent:'space-between'
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

