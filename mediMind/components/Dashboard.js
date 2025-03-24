import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

const Dashboard = ({navigation}) => {
    return(
         <ScrollView style={{flex:1}}>
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/profile.jpg')} style={styles.profileImage} />
                    
                    <View style={styles.headerButtons}>
                        <TouchableOpacity 
                            style={styles.iconButton}
                            onPress={() => navigation.navigate('Notifications')}
                        >
                            <Ionicons name="notifications" size={24} color="#333" />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.iconButton}
                            onPress={() => navigation.navigate('Contact')}
                        >
                            <MaterialIcons name="contact-emergency" size={24} color="#333" />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.greetingContainer}>
                    <View>
                        <Text style={styles.greeting}>Hello ALEX!</Text>
                        <Text style={styles.subGreeting}>How are you feeling today?</Text>
                    </View>
                </View>

                <View style={styles.vaccineCard}>
                    <View style={styles.vaccineCardContent}>  
                        <Text style={styles.vaccineCardTitle}>
                            Let's get a vaccine for a healthy life
                        </Text>
                        <TouchableOpacity style={styles.bookButton}>
                            <Text style={styles.bookButtonText}>Book Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.vaccineCardImageContainer}>  
                        <Image
                            source={require('../assets/doctor.jpg')}
                            style={styles.vaccineCardImage}
                        />
                    </View>
                </View>

                <View style={styles.featuresContainer}>
                    <TouchableOpacity 
                        style={styles.featureButton} 
                        onPress={() => navigation.navigate('DoctorsSelection')}
                    >
                        <View style={styles.featureIconContainer}>
                            <Text style={styles.featureIcon}>🧠</Text>
                        </View>
                        <View style={styles.featureTextContainer}>
                            <Text style={styles.featureTitle}>Mental Health</Text>
                            <Text style={styles.featureDescription}>
                                Book a doctor or access emergency support.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.featureButton} 
                        onPress={() => navigation.navigate('HomeScreen')}
                    >
                        <View style={styles.featureIconContainer}>
                            <Text style={styles.featureIcon}>🤖</Text>
                        </View>
                        <View style={styles.featureTextContainer}>
                            <Text style={styles.featureTitle}>Transcribe</Text>
                            <Text style={styles.featureDescription}>
                                Convert doctor's speech and health records into text.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.featureButton} 
                        onPress={() => navigation.navigate('Chatbot')}
                    >
                        <View style={styles.featureIconContainer}>
                            <Text style={styles.featureIcon}>📊</Text>
                        </View>
                        <View style={styles.featureTextContainer}>
                            <Text style={styles.featureTitle}>AI Chatbot</Text>
                            <Text style={styles.featureDescription}>
                                Get disease-specific diet and cognitive exercise recommendations.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.vitalsSection}>
                        <Text style={styles.sectionTitle}>Today's Vitals</Text>
                        <View style={styles.vitalsContainer}>
                            <View style={styles.vitalItem}>
                                <Ionicons name="heart" size={24} color="#e74c3c" />
                                <Text style={styles.vitalText}>72 bpm</Text>
                    </View>
                    <View style={styles.vitalItem}>
                            <MaterialIcons name="bloodtype" size={24} color="#2c3e50" />
                            <Text style={styles.vitalText}>120/80</Text>
                    </View>
                    <View style={styles.vitalItem}>
                            <MaterialIcons name="directions-walk" size={24} color="#2c3e50" />
                            <Text style={styles.vitalText}>2.5k</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>        
    </SafeAreaView>
    </ScrollView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#A4C1C9',
    },
    container: {
        flex: 1, 
        padding: 20, 
        backgroundColor: '#A4C1C9'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        backgroundColor: '#FFFFFF',
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 2,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    greetingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    vitalsSection: {
        marginTop: 15,
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#2c3e50',
    },
    vitalsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    vitalItem: {
        alignItems: 'center',
    },
    vitalText: {
        marginLeft: 8,
        fontSize: 14,
        fontWeight: '600',
        color: '#2c3e50',
    },
    greeting: {
        fontSize: 18, 
        fontWeight: 'bold', 
    },
    subGreeting: {
        color: 'gray', 
        fontSize: 14
    },
    vaccineCard: {
        backgroundColor: '#006D77',
        padding: 30,
        borderRadius: 15,
        width: '100%',
        height: 160,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    vaccineCardContent: {
        flex: 1, 
        marginRight: 10
    },
    vaccineCardTitle: {
        color: '#fff', 
        fontWeight: 'bold', 
        marginBottom: 10
    },
    bookButton: {
        backgroundColor: '#fff', 
        padding: 8, 
        borderRadius: 5, 
        width: 100
    },
    bookButtonText: {
        color: '#357ABD', 
        fontWeight: 'bold', 
        textAlign: 'center'
    },
    vaccineCardImageContainer: {
        flex: 0.4, 
        alignItems: 'flex-end'
    },
    vaccineCardImage: {
        width: 120, 
        height: 120, 
        resizeMode: 'contain'
    },
    featuresContainer: {
        marginTop: 10, 
        width: '100%'
    },
    featureButton: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingVertical: 15,  
        borderRadius: 12, 
        width: '100%',
        alignSelf: 'center',
        marginBottom: 8,
    },
    featureIconContainer: {
        width: 60, 
        height: 60, 
        backgroundColor: '#FFFFFF', 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginRight: 15
    },
    featureIcon: {
        fontSize: 24
    },
    featureTextContainer: {
        flex: 1
    },
    featureTitle: {
        fontSize: 18, 
        fontWeight: 'bold'
    },
    featureDescription: {
        fontSize: 15, 
        color: 'gray', 
        marginTop: 3, 
        flexWrap: 'wrap'
    }
});