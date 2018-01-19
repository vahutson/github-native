import React from 'react';
import { StyleSheet } from 'react-native'

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
        width: 55,
        height: 55,
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
        width: '100%',
        backgroundColor: '#000000',
    },
    listHolderContent: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    check: {
        backgroundColor: '#000'
    },
    listItemTouch: {
        width: 355,
        borderBottomWidth: .3,
        borderColor: '#000',
        backgroundColor: '#ffffff',
    },
    listItemView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

export default styles;