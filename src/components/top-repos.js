import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { filterList, repoToggleReady} from '../actions/actions'
import styles from '../styles';

const mapDispatchToProps = {
    filterList,
    repoToggleReady
};

class List extends React.Component {

    filterList (text) {
        this.props.filterList(this.props.dataFiltered, this.props.dataFiltered);
        let newData = this.props.dataFiltered.filter(function (item) {
            return item.name.match(text)
        });
        this.props.filterList(newData, this.props.dataFiltered);
    }
    componentWillMount () {
        this.props.repoToggleReady(false)
    }

    render() {
        let rows = [];
        if (this.props.dataReady) {
            this.props.data.map(function (item, key) {
                rows.push(
                    <TouchableOpacity key={key + 'key'} style={styles.listItemTouch}
                                        onPress={() => Actions.Repo({url: item.url})}>
                        <View style={styles.listItemView}>
                            <View style={styles.listItemViewUser}>
                                <Text style={styles.numberList}>{key + 1}</Text>
                                <Image style={styles.imageHolder} source={{uri: item.owner.avatar_url}}/>
                                <Text style={styles.textB}>{item.owner.login}</Text>
                            </View>
                            <View style={styles.listItemViewRepo}>
                                <Text style={styles.textB}>{item.name}</Text>
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
                     onChangeText={(text) => this.filterList(text)}
                           placeholder={'Search'}/>
                <View style={styles.tableHeader}>
                    <View style={styles.tableHeaderItem}><Text style={styles.centerText}>User</Text></View>
                    <View style={styles.tableHeaderItem}><Text style={styles.centerText}>Repo</Text></View>
                </View>
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