import React from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { assets } from '../assets/assets';

const WearableDevice = ({navigation}) => {
  return (
   <View style={{ flex: 1, backgroundColor: "#A4C1C9", padding: 20, justifyContent: 'center', alignItems: 'center' }}>

        {/* title */}
        <Text style={{ fontSize: 30, color: "#002147",  }}>
            Connect your{' \n'}
        <Text style={{ fontWeight: 'bold' }}>Wearable Device</Text>
        </Text>

        {/* description */}
        <Text style={{ color: "#002147", textAlign: 'center', marginTop: 20,  padding: 20}}>
        If you have a compatible wearable device, connect it now to monitor heart rate, steps, and other health metrics.
        </Text>

         {/* wearable device image */}
        <Image
            style={{ width: 200, height: 200, marginTop: 50, marginBottom: 50}}
            source={assets.wearable_device}/>
        
        {/* connect device button */}
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
            onPress={() => navigation.navigate('Wearable Device')}
        >
            <Text style={{ color: "#fff", fontWeight: 'bold'}}>Connect device</Text>
            </TouchableOpacity>
        </View>
        
        {/* skip for now button */}
        <View style={{ width: '100%', alignItems: 'center' }}>
            <TouchableOpacity 
            style={{
            width: '100%',
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 30,
            marginTop: 10,
            alignItems: 'center'
            }}
            onPress={() => navigation.navigate('GetStarted')}   // TODO: change to dashboard
        >
            <Text style={{ color: "#002147", fontWeight: 'bold'}}>Skip for now</Text>
            </TouchableOpacity>
        </View>
        
   </View>
  )
}

export default WearableDevice