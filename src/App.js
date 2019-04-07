import React, {Component} from 'react';
import {Stack, Router, Scene} from 'react-native-router-flux';
import {Manga, Characters} from './sections';
import {configureAxios} from './api';


export default class App extends Component {
  constructor(props) {
    super(props);
    configureAxios();
  }
  render() {
    return (
      <Router>
        <Stack key={"root"}>
          <Scene key={"Manga"} component={Manga} initial />
          <Scene key={"Characters"} component={Characters}  />
        </Stack>
      </Router>
    );
  }
}