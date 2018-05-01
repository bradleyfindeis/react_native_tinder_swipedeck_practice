import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderPage from './components/HeaderPage';
import Card from './components/Card';

export default class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderPage />
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
