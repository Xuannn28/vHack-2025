import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Platform,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const UploadScreen = () => {
  const navigation = useNavigation();
  const [fileInfo, setFileInfo] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [doctor, setDoctor] = useState('');
  const [reason, setReason] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Format functions
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'numeric', 
      day: 'numeric' 
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  // Document picker function
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['audio/*'],
        copyToCacheDirectory: true
      });
      
      if (result.canceled === false) {
        const file = result.assets[0];
        setFileInfo({
          name: file.name,
          uri: file.uri,
          size: file.size,
          mimeType: file.mimeType
        });
      }
    } catch (error) {
      console.error('Error picking document:', error);
      Alert.alert('Error', 'Failed to pick document');
    }
  };

  // Date and time change handlers
  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const newDate = new Date(date);
      newDate.setFullYear(selectedDate.getFullYear());
      newDate.setMonth(selectedDate.getMonth());
      newDate.setDate(selectedDate.getDate());
      setDate(newDate);
    }
  };

  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      const newDate = new Date(date);
      newDate.setHours(selectedTime.getHours());
      newDate.setMinutes(selectedTime.getMinutes());
      setDate(newDate);
    }
  };

  const simulateTranscription = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = {
          text: "Doctor: Hello, how are you feeling today?\nPatient: I've been having some headaches lately.\nDoctor: How often do they occur?\nPatient: About twice a week, usually in the afternoons.",
          words: Math.floor(Math.random() * 500) + 200,
          duration: `00:0${Math.floor(Math.random() * 5) + 2}:00`
        };
        resolve(result);
      }, 2000);
    });
  };

  const handleSubmit = async () => {
    if (!fileInfo) {
      Alert.alert('Error', 'Please upload an audio file first');
      return;
    }
    
    if (!doctor.trim()) {
      Alert.alert('Error', 'Please enter doctor\'s name');
      return;
    }
  
    if (!reason.trim()) {
      Alert.alert('Error', 'Please enter reason for visit');
      return;
    }
    
    try {
      setIsUploading(true);
      
      const transcription = await simulateTranscription();
      const id = Date.now().toString();
      const formattedDate = `${date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}`;
      
      // Create both the recording and appointment data
      const newRecording = {
        id,
        title: reason.trim(),
        doctor: doctor.trim(),
        date: formattedDate,
        fullDate: date.toISOString(),
        words: transcription.words || 0,
        duration: transcription.duration || '00:00',
        transcriptionText: transcription.text || 'No transcription available'
      };
      
      // Create appointment data that will be used later
      const appointmentData = {
        id,
        title: reason.trim(),
        date: formattedDate,
        doctor: doctor.trim(),
        reason: reason.trim(),
        keyTakeaways: "Patient reports recurring headaches, twice weekly in afternoons.",
        observations: "Patient appears to be experiencing tension headaches possibly related to stress or posture.",
        recommendations: [
          "Try over-the-counter pain relievers as needed",
          "Practice stress reduction techniques",
          "Consider neck stretching exercises"
        ],
        medication: "None prescribed at this time, OTC analgesics recommended as needed",
        nextAppointment: "In 4 weeks if symptoms persist",
        selfMonitoring: "Keep a headache journal noting frequency, duration, and potential triggers"
      };
      
      // Save both pieces of data
      const existingData = await AsyncStorage.getItem('recordings');
      let recordings = existingData ? JSON.parse(existingData) : [];
      recordings.unshift(newRecording);
      await AsyncStorage.setItem('recordings', JSON.stringify(recordings));
      
      // Also save appointment data
      await AsyncStorage.setItem(`appointment_${id}`, JSON.stringify(appointmentData));
      
      // Navigate to Processing screen with the appointment data
      navigation.navigate('Processing', { 
        appointment: appointmentData,
        recordingId: id, // Pass the recording ID to the Processing screen
      });
      
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to process recording');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transcription</Text>
      
      <TouchableOpacity style={styles.uploadBox} onPress={pickDocument}>
        <Ionicons name="cloud-upload-outline" size={40} color="#333" />
        <Text style={styles.uploadText}>
          {fileInfo ? `Selected: ${fileInfo.name}` : 'Upload Voice Recording'}
        </Text>
        {fileInfo && (
          <Text style={styles.fileDetails}>
            {(fileInfo.size / 1024 / 1024).toFixed(2)} MB
          </Text>
        )}
      </TouchableOpacity>
      
      <Text style={styles.label}>Date of Checkup</Text>
      <TouchableOpacity 
        style={styles.dateInput} 
        onPress={() => setShowDatePicker(true)}
      >
        <Text>{formatDate(date)}</Text>
        <Ionicons name="calendar-outline" size={20} color="#3A1E70" />
      </TouchableOpacity>
      
      <Text style={styles.label}>Time of Checkup</Text>
      <TouchableOpacity 
        style={styles.dateInput} 
        onPress={() => setShowTimePicker(true)}
      >
        <Text>{formatTime(date)}</Text>
        <Ionicons name="time-outline" size={20} color="#3A1E70" />
      </TouchableOpacity>
      
      <Text style={styles.label}>Doctor's Name</Text>
      <TextInput 
        style={styles.input} 
        value={doctor} 
        onChangeText={setDoctor} 
      />
      
      <Text style={styles.label}>Reason for Visit</Text>
      <TextInput 
        style={styles.input} 
        value={reason} 
        onChangeText={setReason} 
      />
      
      <TouchableOpacity 
        style={[styles.button, isUploading && styles.disabledButton]} 
        onPress={handleSubmit}
        disabled={isUploading}
      >
        {isUploading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Submit</Text>
        )}
      </TouchableOpacity>
      
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onDateChange}
        />
      )}
      
      {showTimePicker && (
        <DateTimePicker
          value={date}
          mode="time"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onTimeChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#AFC2D5', 
    padding: 16 
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#3A1E70', 
    marginVertical: 16 
  },
  uploadBox: { 
    backgroundColor: '#EFE9F7', 
    padding: 20, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginBottom: 20 
  },
  uploadText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#3A1E70', 
    marginTop: 10 
  },
  fileDetails: {
    fontSize: 12,
    color: '#666',
    marginTop: 5
  },
  label: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#3A1E70', 
    marginTop: 10 
  },
  input: { 
    backgroundColor: '#EFE9F7', 
    padding: 10, 
    borderRadius: 8, 
    marginTop: 5 
  },
  dateInput: {
    backgroundColor: '#EFE9F7',
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: { 
    backgroundColor: '#3A1E70', 
    padding: 12, 
    borderRadius: 8, 
    marginTop: 20, 
    alignItems: 'center' 
  },
  disabledButton: {
    backgroundColor: '#9E92B2'
  },
  buttonText: { 
    color: 'white', 
    fontWeight: 'bold' 
  },
});

export default UploadScreen;