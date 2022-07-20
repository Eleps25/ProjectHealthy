import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    countContainer: {
        width: '100%',
    },
    timeContainer: {
        alignItems: "center",
        width: '100%',
        marginBottom: 50
    },
    timeTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12
    },
    timeCountdown: {
        width: '50%',
        height: 55,
        borderColor: '#0077b6',
        borderWidth: 2,
        fontSize: 40,
        textAlign: 'center'
    },
    repetitionContainer: {
        alignItems: "center",
        width: '100%',
    },
    repetitionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12
    },
    repettionCounter: {
        width: '50%',
        height: 55,
        borderColor: '#0077b6',
        borderWidth: 2,
        fontSize: 40,
        textAlign: 'center'
    },
    button: {
        width: '95%'
    }
});

export default styles;