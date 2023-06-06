import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rootContainer: {
        width: 250,
        height: 250,
        backgroundColor: '#ade8f4',
        borderRadius: 5,
        shadowColor: '#0077b6',
        shadowRadius: 20,
        shadowOffset: { width: 2, height: 2 },
        elevation: 5,
        //width: '95%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        width: '90%',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        paddingBottom: 5,
        marginTop: 4
    },
    subtitle: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 19
    },
    button: {
        width: 200,
        marginBottom: 10
    }
})

export default styles;