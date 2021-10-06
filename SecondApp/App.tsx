import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function FirstScreen({navigation}) {
  return (
    <View style={[styles.viewRootScreenStyle, {backgroundColor: '#00FA9A'}]}>
      <View style={styles.viewRootButtonStyle}>
        <Button
          color={'white'}
          title="Push VC2"
          onPress={() => navigation.navigate('SecondScreen')}
        />
      </View>
      <View style={styles.viewRootButtonStyle}>
        <Button
          color={'white'}
          title="Modal VC3"
          onPress={() => navigation.navigate('ThirdScreen')}
        />
      </View>
    </View>
  );
}

function SecondScreen({navigation}) {
  return (
    <View style={styles.viewPushScreenStyle}>
      <View style={styles.viewButtonForPushScreenStyle}>
        <Button
          color={'white'}
          title="Close"
          onPress={() => navigation.navigate('FirstScreen')}
        />
      </View>
    </View>
  );
}

function ThirdScreen({navigation}) {
  return (
    <View style={styles.viewModalScreenStyle}>
      <View style={styles.viewButtonForPushScreenStyle}>
        <Button
          color={'white'}
          title="Close"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

function FourthScreen({navigation}) {
  return (
    <View style={styles.viewModalScreenStyle}>
      <View style={styles.viewButtonForPushScreenStyle}>
        <Button
          color={'white'}
          title="Push VC5"
          onPress={() => navigation.navigate('FifthScreen')}
        />
      </View>
    </View>
  );
}

function FifthScreen({navigation}) {
  return (
    <View style={styles.viewPushScreenStyle}>
      <View style={styles.viewButtonForPushScreenStyle}>
        <Button
          color={'white'}
          title="Close"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const FirstStack = createNativeStackNavigator();
const FourthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function FirstStackScreen() {
  return (
    <FirstStack.Navigator
      initialRouteName={'FirstScreen'}
      screenOptions={{headerBackTitle: 'Back'}}>
      <FirstStack.Screen name="FirstScreen" component={FirstScreen} />
      <FirstStack.Screen name="SecondScreen" component={SecondScreen} />
      <FirstStack.Screen name="FifthScreen" component={FifthScreen} />
      <FirstStack.Screen
        name="ThirdScreen"
        component={ThirdScreen}
        options={{presentation: 'modal'}}
      />
    </FirstStack.Navigator>
  );
}

function FourthStackScreen() {
  return (
    <FourthStack.Navigator screenOptions={{headerBackTitle: 'Back'}}>
      <FourthStack.Screen name="FourthScreen" component={FourthScreen} />
      <FourthStack.Screen name="FifthScreen" component={FifthScreen} />
    </FourthStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="FirstStackScreen" component={FirstStackScreen} />
        <Tab.Screen name="FourthStackScreen" component={FourthStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  viewRootScreenStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  viewRootButtonStyle: {
    height: 60,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#9400D3',
  },
  viewPushScreenStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'grey',
  },
  viewButtonForPushScreenStyle: {
    height: 60,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#2F4F4F',
    marginBottom: 50,
  },
  viewModalScreenStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#9932CC',
  },
});