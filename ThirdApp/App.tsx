import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function MainScreen({navigation, route}) {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (route.params?.number) {
      setInputValue(route.params?.number);
    }
  }, [route.params?.number]);

  return (
    <View style={styles.viewRootScreenStyle}>
      <TextInput
        style={styles.textInputStyle}
        placeholder={'Input number'}
        onChangeText={value => setInputValue(value)}
        value={inputValue}
      />
      <View style={[styles.viewButtonStyle, {backgroundColor: 'red'}]}>
        <Button
          color={'white'}
          title="Push Red"
          onPress={() =>
            navigation.navigate('ColorScreen', {
              color: 'red',
              number: inputValue,
            })
          }
        />
      </View>
      <View style={[styles.viewButtonStyle, {backgroundColor: 'green'}]}>
        <Button
          color={'white'}
          title="Push Green"
          onPress={() =>
            navigation.navigate('ColorScreen', {
              color: 'green',
              number: inputValue,
            })
          }
        />
      </View>
      <View style={[styles.viewButtonStyle, {backgroundColor: 'blue'}]}>
        <Button
          color={'white'}
          title="Push Blue"
          onPress={() =>
            navigation.navigate('ColorScreen', {
              color: 'blue',
              number: inputValue,
            })
          }
        />
      </View>
    </View>
  );
}

function ColorScreen({route, navigation}) {
  let {color, number} = route.params;
  const [inputValueColor, setInputValueColor] = useState<string>(number);

  return (
    <View style={[styles.viewColorScreenStyle, {backgroundColor: color}]}>
      <TextInput
        style={styles.textInputStyle}
        placeholder={'Input number'}
        onChangeText={value => setInputValueColor(value)}
        value={inputValueColor}
        onBlur={() =>
          navigation.navigate({
            name: 'MainScreen',
            params: {number: inputValueColor},
          })
        }
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{title: 'Input Text'}}
        />
        <Stack.Screen
          name="ColorScreen"
          component={ColorScreen}
          options={({route}) => ({title: route.params.color})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  viewRootScreenStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#DAA520',
  },
  viewButtonStyle: {
    height: 60,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  viewColorScreenStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    height: 40,
    width: '60%',
    borderRadius: 15,
    backgroundColor: 'white',
    paddingLeft: 15,
  },
  textStyle: {
    color: 'white',
    fontSize: 50,
  },
});
