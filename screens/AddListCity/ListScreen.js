import React from "react";
import {ImageBackground, Text, Button, StyleSheet, View, TouchableOpacity} from 'react-native'
import ItemList from "./ItemList";
import {connect} from "react-redux";

class ListScreen extends React.Component {

    render() {


        return (
            <View>
                { this.props.state.city.allCity.map( item =>
                        <ItemList city={item} ></ItemList>
                )}

            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

const styles = StyleSheet.create({});

export default connect(mapStateToProps)(ListScreen);


