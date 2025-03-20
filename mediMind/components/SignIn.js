import React from 'react'
import { View, Text, Button } from 'react-native';

const SignIn = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile Screen</Text>
          <Button title="Go to Language" onPress={() => navigation.navigate('Language')} />
        </View>
      );
}

export default SignIn