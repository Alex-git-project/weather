import React from "react";
import {
    ImageBackground,
    TouchableOpacity,
    View,
    Text,
    SafeAreaView,
    Image,
    FlatList
} from 'react-native'
import AnimationWeather from "../src/components/AnimationWeather";
import {useDispatch, useSelector} from "react-redux";
import {weather, temp} from '../common/getTemp'
import {AntDesign} from '@expo/vector-icons';
import {addCity} from "../src/redusers/WeatherReducer";
import ItemListDetailsScreen from "../src/components/ItemListDetailsScreen";
import {getCurrentWeather} from '../common/getCurrentWeather'
import {styles} from './style'

const typeRain = {
    typeAnimation: 'rain',
    typeColor: "blue"
};

const typeSnow = {
    typeAnimation: 'snow',
    typeColor: "white"
};

export default function DetailsCity() {
    const {currentCity} = useSelector(state => state.weather);
    const cityData = useSelector(state => state.city);
    const dispatch = useDispatch();
    const weatherObjs = weather(currentCity);
    const currentTemp = temp(currentCity);
    const DATA = [];
    const {initialWeatherForecast, typeWeather} = getCurrentWeather(currentCity);

    const typeAnimation = () => {
        if(typeWeather.type === 'Snow') return <AnimationWeather typeWeather={typeSnow}/> ;
        if(typeWeather.type === 'Rain') return <AnimationWeather typeWeather={typeRain}/>;
        return null
    };

    for (let key in initialWeatherForecast) {
        if (initialWeatherForecast.hasOwnProperty(key)) {
            DATA.push(initialWeatherForecast[key])
        }
    }

    const transition = (type) => {
        const quantityCity = cityData.workCity.length;
        const indexCurrentCity = cityData.workCity.indexOf(currentCity) + 1;
        if (type === 'back' && indexCurrentCity !== 1) {
            const backCity = cityData.workCity[indexCurrentCity - 2];
            dispatch(addCity(backCity))
        }
        if (type === 'next' && indexCurrentCity !== quantityCity) {
            const nextCity = cityData.workCity[indexCurrentCity];
            dispatch(addCity(nextCity))
        }
    };

    const renderList = () => {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <ItemListDetailsScreen title={item.title} value={item.value}/>}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    };

    const typeImg = (typeWether) => {
        if(typeWether === 'Rain') return <Image style={styles.iconBox} source={require('../img/rain.gif')}/>;
        if(typeWether === 'Clouds') return <Image style={styles.iconBox} source={require('../img/cloud.gif')}/>;
        if(typeWether === 'Clear') return <Image style={styles.iconBox} source={require('../img/clear.gif')}/>;
        if(typeWether === 'Snow') return <Image style={styles.iconBox} source={require('../img/clear.gif')}/>;
        return <Image style={styles.iconBox} source={require('../img/clear.gif')}/>;
    };

    const renderWeather =
        <>
            <View style={styles.header}>
                <TouchableOpacity style={styles.transition} onPress={() => transition("back")}>
                    <AntDesign
                        name="arrowleft"
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
                <View style={styles.mainData}>
                    <Text style={styles.nameCity}>{currentCity}</Text>
                    <Text style={styles.temp}>{currentTemp.temp_c} C</Text>
                    {/*<Text style={styles.time}>{weatherObjs?.weatherObjGidApi?.location.localtime.split(" ")} AM</Text>*/}
                </View>
                <TouchableOpacity style={styles.transition} onPress={() => transition("next")}>
                    <AntDesign name="arrowright"
                               size={24}
                               color="black"
                    />
                </TouchableOpacity>
            </View>
            <View></View>
            <View style={styles.scrollBox}>
                {typeImg(typeWeather.type)}
                <View style={styles.list}>
                    {renderList()}
                </View>
            </View>
        </>;


    return (
        <ImageBackground
            style={styles.centeredView}
            source={require('../img/21185-biom-gora-dnevnoe_vremya-iskusstvo-pejzazhi_gor-1080x1920.jpg')}
        >
            {renderWeather}
            {typeAnimation()}
        </ImageBackground>
    );
}


