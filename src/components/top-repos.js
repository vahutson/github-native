import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getList, filterList } from '../actions/actions';
import styles from '../styles';

const mapDispatchToProps = {
    filterList,
    getList
};

class List extends React.Component {

    searchRepo(text) {
        fetch(`https://api.github.com/search/repositories?q=${text}&sort=stars&page=1&per_page=10`)
            .then((res) => res.json())
            .then((data) => {
                this.props.getList(data.items);
            })
            .catch((err) => alert(err));
    }

    render() {
        let rows = [];
        if (this.props.dataReady) {
            this.props.data.map(function (item, key) {
                rows.push(
                    <TouchableOpacity key={key + 'key'} style={styles.listItemTouch}
                                        onPress={() => Actions.Repo({repoInfo: item})}>
                        <View style={styles.listItemView}>
                            <View style={styles.listItemViewUser}>
                                <Text style={styles.numberList}>{key + 1}</Text>
                                <Image style={styles.imageHolder} source={{uri: item.owner.avatar_url}}/>
                                <Text  numberOfLines={2} style={styles.textB}>{item.name}</Text>
                            </View>
                            <View style={styles.listItemViewRepo}>
                                <Image style={styles.repoInfoIcon} source={require('../image/star.png')}/>
                                <Text style={styles.textB}>{item.stargazers_count}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            });
        } else {
            rows.push(<Text key='loading' style={styles.textA}>Loading...</Text>)
        }

        return (
            <View style={styles.container}>
                <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                     onChangeText={(text) => this.searchRepo(text)}
                           placeholder={'Search'}/>
                <ScrollView contentContainerStyle={styles.listHolderContent} style={styles.listHolder}>
                    <View>{rows}</View>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        data: state.data,
        dataReady: state.dataReady,
        dataFiltered: state.dataFiltered
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)