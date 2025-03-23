import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  Modal,
  Linking,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const CONTACTS = [
  {
    img: require('../assets/MMHA.png'),
    name: 'Malaysian Mental Health Association',
    description: 'Psychological Therapy & Support Services',
    phone: '+603 2780 6803',
    website: 'https://mmha.org.my',
    fullDescription: 'The Malaysian Mental Health Association (MMHA) is a non-profit organization that provides psychological therapy and support services. They offer counseling, psychotherapy, and mental health education to help individuals manage various mental health issues.',
  },
  {
    img: require('../assets/talian kasih 15999.jpeg'),
    name: 'Talian Kasih 15999',
    description: '24-hour Nationwide Helpline & Counselling',
    phone: '15999',
    website: 'https://www.kpwkm.gov.my',
    fullDescription: 'Talian Kasih 15999 is a 24-hour nationwide helpline and counseling service provided by the Ministry of Women, Family and Community Development. It offers assistance for various issues including domestic violence, child abuse, and mental health crises.',
  },
  {
    img: require('../assets/Befrienders.png'),
    name: 'Befrienders (Klang Valley)',
    description: 'Emotional Support & Suicide Prevention Helpline',
    phone: '+603 7627 2929',
    website: 'https://www.befrienders.org.my',
    fullDescription: 'Befrienders is a non-profit organization providing emotional support to those in distress or at risk of suicide. Their trained volunteers offer confidential and non-judgmental listening services to anyone in need of emotional support.',
  },
  {
    img: require('../assets/Befrienders.png'),
    name: 'Befrienders (Penang)',
    description: 'Emotional Support & Suicide Prevention Helpline',
    phone: '+604 2910 100',
    website: 'https://www.befrienders.org.my',
    fullDescription: 'Befrienders Penang provides free and confidential emotional support to people who are in distress and have suicidal thoughts. Their trained volunteers are available to listen and provide support through their helpline.',
  },
  {
    img: require('../assets/Befrienders.png'),
    name: 'Befrienders (Ipoh)',
    description: 'Emotional Support & Suicide Prevention Helpline',
    phone: '+605 5477 933',
    website: 'https://www.befrienders.org.my',
    fullDescription: 'Befrienders Ipoh offers free, confidential emotional support to people experiencing distress or having suicidal thoughts. Their services aim to reduce the incidence of suicide by providing a safe space to talk.',
  },
  {
    img: require('../assets/Befrienders.png'),
    name: 'Befrienders (Seremban)',
    description: 'Emotional Support & Suicide Prevention Helpline',
    phone: '+606 6321 772',
    website: 'https://www.befrienders.org.my',
    fullDescription: 'Befrienders Seremban provides emotional support to those in need through their helpline service. Their trained volunteers offer a listening ear to people experiencing distress, depression, or suicidal thoughts.',
  },
  {
    img: require('../assets/MIASA.png'),
    name: 'MIASA Crisis Helpline',
    description: 'Mental Illness Awareness & Support Association',
    phone: '1-1800-18-0066',
    website: 'https://miasa.org.my',
    fullDescription: 'MIASA (Mental Illness Awareness & Support Association) is a peer-led mental health organization in Malaysia. They provide support, education, and advocacy for individuals affected by mental health conditions and their families.',
  },
  {
    img: require('../assets/GEM.png'),
    name: 'Gem Helpline',
    description: 'Emotional Support Helpline',
    phone: '+60 11 2528 9610',
    website: 'https://www.gem.org.my',
    fullDescription: 'The GEM Helpline provides emotional support to individuals in distress. Their trained volunteers offer confidential and non-judgmental conversations to help callers navigate through difficult emotions and situations.',
  },
  {
    img: require('../assets/talian heal.jpg'),
    name: 'Talian HEAL',
    description: 'Heal with Empathy and Love 15555',
    phone: '15555',
    website: 'https://www.heal.org.my',
    fullDescription: 'Talian HEAL (Heal with Empathy and Love) is a mental health helpline that offers support to individuals experiencing emotional distress. They provide counseling services and can connect callers to appropriate mental health resources.',
  },
  {
    img: require('../assets/Sneham.png'),
    name: 'Pertubuan Kebajikan Sneham Malaysia',
    description: 'Emotional Support & Suicide Prevention Helpline',
    phone: '15555',
    website: 'https://www.sneham.org',
    fullDescription: 'Pertubuan Kebajikan Sneham Malaysia offers emotional support and suicide prevention services. They provide a helpline where individuals can talk about their problems in a safe and confidential environment.',
  },
];

export default function Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  // Filter contacts based on search query
  const filteredContacts = CONTACTS.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactPress = (contact) => {
    setSelectedContact(contact);
    setModalVisible(true);
  };

  const openWebsite = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  const callPhone = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search contacts..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => console.log('Searching:', searchQuery)}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredContacts.map((contact, index) => (
          <View key={index} style={styles.cardWrapper}>
            <TouchableOpacity onPress={() => handleContactPress(contact)}>
              <View style={styles.card}>
                {contact.img ? (
                  <Image source={contact.img} style={styles.cardImg} />
                ) : (
                  <View style={[styles.cardImg, styles.cardAvatar]}>
                    <Text style={styles.cardAvatarText}>{contact.name[0]}</Text>
                  </View>
                )}
                <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>{contact.name}</Text>
                  {contact.description ? <Text style={styles.cardDescription}>{contact.description}</Text> : null}
                  <Text style={styles.cardPhone}>{contact.phone}</Text>
                </View>
                <FeatherIcon color="#9ca3af" name="chevron-right" size={22} />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Contact Details Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedContact && (
              <>
                <TouchableOpacity 
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}>
                  <FeatherIcon name="x" size={24} color="#000" />
                </TouchableOpacity>
                
                <Image 
                  source={selectedContact.img} 
                  style={styles.modalImage} 
                  resizeMode="contain"
                />
                
                <Text style={styles.modalTitle}>{selectedContact.name}</Text>
                <Text style={styles.modalSubtitle}>{selectedContact.description}</Text>
                
                <View style={styles.modalInfoSection}>
                  <Text style={styles.modalDescription}>{selectedContact.fullDescription}</Text>
                </View>
                
                <View style={styles.modalContactActions}>
                  <TouchableOpacity 
                    style={styles.actionButton}
                    onPress={() => callPhone(selectedContact.phone)}>
                    <FeatherIcon name="phone" size={20} color="#fff" />
                    <Text style={styles.actionButtonText}>Call</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[styles.actionButton, styles.websiteButton]}
                    onPress={() => openWebsite(selectedContact.website)}>
                    <FeatherIcon name="globe" size={20} color="#fff" />
                    <Text style={styles.actionButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f2f2f2',
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#d1d1d1',
  },
  searchContainer: {
    alignItems: 'center',
  },
  searchButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },  
  scrollContainer: { 
    paddingVertical: 12 
  },
  /** Card */
  card: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
    paddingHorizontal: 8,
    marginVertical: 4,
  },
  cardImg: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  cardAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ca1ac',
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#616d79',
    marginTop: 3,
  },
  cardPhone: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#616d79',
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },
  /** Modal Styles */
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
  },
  modalImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#1d1d1d',
  },
  modalSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#616d79',
    marginBottom: 15,
  },
  modalInfoSection: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  modalDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalContactActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    minWidth: 120,
  },
  websiteButton: {
    backgroundColor: '#28a745',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});