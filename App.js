import React, { Component } from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import SearchComponent from './src/Components/SearchComponent';

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS 
        style = {styles.container}
        initailRoute = {{
          title: 'GITAVATAR EXAMPLE',
          component: SearchComponent
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});