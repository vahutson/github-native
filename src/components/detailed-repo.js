import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getRepo, repoToggleReady } from '../actions/actions';
import { connect } from 'react-redux';
import styles from '../styles'

const mapDispatchToProps = {
    getRepo,
    repoToggleReady
};

class Repo extends React.Component {

    loadRepo() {
        fetch(this.props.url)
            .then((res) => res.json())
            .then((data) =>
                this.props.getRepo(data))
            .catch((err) => alert(err));
    }

    componentWillMount () {
        this.props.repoToggleReady(false);
        this.loadRepo();
    }

    render() {
        let repo = '';
        if (this.props.repoReady) {
            repo = <View style={styles.repoContainer}>
                    <Image source={{uri: this.props.dataRepo.owner.avatar_url}} style={styles.repoUserPic}/>
                <Text style={styles.repoUserName}>{this.props.dataRepo.owner.login}</Text>
                <Text style={styles.repoName}>{this.props.dataRepo.name}</Text>
                <Text style={{color: 'blue', marginBottom: 20, textAlign: 'center'}} onPress={() => Linking.openURL(this.props.dataRepo.html_url)}>{this.props.dataRepo.html_url}</Text>
                <Text style={styles.repoDescription}>{this.props.dataRepo.description}</Text>
                <View style={styles.repoInfoCont}>
                        <View>
                            <Image source={require('../image/star.png')} style={styles.repoInfoIcon}/>
                            <Text style={styles.counter}>{this.props.dataRepo.stargazers_count}</Text>
                        </View>
                        <View>
                            <Image source={require('../image/eye.png')} style={styles.repoInfoIcon}/>
                            <Text style={styles.counter}>{this.props.dataRepo.watchers_count}</Text>
                        </View>
                        <View>
                            <Image source={require('../image/bug.png')} style={styles.repoInfoIcon}/>
                            <Text style={styles.counter}>{this.props.dataRepo.open_issues_count}</Text>
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

function mapStateToProps (state) {
    return {
        dataRepo: state.dataRepo,
        repoReady: state.repoReady
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Repo)

