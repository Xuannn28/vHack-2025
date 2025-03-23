import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [pastRecordings, setPastRecordings] = useState([]);
  
  console.log('Navigation Object:', navigation);
  
  // Load recordings from storage when component mounts or regains focus
  useFocusEffect(
    React.useCallback(() => {
      loadRecordings();
      return () => {}; // cleanup function
    }, [])
  );
  
  // Load saved recordings from AsyncStorage
  const loadRecordings = async () => {
    try {
      const recordingsData = await AsyncStorage.getItem('recordings');
      if (recordingsData) {
        setPastRecordings(JSON.parse(recordingsData));
      }
    } catch (error) {
      console.error('Failed to load recordings:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      {/* Transcription Title */}
      <Text style={styles.title}>Transcription</Text>
      
      {/* Upload Section */}
      <TouchableOpacity 
        style={styles.uploadBox} 
        onPress={() => {
          console.log('Navigating to Upload'); // Debugging log
          navigation.navigate('Upload');
        }}
      >
        <Ionicons name="cloud-upload-outline" size={40} color="#333" />
        <Text style={styles.uploadText}>Upload Voice Recordings</Text>
      </TouchableOpacity>
      
      {/* Past Recordings Section */}
      <Text style={styles.sectionTitle}>Past Recordings</Text>
      
      {pastRecordings.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No recordings yet</Text>
        </View>
      ) : (
        <FlatList
          data={pastRecordings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.recordingItem}
              onPress={() => {
                // Navigate to appointment summary screen
                navigation.navigate('AppointmentSummary', { 
                  appointmentId: item.id
                });
              }}
            >
              <Ionicons name="document-text-outline" size={24} color="white" style={styles.icon} />
              <View style={styles.recordingInfo}>
                <Text style={styles.recordingTitle}>{item.title || 'Untitled'}</Text>
                <Text style={styles.recordingDetails}>
                  {item.duration || '00:00'} | {item.words || 0} Words
                </Text>
              </View>
              <Text style={styles.recordingDate}>{item.date || 'No date'}</Text>
              <TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={20} color="white" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AFC2D5',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3A1E70',
    marginVertical: 16,
  },
  uploadBox: {
    backgroundColor: '#EFE9F7',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A1E70',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A1E70',
    marginBottom: 10,
  },
  recordingItem: {
    backgroundColor: '#111',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 12,
  },
  recordingInfo: {
    flex: 1,
  },
  recordingTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recordingDetails: {
    color: '#ccc',
    fontSize: 12,
  },
  recordingDate: {
    color: '#ccc',
    fontSize: 12,
    marginRight: 10,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyText: {
    color: '#3A1E70',
    fontSize: 16,
  }
});

export default HomeScreen;