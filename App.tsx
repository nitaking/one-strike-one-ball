import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  NavigationScreenProp, StackActions, NavigationActions,
} from "react-navigation";
import Main from './src/page/Main';

function App(props: { navigation: NavigationScreenProp<{}> }) {
  function onPress() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Main' })],
    });
    props.navigation.dispatch(resetAction);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ワンストワンボ</Text>
      <TouchableOpacity style={styles.titleContainer} onPress={onPress}>
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
    fontWeight: "bold",
    color: '#616161',
  },
  start: {
    fontSize: 52,
    fontWeight: "bold",
    color: '#434343',
    fontFamily: 'sans-serif-medium'
  }
});

const AppNavigator = createStackNavigator({
  Home: App,
  Main: Main,
}, {
  initialRouteName: "Home"
});

export default createAppContainer(AppNavigator);
