import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  NavigationScreenProp, StackActions, NavigationActions,
} from 'react-navigation';
import { useDidMount } from 'react-hooks-lib';

import Main from './src/page/Main';
import UserInputA from './src/page/UserInputA';

function App(props: { navigation: NavigationScreenProp<{}> }) {
  function goMain() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'UserInputA' })],
    });
    props.navigation.dispatch(resetAction);
  }

  // useDidMount(() => {
  //   setTimeout( () => {
  //     goMain();
  //   },3000);
  // });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ワンストワンボ</Text>
      <TouchableOpacity style={styles.titleContainer} onPress={goMain}>
        <Text style={styles.start}>Start!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: 20,
    backgroundColor: '#f9a40a',
    paddingVertical: 0,
    paddingHorizontal: 26,
    borderRadius: 40,
    borderColor: '#f9a40a',
    borderWidth: 2,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#616161',
  },
  start: {
    fontSize: 52,
    fontWeight: 'bold',
    color: '#434343',
    fontFamily: 'sans-serif-medium',
  },
});

const AppNavigator = createStackNavigator({
  Home: App,
  UserInputA,
  Main,
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
