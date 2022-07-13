import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 25,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    choicesContainer: {
        width: '100%'
    },
    inputsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    timeContainer: {
        alignItems: 'center'
    },
    timeTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    timeInput: {
        marginTop: 10,
        width: 35,
        height: 35,
        borderWidth: 1,
        borderColor: '#0077b6',
        textAlign: 'center',
        fontSize: 15
    },
    repetitionContainer: {
        alignItems: 'center'
    },
    repetitionTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    repetitionInput: {
        marginTop: 10,
        width: 35,
        height: 35,
        borderWidth: 1,
        borderColor: '#0077b6',
        textAlign: 'center',
        fontSize: 15
    },
    buttonsContainer: {
        marginVertical: 30,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    choiceButton: {
        width: '45%'
    },
    startButton: {
        width: '95%'
    }
})

export default styles;