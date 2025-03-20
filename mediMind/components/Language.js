import React from 'react'
import { View, Text, Button } from 'react-native';

const Language = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile Screen</Text>
          <Button title="Go to Sign In" onPress={() => navigation.navigate('SignIn')} />
        </View>
      );
}

export default Language