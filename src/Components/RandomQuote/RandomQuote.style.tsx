import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: '#fdc500',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ffc300',
        elevation: 4,
        width: '90%',
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 5
    },
    quote: {
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    author: {
        fontSize: 15,
        fontWeight: '300',
        fontStyle: 'italic'
    }
})

export default styles;