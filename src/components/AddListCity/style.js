import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    textInput:{
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        padding:10,
        color: "white",
    },
    ImageBackground: {
        flex: 1,
        width: null,
        height: null,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba( 0, 0, 0, 0.3 )',
    },
    block: {
        fontSize: 20,
        height: 60,
        padding: 10,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 100 + "%",
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
});
