import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProcessingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  // Make sure we always have appointment data
  const appointment = route.params?.appointment || null;
  
  useEffect(() => {
    if (!appointment) {
      // If there's no appointment data, go back to home
      navigation.replace('Home');
      return;
    }
    
    // Show processing screen for 3 seconds then go to appointment summary screen
    const timer = setTimeout(() => {
      navigation.replace('AppointmentSummary', { 
        appointmentId: appointment.id
      });
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [appointment, navigation]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Processing...</Text>
      <ActivityIndicator size="large" color="#3A1E70" />
      <Text style={styles.subtitle}>Analyzing your transcription</Text>
      <Text style={styles.description}>Creating appointment summary</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AFC2D5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A1E70',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#3A1E70',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: '#3A1E70',
    marginTop: 10,
  }
});

export default ProcessingScreen;