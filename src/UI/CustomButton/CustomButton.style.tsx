import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rootContainer: {
        height: 50,
        borderWidth: 2,
        borderColor: '#05afd1',
        backgroundColor: '#00b4d8',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerDisabled: {
        height: 50,
        borderWidth: 2,
        borderColor: '#c5c5c5',
        backgroundColor: '#d3d3d3',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        color: 'white',
        textShadowColor: 'black',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 3
    }
});

export default styles;