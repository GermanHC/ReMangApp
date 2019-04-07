import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import {Stack, Router, Scene} from 'react-native-router-flux';
import { Provider } from "react-redux";

import {Manga, MangaDetail} from './sections';
import {configureAxios} from './api';
import * as colors from "./commons/colors";
import { store } from "./config/redux";

export default class App extends Component {
  constructor(props) {
    super(props);
    configureAxios();
    StatusBar.setBarStyle("light-content", false);
  }

  render() {
    return (
      <Provider store={store} >
        <Router>
          <Stack key={"root"}>
              <Scene
                key={"Manga"}
                hideNavBar
                component={Manga}
                {...navBarStyles}
                initial
              />
              <Scene
              key={"MangaDetail"}
              component={MangaDetail}
              {...navBarStyles}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

const navBarStyles = {
  navigationBarStyle: { backgroundColor: colors.navBar },
  titleStyle: { color: colors.white },
  backButtonTextStyle: { color: colors.white },
  backButtonTintColor: colors.white
};