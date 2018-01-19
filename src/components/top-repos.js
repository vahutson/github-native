import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import styles from '../styles'


export default class List extends React.Component {
    constructor() {
        super();
    }

    render() {
        let rows = [];
        if (this.props.dataReady) {
            this.props.data.map(function (item, key) {
                rows.push(
                    <TouchableHighlight key={key + 'key'} style={styles.listItemTouch} onPress={() => alert(item.owner.login) }>
                    <View style={styles.listItemView}>
                        <Text style={{width: 30, textAlign: 'center'}}>{key+1}</Text>
                        <Image style={styles.imageHolder} source={{uri: item.owner.avatar_url}}/>
                        <Text style={styles.textB}>User: {item.owner.login}</Text>
                        <Text style={styles.textB}>Repo: {item.name}</Text>
                    </View>
                    </TouchableHighlight>

                )
            });
        } else {
            rows.push(<Text key='loading' style={styles.textA}>Loading...</Text>)
        }

        return (
            <View>{rows}</View>
        )
    }
}

