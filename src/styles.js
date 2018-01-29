import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'


const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    input: {
        width: '100%',
        fontSize: 15,
        padding: 5,
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
        width: width,
        backgroundColor: '#ffffff',
    },
    listItemView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 55,
    },
    listItemViewUser: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden'
    },
    listItemViewRepo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40
    },
    repoContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    repoUserPic: {
        width: 100,
        height: 100,
    },
    repoName: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
    },
    repoUserName: {
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center'
    },
    repoDescription: {
        textAlign: 'center'
    },
    repoInfoCont: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        margin: 20
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
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#000000',
        borderRadius: 100
    },
    pullsInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default styles;