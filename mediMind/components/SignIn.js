import React from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { assets } from '../assets/assets';

const SignIn = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    return (
        <View style={{ flex: 1, backgroundColor: "#A4C1C9", padding: 20, justifyContent: 'center', alignItems: 'center' }}>
          
          {/* title */}
          <Text style={{ fontSize: 30, color: "#002147", fontWeight: 'bold'  }}>
            Sign In
          </Text>

          {/* container wrapping input fields */}
          <View style={{ width: '100%', marginTop: 50, backgroundColor: '#D9D9D9', padding: 20, borderRadius: 10 }}>

            {/* email */}
            <Text style={{ color: "#002147", fontWeight: 'bold' }}>Email</Text>

            {/* Email Text Field */}
            <View style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                backgroundColor: '#fff', 
                borderRadius: 5, 
                paddingHorizontal: 10, 
                marginBottom: 20, 
                marginTop: 10, 
                borderWidth: 1, 
                borderColor: '#ccc' // Border color
            }}>
                {/* Email Icon Inside Text Field */}
                <Image
                    source={assets.email}
                    style={{ 
                        width: 20, 
                        height: 20, 
                        position: 'absolute',
                        left: 10, // Position inside the text field
                        zIndex: 1
                    }}
                />
                
                {/* Text Input */}
                <TextInput
                    style={{ 
                        flex: 1, 
                        height: 40, 
                        paddingLeft: 40 // Push text right so it doesn't overlap icon
                    }}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="email@address.com"
                    keyboardType="email-address"
                />
            </View>

            {/* password */}
            <Text style={{ color: "#002147", fontWeight: 'bold' }}>Password</Text>

            <View style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                backgroundColor: '#fff', 
                borderRadius: 5, 
                paddingHorizontal: 10, 
                marginBottom: 20, 
                marginTop: 10, 
                borderWidth: 1, 
                borderColor: '#ccc' // Border color
            }}>
                {/* Email Icon Inside Text Field */}
                <Image
                    source={assets.password}
                    style={{ 
                        width: 20, 
                        height: 20, 
                        position: 'absolute',
                        left: 10, // Position inside the text field
                        zIndex: 1
                    }}
                />
                
                {/* Text Input */}
                <TextInput
                    style={{ 
                        flex: 1, 
                        height: 40, 
                        paddingLeft: 40 // Push text right so it doesn't overlap icon
                    }}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Enter password"
                    secureTextEntry={true}
                />
            </View>

            {/* error message */}
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

            {/* Sign In button */}
            <View style={{ width: '100%', alignItems: 'center' }}>
              <TouchableOpacity 
              style={{
                width: '100%',
                backgroundColor: "#002147",
                padding: 10,
                borderRadius: 30,
                marginTop: 10,
                alignItems: 'center'
              }}
              onPress={() => {
                if (!email || !password) {
                  setError('Please fill in all fields.');
                } else {
                  setError('');
                  navigation.navigate('GetStarted');
                }
              }}
            >
                <Text style={{ color: "#fff", fontWeight: 'bold'}}>Sign In</Text>
              </TouchableOpacity>
            </View>
            
            {/* horizontal devider with "or" */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#ccc'}} />
              <Text style={{ width: 50, textAlign: 'center', color: '#002147' }}>or</Text>
              <View style={{ flex: 1, height: 1, backgroundColor: '#ccc'}} />
            </View>

            {/* Facebook, Instagram, Google icon */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
              <Image
                source={assets.socialMediaIcons}
                style={{ width: 175, height: 50, marginTop: 10 }}
                resizeMode="contain"
              />
            </View>

            {/* Sign Up */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
              <Text style={{ color: '#002147' }}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{ color: '#002147', fontWeight: 'bold', marginLeft: 5 }}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            {/* forgot password */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={{ color: '#002147', fontWeight: 'bold' }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            
          </View>

        </View>
      );
}

export default SignIn