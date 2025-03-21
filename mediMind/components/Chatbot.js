import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// This would be your actual API service
// For the hackathon, we're creating a simple mockup function
const generateResponse = async (prompt) => {
  // This simulates the API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simple responses for demo purposes
  const responses = {
    "hello": "Hello! I'm MediMind, your healthcare assistant. How can I help you today?",
    "headache": "Headaches can be caused by various factors including stress, dehydration, lack of sleep, or eye strain. For mild headaches, you might try drinking water, resting in a dark room, or taking over-the-counter pain relievers. If headaches are severe or persistent, please consult a healthcare provider.",
    "cold": "Common cold symptoms include runny nose, sore throat, coughing, and mild fever. Rest, staying hydrated, and over-the-counter medications can help manage symptoms. Most colds resolve within 7-10 days. If symptoms worsen or persist longer, consider consulting a doctor.",
    "exercise": "Regular exercise is beneficial for both physical and mental health. For general health, aim for at least 150 minutes of moderate activity per week. This could include walking, swimming, cycling, or other activities you enjoy. Always start gradually if you're new to exercise.",
    "diet": "A balanced diet typically includes fruits, vegetables, whole grains, lean proteins, and healthy fats. Try to limit processed foods, excessive sugar, and salt. Remember, individual nutritional needs can vary based on age, sex, activity level, and health conditions."
  };
  
  // Check for keyword matches
  for (const [keyword, response] of Object.entries(responses)) {
    if (prompt.toLowerCase().includes(keyword)) {
      return response;
    }
  }
  
  // Default response
  return "I'm not sure about that specific medical topic. In a complete version, I would access the Gemini API for comprehensive medical information. For any urgent health concerns, please consult a healthcare professional.";
};

const Chatbot = ({ navigation }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi, I\'m MediMind! How can I help with your health questions today?', isUser: false }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const flatListRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;
    
    const userMessage = { id: Date.now().toString(), text: input, isUser: true };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // In a real implementation, this would call the Gemini API
      const response = await generateResponse(input);
      
      const botMessage = { id: (Date.now() + 1).toString(), text: response, isUser: false };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorMessage = { 
        id: (Date.now() + 1).toString(), 
        text: 'Sorry, I encountered an error. Please try again.', 
        isUser: false 
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageBubble, 
      item.isUser ? styles.userBubble : styles.botBubble
    ]}>
      <Text style={[
        styles.messageText,
        item.isUser ? styles.userText : styles.botText
      ]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>MediMind Assistant</Text>
      </View>
      
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        style={styles.messageList}
        contentContainerStyle={styles.messageListContent}
      />
      
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#0066cc" />
          <Text style={styles.loadingText}>Thinking...</Text>
        </View>
      )}
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Ask a medical question..."
          multiline
        />
        <TouchableOpacity 
          style={[
            styles.sendButton,
            (!input.trim() || isLoading) && styles.disabledButton
          ]} 
          onPress={handleSend}
          disabled={!input.trim() || isLoading}
        >
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#0066cc',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  messageList: {
    flex: 1,
  },
  messageListContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 20,
    marginVertical: 8,
  },
  userBubble: {
    backgroundColor: '#0066cc',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  botBubble: {
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: 'white',
  },
  botText: {
    color: '#333',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  loadingText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 24,
    minHeight: 48,
    maxHeight: 120,
  },
  sendButton: {
    backgroundColor: '#0066cc',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  disabledButton: {
    backgroundColor: '#b3d1ff',
  },
});

export default Chatbot;