import React, {useState} from "react";
import {
    Alert,
    ImageBackground,
    Modal,
    Text,
    TouchableHighlight,
    View,
    Button,
    StyleSheet,
    TextInput
} from 'react-native'
import ListScreen from "./ListCity/ListScreen";


function StartScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ImageBackground source={require('../img/P2E.gif')} style={{flex: 1}} imageStyle={{resizeMode: 'stretch'}}>
            <ListScreen/>
            <Button title={"search"} onPress={() => navigation.navigate('addList')}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 10,

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        //alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    closeButton: {
        backgroundColor: "#F194FF",
        borderRadius: 10,
        elevation: 2,
        color: "white",
        paddingStart: 5,
        paddingEnd: 5,
        paddingTop: 10,
        paddingBottom: 10,
        height: 40,
        width: 90
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
export default StartScreen;
