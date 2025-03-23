
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Language from './components/Language';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import GetStarted from './components/GetStarted';
import Chatbot from './components/Chatbot';
import ForgotPassword from './components/ForgotPassword';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Language Preference">
        <Stack.Screen name="Language Preference" component={Language} />
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }}/>
        <Stack.Screen name="Chatbot" component={Chatbot} options={{ headerShown: false }}/>
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});