import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-around'
    },
    title:{
        color: '#4EA8DE',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5
    },
    badge:{
        backgroundColor: '#333333',
        color: '#D9D9D9',
        padding: 5,
        borderRadius: 90,
    }

})