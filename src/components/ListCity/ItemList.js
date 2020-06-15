import React, {useState, useEffect} from "react";
import {
    ImageBackground,
    Text,
    Button,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight
} from 'react-native'
import {useSelector, useDispatch} from "react-redux";
import {addCity, deleteValueApi} from "../../redusers/WeatherReducer";
import {temp} from "../../../common/getTemp"
import Swipeable from "react-native-swipeable";
import {deleteCity} from "../../redusers/CityReducer";

const ItemList = (props) => {
    const [disable, setDisable] = useState(false);
    const [temperature, setTemperature] = useState("");
    const state = useSelector(state => state.weather);
    const dispatch = useDispatch();
    const tempObj = temp(props.city);

    useEffect(() => {
        if (tempObj !== null) {
            setTemperature(state.typeTemp ? `${tempObj.temp_c} C` : `${tempObj.temp_f} F`);
            setDisable(false)
        } else {
            setDisable(true)
        }
    });

    let openCity = () => {
        if (!disable) {
            dispatch(addCity(props.city));
            props.navigation.navigate('cities');
        }
    };

    const deleteItem = () => {
        dispatch(deleteValueApi(props.city))
        dispatch(deleteCity(props.city));
    };

    return (
        <Swipeable rightActionActivationDistance={200}
                   onRightActionActivate={() => deleteItem()}
                   rightContent={(
                       <View style={[styles.rightSwipeItem, {backgroundColor: 'red'}]}>
                           <Text>Delete</Text>
                       </View>
                   )}>
            <TouchableOpacity style={disable ? styles.disableBlock : styles.block} onPress={openCity}>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.text}>
                            {props.city}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            {temperature}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>

    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    block: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        fontSize: 30,
        height: 80,
        padding: 20,
        marginTop: 5,
    },
    disableBlock: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        fontSize: 30,
        height: 80,
        padding: 20,
        marginTop: 5,
        backgroundColor: "black",
    },
    text: {
        fontSize: 20,
        color: "white"
    },
    rightSwipeItem: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20
    },
});

export default ItemList;

