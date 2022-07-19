import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rootContainer: {
        width: '95%',
        backgroundColor: '#ade8f4',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 50
    },
    image: {
        width: 150,
        height: 150
    },
    title: {
        width: '90%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        paddingBottom: 5
    },
    city: {
        fontSize: 22
    },
    temperature: {
        width: '90%',
        paddingBottom: 4,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black'
    },
    tipContainer: {
        marginTop: 6,
        fontSize: 16,
        fontStyle: 'italic'
    },
    ourTip: {
        fontWeight: 'bold'
    }
});

export default styles;