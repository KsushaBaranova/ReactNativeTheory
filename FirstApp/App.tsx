import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function RootScreen({navigation}) {
  return (
    <View style={[styles.viewScreenStyle, {backgroundColor: 'red'}]}>
      <View style={styles.viewButtonStyle}>
        <Button
          color={'white'}
          title="Push First"
          onPress={() => navigation.navigate('FirstScreen')}
        />
      </View>
    </View>
  );
}

function FirstScreen({navigation}) {
  return (
    <View style={[styles.viewScreenStyle, {backgroundColor: 'red'}]}>
      <View style={styles.viewButtonStyle}>
        <Button
          color={'white'}
          title="Push Second"
          onPress={() => navigation.navigate('SecondScreen')}
        />
      </View>
    </View>
  );
}

function SecondScreen({navigation}) {
  return (
    <View style={[styles.viewScreenStyle, {backgroundColor: 'blue'}]}>
      <View style={styles.viewButtonStyle}>
        <Button
          color={'white'}
          title="Go To Root"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RootScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="RootScreen" component={RootScreen} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  viewScreenStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButtonStyle: {
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
  },
});
