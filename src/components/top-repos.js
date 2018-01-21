import React from 'react';
import { View, Image, Text, TouchableHighlight, ScrollView, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles'


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataFiltered: [],
            dataReady: false,
            searchText: '',
            searchData: []
        };
        this.loadAPI.bind(this);
        this.filterList.bind(this)
    }

    loadAPI () {
        fetch('https://api.github.com/repositories')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    data: data,
                    dataFiltered: data,
                    dataReady: true
                });
            })
            .catch((err) => console.log(err))
    }

    filterList (text) {
        this.setState({
            data: this.state.dataFiltered
        });
        this.setState({
            data: this.state.dataFiltered.filter(function (item) {
                return item.name.match(text)
            })
        })
    }

    getSearchData () {
        fetch('https://api.github.com/repositories')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    data: data,
                    dataFiltered: data,
                    dataReady: true
                });
            })
            .catch((err) => console.log(err))
    }

    componentWillMount () {
        this.loadAPI()
    }

    render() {
        let rows = [];
        if (this.state.dataReady) {
            this.state.data.map(function (item, key) {
                rows.push(
                    <TouchableHighlight key={key + 'key'} style={styles.listItemTouch} onPress={() => Actions.Repo({url: item.url})}>
                        <View style={styles.listItemView}>
                            <Text style={{width: 30, textAlign: 'center'}}>{key + 1}</Text>
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
            <View style={styles.container}>
                <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                    onChangeText={(text) => this.filterList(text)}
                           placeholder={'Search'}/>
                <ScrollView contentContainerStyle={styles.listHolderContent} style={styles.listHolder}>
                    <View>{rows}</View>
                </ScrollView>
            </View>
        )
    }
}

