import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../styles';


export default class List extends React.Component {
    render() {
        let rows = [];
        if (this.props.dataReady) {
            this.props.data.map(function (item, key) {
                rows.push(
                    <View key={key} style={styles.listItem}>
                        <Text style={{marginLeft: 5, marginRight: 5}}>{key+1}</Text>
                        <Image style={styles.imageHolder} source={{uri: item.owner.avatar_url}}/>
                        <Text style={styles.textB}>User: {item.owner.login}</Text>
                        <Text style={styles.textB}>Repo: {item.name}</Text>
                    </View>

                )
            });
        } else {
            rows.push(<Text style={styles.textA}>Loading...</Text>)
        }

        return (
            <View>{rows}</View>
        )
    }
}
