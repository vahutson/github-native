import React from 'react';
import { View, TextInput, Text, ScrollView } from 'react-native';
import styles from './src/styles';
import List from './src/components/top-repos'



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