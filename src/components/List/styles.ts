import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginLeft: 20,
        marginBottom: 15,
        backgroundColor: '#262626',
        width: '90%',
        padding: 25,
        borderRadius: 10
    },
    text:{
        color: '#FFF',
        paddingLeft: 15
    },
    textChecked:{
        color: '#808080',
        paddingLeft: 15,    
        textDecorationLine: 'line-through'
    },
    checkbox: {
        borderRadius:100
    },
    btnDelete:{
        marginLeft: 'auto'
    },
    trashIcon: {
        height: 19,
        with:19,
    },
    
    touchCheck:{
        alignItems: 'center'
    }

})