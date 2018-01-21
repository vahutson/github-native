import React from 'react';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(30, 43, 48)',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    input: {
        width: '100%',
        padding: 5,
        fontSize: 15,
        color: 'white',
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
    },
    repoContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 50,
    },
    repoUserPic: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    repoName: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10
    },
    repoUserName: {
        fontSize: 20,
        marginTop: 10
    },
    repoDescription: {
        textAlign: 'center'
    },
    repoInfoCont: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 130
    },
    repoInfoIcon: {
        width: 30,
        height: 30
    }
});

export default styles;