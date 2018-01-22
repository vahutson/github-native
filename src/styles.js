import React from 'react';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    input: {
        width: '100%',
        padding: 2,
        fontSize: 15,
        color: '#7b7b7b',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#7b7b7b'
    },
    tableHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: 20,
        borderBottomWidth: 1,
        borderColor: '#7b7b7b'
    },
    tableHeaderItem: {
        flex: 1,
        justifyContent: 'center',
        width: '50%'
    },
    imageHolder: {
        width: 55,
        height: 55,
        borderRadius: 100
    },
    textA: {
        color: '#000000',
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
        backgroundColor: '#e1e1e1',
    },
    listHolderContent: {
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        justifyContent: 'space-between',
    },
    listItemViewUser: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    listItemViewRepo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 40
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
        margin: 10,
        textAlign: 'center'
    },
    repoUserName: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center'
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
    },
    counter: {
        textAlign: 'center'
    },
    centerText: {
        textAlign: 'center'
    },
    numberList: {
        width: 20,
        height: 20,
        margin: 4,
        textAlign: 'center',
        fontSize: 10,
        lineHeight: 16,
        borderWidth: .5,
        borderColor: '#000000',
        borderRadius: 100
    }
});

export default styles;