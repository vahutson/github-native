import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import List from './src/components/top-repos';
import Repo from './src/components/detailed-repo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import gitReduce from './src/reducers/reducers';
import { getList, listReady } from './src/actions/actions';
const store = createStore(gitReduce);

export default class App extends React.Component {
    constructor() {
        super();
        this.loadAPI.bind(this)
    }

    loadAPI () {
        fetch('https://api.github.com/repositories')
            .then((res) => res.json())
            .then((data) => {
                store.dispatch(getList(data));
                store.dispatch(listReady())
            })
            .catch((err) => alert(err));
    }

    componentWillMount () {
        this.loadAPI();
    }

  render() {
    return (
        <Provider store={store}>
        <Router navigationBarStyle={{paddingTop: 20}} titleStyle={{position: 'absolute', left: 85, paddingBottom: 20}}>
            <Scene key='root'>
                <Scene key='List' component={List} title='Top GitHub Repos' initial='true'/>
                <Scene key='Repo' component={Repo} title='Repo'/>
            </Scene>
        </Router>
        </Provider>
    );
  }
}