import React, {useEffect, useState} from "react";
import {
    ImageBackground,
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    Modal
} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import ListScreen from "../src/components/ListCity/ListScreen";
import useService from "../common/getCurrentCity"
import Services from "../src/service/fetchMap"
import ServicesCity from "../src/service/listCity"
import SecondWeatherApi from "../src/service/fetchGridForecast"
import {setValueCityGridApi, setValueCityMapApi} from "../src/redusers/WeatherReducer";
import {setTypeTemp} from "../src/redusers/WeatherReducer";
import Swipeable from 'react-native-swipeable';
import {setAllCity} from "../src/redusers/CityReducer";

function StartScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    let {getСoordinates} = useService();
    let listCity;
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    let listPromiseMapApi;
    let listPromiseGridApi;


    const setPromise = () => {
        listCity.map(item => listPromiseMapApi.push(Services.API(item)));
        listCity.map(item => listPromiseGridApi.push(SecondWeatherApi.API(item)));
    };

    const getListCity = () => {
        if (state.city.listAllCity.length !== 0) return;
        ServicesCity.API().then(value => {
            dispatch(setAllCity(value));
        })
    };

    const getDataApi = () => {
        listPromiseMapApi = [];
        listPromiseGridApi = [];
        listCity = state.city.workCity;
        setPromise();
        let listWeather = state.weather.valueCityMapApi;
        if (listWeather.length !== listPromiseMapApi.length) {
            Promise.all(listPromiseMapApi).then(value => {
                console.log(value);
                dispatch(setValueCityMapApi(value))
            });
            Promise.all(listPromiseGridApi).then(value => {
                console.log(value);
                let clearMass = value.filter(item => !item.hasOwnProperty('error'));
                dispatch(setValueCityGridApi(clearMass))
            });
        }
    };

    useEffect(() => {
        getСoordinates(setModalVisible);
        getListCity()
    }, []);

    useEffect(() => {
        getDataApi()
    });

    return (
        <ImageBackground source={require('../img/P2E.gif')}
                         style={styles.centeredView}
                         imageStyle={{resizeMode: 'stretch'}}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalView}>
                    <View style={styles.boxModalView}>
                        <Text style={styles.textStyle}>We hav problem with search you city</Text>
                        <TouchableHighlight
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <ListScreen navigation={navigation}/>
            <View style={styles.buttonGroup}>
                <TouchableHighlight style={styles.textStyle} onPress={() => {
                    dispatch(setTypeTemp(!state.weather.typeTemp))
                }}>
                    <Text style={styles.textStyle}>
                        C/F
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.textStyle} onPress={() => {
                    navigation.navigate('addList');
                }}>
                    <Text style={styles.textStyle}>
                        Search
                    </Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 10,
    },
    textStyle: {
        color: "white",
        fontSize: 22,
    },
    buttonGroup: {
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10
    },
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    boxModalView: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 5,
        padding: 10,
        height: 150,
        justifyContent: "space-between",
        alignItems: "center"
    }
});
export default StartScreen;
