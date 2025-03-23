import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Language from './components/Language';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import DoctorsSelection from './components/DoctorsSelection';
import DoctorDetail from './components/DoctorDetail';
import DoctorAppointment from './components/DoctorAppointment';
import PatientDetails from './components/PatientDetails';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        {/* <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Doctor Details', headerBackTitle: 'Back', }}/>
        <Stack.Screen name="DoctorsSelection" component={DoctorsSelection} options={{ title: 'Select Doctor', headerBackTitle: 'Back', }} />
        <Stack.Screen name="DoctorDetail" component={DoctorDetail} options={{ title: 'Doctor Details', headerBackTitle: 'Back', }}/>
        <Stack.Screen name="DoctorAppointment" component={DoctorAppointment} options={{ title: 'New Appointment' }} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} /> */}
      </Stack.Navigator>
    </NavigationContainer>
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
