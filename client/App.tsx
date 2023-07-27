// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthForm from './src/screens/Auth/AuthForm';

function Started({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Started">
        <Stack.Screen
          options={{headerShown: false}}
          name="Started"
          component={Started}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={AuthForm}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={AuthForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
