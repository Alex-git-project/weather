import React, {useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    Modal,
    TouchableHighlight,
    ImageBackground
} from 'react-native'


export default function ModalWindow() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.modalView}>
                <TouchableHighlight
                    style={{...styles.openButton, backgroundColor: "#2196F3"}}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableHighlight>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    columnBox: {
        width: 200,
        borderStyle: "solid",
        borderColor: "white",
        borderBottomWidth: 2,
        padding: 10,
    },
    itemBox: {
        color: "white",
        fontSize: 25,
    }
});

