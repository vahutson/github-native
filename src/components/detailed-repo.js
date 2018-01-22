import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import styles from '../styles'


export default class Repo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataRepo: [],
            repoReady: false
        };

        this.loadRepo.bind(this);
    }

    loadRepo () {
        fetch(this.props.url)
            .then((res) => res.json())
            .then((data) => this.setState({
                dataRepo: data,
                repoReady : true
            }))
            .catch((err) => console.log(err))
    }

    componentWillMount () {
        this.loadRepo()
    }

    render() {
        let repo = '';
        if (this.state.repoReady) {
            repo = <View style={styles.repoContainer}>
                    <Image source={{uri: this.state.dataRepo.owner.avatar_url}} style={styles.repoUserPic}/>
                <Text style={styles.repoUserName}>{this.state.dataRepo.owner.login}</Text>
                <Text style={styles.repoName}>{this.state.dataRepo.name}</Text>
                <Text style={{color: 'blue', marginBottom: 20, textAlign: 'center'}} onPress={() => Linking.openURL(this.state.dataRepo.html_url)}>{this.state.dataRepo.html_url}</Text>
                <Text style={styles.repoDescription}>{this.state.dataRepo.description}</Text>
                <View style={styles.repoInfoCont}>
                        <View>
                            <Image source={require('../image/star.png')} style={styles.repoInfoIcon}/>
                            <Text style={styles.counter}>{this.state.dataRepo.stargazers_count}</Text>
                        </View>
                        <View>
                            <Image source={require('../image/eye.png')} style={styles.repoInfoIcon}/>
                            <Text style={styles.counter}>{this.state.dataRepo.watchers_count}</Text>
                        </View>
                        <View>
                            <Image source={require('../image/bug.png')} style={styles.repoInfoIcon}/>
                            <Text style={styles.counter}>{this.state.dataRepo.open_issues_count}</Text>
                        </View>
                    </View>
                </View>
        } else {
            repo = <View style={styles.repoContainer}><Text style={styles.textA}>Loading...</Text></View>
        }
        return (
            repo
        )
    }
}

