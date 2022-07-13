import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: '#1dd3b0',
        borderWidth: 2,
        borderColor: '#24a58b',
        elevation: 4,
        width: '90%',
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 5
    },
    quote: {
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    author: {
        fontWeight: '300',
        fontStyle: 'italic'
    }
})

export default styles;