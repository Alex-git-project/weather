import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 10,
    },
    transition: {
        width: 50,
        height: 100,
        backgroundColor: "white",
        opacity: 0.3,
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        marginBottom: 40
    },
    nameCity: {
        fontSize: 30,
        color: "white",
        marginBottom: 20
    },
    temp: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20
    },
    time: {
        color: "white",
        fontSize: 25,
        textAlign: "center"
    },
    mainData: {
        textAlign: "center"
    },
    dataContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 90 + "%",
    },
    iconBox: {
        width: 80,
        height: 80
    },
    list: {
        flexDirection:"column",
        justifyContent:"space-between",
        paddingBottom:200
    },
    scrollBox: {
        alignItems: "center",

    }
});
