import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getDataState } from '../selectors/index'
import { getList, filterList } from '../actions/actions';
import styles from '../styles';

const mapDispatchToProps = {
    filterList,
    getList
};

class List extends React.Component {

    searchRepo(text) {
        let searchText = '';
        if(text) {
            searchText = text;
        } else {
            searchText = 'stars:>1'
        }
        fetch(`https://api.github.com/search/repositories?q=${searchText}&sort=stars&page=1&per_page=20`)
            .then((res) => res.json())
            .then((data) => {
            if (data.items || data.item.length === 0) {
                this.props.getList(data.items)
            }
            })
            .catch((err) => alert(err));
    }

    render() {
        let rows = [];
        if (this.props.dataReady && this.props.data.length > 0) {
            this.props.data.map(function (item, key) {
                rows.push(
                    <TouchableOpacity key={key + 'key'} style={styles.listItemTouch}
                                        onPress={() => Actions.Repo({repoInfo: item})}>
                        <View style={styles.listItemView}>
                            <View style={styles.listItemViewUser}>
                                <Text style={styles.numberList}>{key + 1}</Text>
                                <Image borderRadius={50} style={styles.imageHolder} source={{uri: item.owner.avatar_url}}/>
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
        } else if (this.props.dataReady && this.props.data.length === 0){
            rows.push(<Text key='loading' style={styles.textA}>No results</Text>)
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

const makeMapStateToProps = () => {
    const mapStateToProps = (state) => {
        return {
            data: getDataState(state),
            dataReady: state.dataReady,
            dataFiltered: state.dataFiltered
        }
    };
    return mapStateToProps
};

export default connect(makeMapStateToProps, mapDispatchToProps)(List)