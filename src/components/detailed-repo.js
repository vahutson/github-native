import React from 'react';
import { View, Image, Text, Linking, ScrollView } from 'react-native';
import { getPulls } from '../actions/actions'
import { connect } from 'react-redux';
import styles from '../styles'

const mapDispatchToProps = {
    getPulls
};

class Repo extends React.Component {

    getPullsData () {
        fetch(`https://api.github.com/repos/${this.props.repoInfo.owner.login}/${this.props.repoInfo.name}/pulls`)
            .then((res) => res.json())
            .then((data) => {
                this.props.getPulls(data);
            })
            .catch((err) => alert(err));
    }

    componentWillMount () {
        this.getPullsData()
    }

    render() {
        let pulls = [];
        if (this.props.pullsReady) {
            this.props.pullsData.map(function(item, key) {
                pulls.push(<View key={key + 'pull'}>
                    <View style={styles.pullsInfo}>
                    <Text>{item.user.login}</Text>
                    <Text>{item.base.repo.name}</Text>
                        <Text>{item.number}</Text>
                    </View>
                            </View>)
            })
        } else {
            pulls.push(<Text key="key1">Loading pull requests info...</Text>)
        }
        let repo =
            <View style={styles.repoContainer}>
                <Image source={{uri: this.props.repoInfo.owner.avatar_url}} style={styles.repoUserPic}/>
                <Text style={styles.repoUserName}>{this.props.repoInfo.owner.login}</Text>
                <Text style={styles.repoName}>{this.props.repoInfo.name}</Text>
                <Text style={{color: 'blue', marginBottom: 20, textAlign: 'center'}}
                      onPress={() => Linking.openURL(this.props.repoInfo.html_url)}>{this.props.repoInfo.html_url}</Text>
                <Text style={styles.repoDescription}>{this.props.repoInfo.description}</Text>
                <View style={styles.repoInfoCont}>
                    <View>
                        <Image source={require('../image/star.png')} style={styles.repoInfoIcon}/>
                        <Text style={styles.counter}>{this.props.repoInfo.stargazers_count}</Text>
                    </View>
                    <View>
                        <Image source={require('../image/eye.png')} style={styles.repoInfoIcon}/>
                        <Text style={styles.counter}>{this.props.repoInfo.watchers_count}</Text>
                    </View>
                    <View>
                        <Image source={require('../image/bug.png')} style={styles.repoInfoIcon}/>
                        <Text style={styles.counter}>{this.props.repoInfo.open_issues_count}</Text>
                    </View>
                </View>
                <View  style={{width: '100%'}}><Text style={{alignSelf: 'center', fontSize: 20}}>Last pull requests</Text>
                    <View style={{flexDirection: 'row', height: 30}}>
                        <View><Text>user</Text></View>
                        <View><Text>name</Text></View>
                        <View><Text>number</Text></View>
                        <View><Text>status</Text></View>
                    </View>
                    {pulls.slice(0, 10)}</View>
            </View>;
        return (
            <ScrollView>
                {repo}</ScrollView>
        )
    }
}

function mapStateToProps (state) {
    return {
        pullsData: state.pullsData,
        pullsReady: state.pullsReady
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Repo)

