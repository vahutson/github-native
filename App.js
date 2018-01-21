import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import List from './src/components/top-repos';
import Repo from './src/components/detailed-repo'



export default class App extends React.Component {


  render() {
    return (
        <Router>
            <Scene key='root'>
                <Scene key='List' component={List} title='Top GitHub Repos' initial='true'/>
                <Scene key='Repo' component={Repo} title='Repo'/>
            </Scene>
        </Router>
    );
  }
}