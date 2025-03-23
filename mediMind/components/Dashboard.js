import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Dashboard = ({navigation}) => {
    return(

        <View style={{ flex: 1, padding: 20, backgroundColor: '#A4C1C9' }}>

            <Image source={require('../assets/profile.jpg')} style={styles.profileImage} />
            <Text style = {{ fontSize: 18, fontWeight: 'bold', marginTop: 40}}>
                Hello ALEX!
            </Text>
            <Text style = {{ color: 'gray', marginBottom: 20, fontSize: 14}}>
                How are you feeling today?
            </Text>

            {/* Vaccine Card */}
            <View style={{
                backgroundColor: '#006D77',
                padding: 30,
                borderRadius: 15,
                width: '100%',
                height: 180,
                alignSelf: 'center',
                flexDirection: 'row',  // Makes items align in a row (left to right)
                alignItems: 'center',  // Centers text & image vertically
            }}>
                <View style={{ flex: 1, marginRight: 10 }}>  
                    <Text style={{ color: '#fff', fontWeight: 'bold', marginBottom: 10 }}>
                    Let's get a vaccine for a healthy life
                    </Text>
                    <TouchableOpacity style={{ backgroundColor: '#fff', padding: 8, borderRadius: 5, width: 100 }}>
                    <Text style={{ color: '#357ABD', fontWeight: 'bold', textAlign: 'center' }}>Book Now</Text>
                    </TouchableOpacity>
                </View>

                {/* Right Side - Image */}
                <View style={{ flex: 0.4, alignItems: 'flex-end' }}>  
                    <Image
                        source={require('../assets/doctor.jpg')}
                        style={{ width: 120, height: 120, resizeMode: 'contain'}} // Ensures it stays inside the box
                    />
                </View>
            </View>

            {/* Feature Buttons (Aligned in a Row) */}
            <View style={{ marginTop: 30, width: '100%' }}>
                <TouchableOpacity style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                paddingVertical: 20,  
                borderRadius: 12, 
                 // Increased spacing between buttons
                width: '100%',
                alignSelf: 'center'
                }} onPress={() => navigation.navigate('DoctorsSelection')}>
                    <View style={{ 
                        width: 60, 
                        height: 60, 
                        backgroundColor: '#FFFFFF', 
                        borderRadius: 10, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        marginRight: 15 
                    }}>
                        <Text style={{ fontSize: 24 }}>🧠</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mental Health</Text>
                        <Text style={{ fontSize: 14, color: 'gray', marginTop: 5, flexWrap: 'wrap' }}>
                            Book a doctor or access emergency support.
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                paddingVertical: 20, 
                borderRadius: 12, 
                marginBottom: 8, // Increased spacing between buttons
                width: '100%',
                alignSelf: 'center'
                }}>
                    <View style={{ 
                        width: 60, 
                        height: 60, 
                        backgroundColor: '#FFFFFF', 
                        borderRadius: 10, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        marginRight: 15 
                    }}>
                        <Text style={{ fontSize: 24 }}>🤖</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Transcribe</Text>
                        <Text style={{ fontSize: 14, color: 'gray', marginTop: 5, flexWrap: 'wrap' }}>
                            Convert doctor’s speech and health records into text.
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                paddingVertical: 20, 
                borderRadius: 12,
                width: '100%',
                alignSelf: 'center'
                }}>
                    <View style={{ 
                        width: 60, 
                        height: 60, 
                        backgroundColor: '#FFFFFF', 
                        borderRadius: 10, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        marginRight: 15 
                    }}>
                        <Text style={{ fontSize: 24 }}>📊</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>AI Chatbot</Text>
                        <Text style={{ fontSize: 14, color: 'gray', marginTop: 5, flexWrap: 'wrap' }}>
                            Get disease-specific diet and cognitive exercise recommendations.
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default Dashboard

const styles = StyleSheet.create({
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 5,
        marginBottom: -30
    }
})              