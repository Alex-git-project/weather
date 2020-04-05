import * as React from 'react';
import {ScrollView,Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import Service from "../service/fetch"

class ListWeather extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            weatherList:null
        };
    }

    getWeather(q){
        Service.API(q).then((json)=>{
            this.setState({weatherList:json})
        });
    }

    toCelsi(t){
        x=(t-31)/2;
        return parseInt(x+(x/10));
    }

    renderWeather(city){
        this.getWeather(city);

        let print = <Text>Loading...</Text>;
        if(this.state.weatherList != null){
            print = this.state.weatherList.list.map((val,key)=>(
                <View style={{width:'100%',marginBottom:10,flex:1,flexDirection:'row'}}>
                    <Text>{val.dt_txt}</Text>
                    <Text> {this.toCelsi(val.main.temp_kf)}</Text>
                    <Text> {val.weather[0].description}</Text>
                </View>
            ))
        }

        return print;
    }

    render(){
        return (
            <ScrollView>
                {this.renderWeather(this.props.city)}
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(ListWeather);
