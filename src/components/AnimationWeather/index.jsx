import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MakeItRain from 'react-native-make-it-rain';

const AnimationWeather = ({typeWeather}) => {
    const types = {
        rain: {
            height: 20, width: 20, backgroundColor: "#61dafb",
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50
        },
        snow: {width: 20, height: 20, borderRadius: 100, backgroundColor: "white"},
        wind: {width: 20, height: 20, borderRadius: 100}
    };

    return (
        <MakeItRain
            numItems={10}
            itemDimensions={types[typeWeather.typeAnimation]}
            itemComponent={<View style={{skewX: '45deg'}}></View>}
            itemTintStrength={0.8}
            flavor={"arrive"}
            flipSpeed={0}
            itemColors={[typeWeather.typeColor]}
            fallSpeed={100}
            horizSpeed={10}
        />
    )
};

const styles = StyleSheet.create({
    image: {
        transform: [
            {rotateY: "-45deg"},
            {rotateZ: "-45deg"}
        ],
    },
});

export default AnimationWeather
