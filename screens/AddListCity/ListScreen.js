import React from "react";
import {ImageBackground, Text, Button, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native'
import ItemList from "./ItemList";
import {connect} from "react-redux";
import {searchCity, setCity, setInputSearch, clearInput,clearMassSearch} from "../../src/redusers/CityReducer";

class ListScreen extends React.Component {

    onChangeText = (text) => {
        this.props.dispatch(setInputSearch(text));
        if ((text.split("")).length > 3) {
            this.props.dispatch(searchCity())
        } else if((text.split("")).length < 3) {
            this.props.dispatch(clearMassSearch())
        }
    };

    onClickItem=(city)=>{
        this.props.dispatch(setCity(city));
        this.props.navigation.navigate("Home")
    };

    componentWillUnmount(){
        this.props.dispatch(clearInput())
        this.props.dispatch(clearMassSearch())
    }

    render() {
        let list = this.props.state.city.searchCity;
        return(
            <View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.onChangeText(text)}
                    value={this.props.state.city.inputSearch}
                />
                {list.length > 0 ?
                    <View>
                        {this.props.state.city.searchCity.map(item =>
                            <ItemList city={item.name} event={this.onClickItem} />
                        )}
                    </View> : null}
            </View>

        );
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

const styles = StyleSheet.create({
    textInput:{
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        padding:10
    }
});

export default connect(mapStateToProps)(ListScreen);


{/*<View>*/}
{/*    { this.props.state.city.allCity.map( item =>*/}
{/*            <ItemList city={item} ></ItemList>*/}
{/*    )}*/}

{/*</View>*/}
