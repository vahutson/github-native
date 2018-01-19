import React from 'react';
import StyleSheet from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(30, 43, 48)',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 35
    },
    input: {
        width: '90%',
        padding: 5,
        fontSize: 15,
        color: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 25,
        textAlign: 'center'
    },
    imageHolder: {
        width: 50,
        height: 50,
        borderWidth: .5,
        borderColor: '#000',
        borderRadius: 100,
    },
    textA: {
        color: '#FFF',
        margin: 10,
        fontSize: 30,
    },
    textB: {
        color: '#000',
        margin: 10,
        fontSize: 12,
    },
    listHolder: {
        width: '90%',
        backgroundColor: '#b6deff',
        borderRadius: 5,
        overflow: 'scroll'
    },
    listHolderContent: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    check: {
        backgroundColor: '#000'
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        margin: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        borderRadius: 5,
    }
});

export default styles;