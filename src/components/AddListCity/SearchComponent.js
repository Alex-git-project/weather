import React from "react";
import {
    ImageBackground,
    Text,
    Button,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    FlatList
} from 'react-native'
import ItemList from "./ItemList";
import {connect} from "react-redux";
import {searchCity, setCity, setInputSearch, clearInput,clearMassSearch} from "../../redusers/CityReducer";
import {styles} from "./style";


class SearchComponent extends React.Component {

    renderList = () => {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.props.state.city.searchCity}
                    renderItem={({item}) => <ItemList city={item} event={this.onClickItem}/>}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    };

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
            <ImageBackground source={require('../../../img/P2E.gif')} style={styles.ImageBackground} imageStyle={{resizeMode: 'stretch'}} >
                <View style={styles.container}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.props.state.city.inputSearch}
                        placeholder="Search"
                    />
                    {list.length > 0 ?
                        this.renderList() : null}
                </View>
            </ImageBackground>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(SearchComponent);

