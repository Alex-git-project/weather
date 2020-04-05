import React from "react";
import {ImageBackground, Text, Button, StyleSheet, View, TouchableOpacity} from 'react-native'
import ItemList from "./ItemList";
import {connect} from "react-redux";

class ListScreen extends React.Component {
    getCity(){
        let view = <Text>"you not have city"</Text>;
        if(this.props.state.city.workCity.length > 0){
            view = this.props.state.city.workCity.map( item =>
                <ItemList city={item}></ItemList>
            )
        }
        return view
    }
    render() {
        return (
            <>
                {this.getCity()}
            </>
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


