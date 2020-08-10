import { StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding:40
    },

    content: {
        // flex1 é para ocupar o tamanho máximo na tela
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize:32,
        lineHeight:37,
        maxWidth:200,
    },

    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 290,
        
    },

    okButton:{
        marginVertical:40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 8
    },

    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },

});

export default styles;