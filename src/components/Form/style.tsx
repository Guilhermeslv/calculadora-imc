import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#FFF", 
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#e0e5e5",
        height: 40,
        margin: 12,
        padding: 10,
    }, 
    buttonCalculator: {
        borderRadius:50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#fff",
    },
})