import React from 'react';
import { StyleSheet, View, Image, TextInput, Text, ScrollView } from 'react-native';

class List extends React.Component {
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          data: [],
          dataReady: false
      };
      this.loadAPI.bind(this)
  }

    loadAPI () {
        fetch('https://api.github.com/repositories')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    data: data,
                    dataReady: true
                });
            })
            .catch((err) => console.log('error!'))
    }
    componentWillMount () {
        this.loadAPI()
    }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                   // onSubmitEditing={}
                   // onChangeText={}
                   placeholder={'Enter repos name'}/>
          <Text style={styles.textA}>Top GitHub repositories</Text>
          <ScrollView contentContainerStyle={styles.listHolderContent} style={styles.listHolder}>
              <List data={this.state.data} dataReady={this.state.dataReady}/>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(30, 43, 48)',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 35
    },
    input: {
        width: '90%',
        padding: 5,
        fontSize: 15,
        color: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 25,
        textAlign: 'center'
    },
    imageHolder: {
        width: 50,
        height: 50,
        borderWidth: .5,
        borderColor: '#000',
        borderRadius: 100,
    },
    textA: {
        color: '#FFF',
        margin: 10,
        fontSize: 30,
    },
    textB: {
        color: '#000',
        margin: 10,
        fontSize: 12,
    },
    listHolder: {
        width: '90%',
        backgroundColor: '#b6deff',
        borderRadius: 5,
        overflow: 'scroll'
    },
    listHolderContent: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    check: {
        backgroundColor: '#000'
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        margin: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        borderRadius: 5,
    }
});
