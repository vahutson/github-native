import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import sagaRoot from './src/sagas/index'
import gitReduce from './src/reducers/reducers';
import { getList, listReady } from './src/actions/actions';
import List from './src/components/top-repos';
import Repo from './src/components/detailed-repo';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(gitReduce, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagaRoot);

export default class App extends React.Component {
    constructor() {
        super();
        this.loadAPI.bind(this);
    }

    loadAPI () {
        fetch('https://api.github.com/search/repositories?q=stars:>1&sort=stars&page=1&per_page=20')
            .then((res) => res.json())
            .then((data) => {
                store.dispatch(getList(data.items));
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
        <Router navigationBarStyle={{}} titleStyle={{lineHeight: 25, fontSize: 20}}>
            <Scene key='root'>
                <Scene key='List' component={List} titleStyle={{alignSelf: 'center'}} title='Top GitHub Repos' initial='true'/>
                <Scene key='Repo' component={Repo} titleStyle={{alignSelf: 'center'}} title='Repo'/>
            </Scene>
        </Router>
        </Provider>
    );
  }
}