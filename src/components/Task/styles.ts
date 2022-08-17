import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'relative',
        top: -30,
    },
    input: {
        backgroundColor:'#333333',        
        height: 70,
        width: '70%',
        alignItems: 'center',
        marginLeft: 20,       
        borderRadius: 10,
        padding: 10,
        color: '#D9D9D9',
        fontSize: 16
        

    },
    addButton: {                
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4EA8DE',
        flex: 1,
        marginRight: 20,
        marginLeft: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFF',
        borderColor: '#FFF',
        borderWidth: 2,        
        borderRadius: 900,
        fontSize: 20,
        padding: 0,
        margin: 0,
    }
})