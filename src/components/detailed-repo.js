import React from 'react';
import { View, Image, Text, Linking, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles'

class Repo extends React.Component {

    render() {
        let repo =
                <View style={styles.repoContainer}>
                    <Image source={{uri: this.props.avatar}} style={styles.repoUserPic}/>
                <Text style={styles.repoUserName}>{this.props.login}</Text>
                <Text style={styles.repoName}>{this.props.name}</Text>
                <Text style={{color: 'blue', marginBottom: 20, textAlign: 'center'}} onPress={() => Linking.openURL(this.props.url)}>{this.props.html_url}</Text>
                <Text style={styles.repoDescription}>{this.props.description}</Text>
                <View style={styles.repoInfoCont}>
                        <View>
                            <Image source={require('../image/star.png')} style={styles.repoInfoIcon}/>
                            <Text style={styles.counter}>{this.props.stars}</Text>
                        </View>
                        <View>
                            <Image source={require('../image/eye.png')} style={styles.repoInfoIcon}/>
                            <Text style={styles.counter}>{this.props.watchers}</Text>
                        </View>
                        <View>
                            <Image source={require('../image/bug.png')} style={styles.repoInfoIcon}/>
                            <Text style={styles.counter}>{this.props.issues}</Text>
                        </View>
                    </View>
                </View>
        return (
            <ScrollView>{repo}</ScrollView>
        )
    }
}


export default Repo

