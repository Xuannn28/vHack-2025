import React, {use, useState}  from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const PersonalDetails = ({navigation}) => {
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [medicalHistory, setMedicalHistory] = useState("");
    const [permission, setPermission] = useState(false);

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: "United States", value: "united_states" , code: "+1"},
        { label: "United Kingdom", value: "united_kingdom" , code: "+44"},
        { label: "Australia", value: "australia", code: "+61" },
        { label: "Canada", value: "canada", code: "+1" },
        { label: "New Zealand", value: "new_zealand" , code: "+64"},
        { label: "Malaysia", value: "malaysia", code: "+60" },
        { label: "Brunei", value: "brunei", code: "+673" },
        { label: "Indonesia", value: "indonesia", code: "+62" },
        { label: "China", value: "china" , code: "+86"},
        { label: "Singapore", value: "singapore", code: "+65" },
        { label: "Japan", value: "japan", code: "+81" },
        { label: "South Korea", value: "south_korea", code: "+82" },
        { label: "Spain", value: "spain", code: "+34" },
        { label: "Mexico", value: "mexico", code: "+52" },
        { label: "Argentina", value: "argentina", code: "+54" },
        { label: "Colombia", value: "colombia", code: "+57" },
        { label: "Chile", value: "chile", code: "+56" },
        { label: "France", value: "france" , code: "+33"},
        { label: "Belgium", value: "belgium", code: "+32" },
        { label: "Switzerland", value: "switzerland", code: "+41" },
        { label: "Germany", value: "germany", code: "+49" },
        { label: "Others", value: "others", code: "" }
    ]);

    const [error, setError] = useState("");

    

  return (
    <ScrollView style={{flex:1}}>
    <View style={{ flex: 1, backgroundColor: "#A4C1C9", padding: 20}}>

        {/* title */}
        <Text style={{ fontSize: 20, color: "#002147", fontWeight: 'bold'  }}>
            Let's Get Started!
        </Text>

        {/* full name */}
        <Text style={{ color: "#002147", fontWeight: 'bold', marginTop: 10 }}>Full Name *</Text>

        {/* Full Name Text Field */}
        <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            backgroundColor: '#fff', 
            borderRadius: 5, 
            paddingHorizontal: 10, 
            marginBottom: 20, 
            marginTop: 5, 
            borderWidth: 1, 
            borderColor: '#ccc' // Border color
        }}>
    
            {/* Text Input */}
            <TextInput
                style={{ 
                    flex: 1, 
                    height: 40, 
                }}
                onChangeText={text => setFullName(text)}
                value={fullName}
                placeholder="eg. John Doe"
                multiline={false}
            /> 
        </View>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            {/* age */}
            <View style={{ flexDirection: 'column' }}> 
                
                <Text style={{ color: "#002147", fontWeight: 'bold'}}>Age *</Text>

                {/* Age Text Field */}
                <View style={{ 
                    width: 100,
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    backgroundColor: '#fff', 
                    borderRadius: 5, 
                    paddingHorizontal: 10, 
                    marginBottom: 20, 
                    marginTop: 5, 
                    borderWidth: 1, 
                    borderColor: '#ccc' // Border color
                }}>

                    {/* Text Input */}
                    <TextInput
                        style={{ 
                            flex: 1,
                            height: 40, 
                        }}
                        onChangeText={text => setAge(text)}
                        value={age}
                        placeholder='eg. 21'
                        keyboardType="numeric"
                    /> 

                </View>
            </View>

            {/* Gender */}
            <View style={{ flexDirection: 'column', marginLeft: 20 }}> 
                
                <Text style={{ color: "#002147", fontWeight: 'bold' }}>Gender *</Text>

                <View style={{ 
                    width: 100,
                    height: 40,
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    paddingHorizontal: 10, 
                    marginBottom: 20, 
                    marginTop: 5, 
                    
                }}> 

                    {/* Male Option */}
                    <TouchableOpacity 
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}
                        onPress={() => setGender('Male')}
                    >
                        <View style={{
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: '#002147',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 8
                        }}>
                            {gender === 'Male' && (
                                <View style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: 6,
                                    backgroundColor: '#002147'
                                }} />
                            )}
                        </View>
                        <Text style={{ color: '#002147' }}>Male</Text>
                    </TouchableOpacity>

                    {/* Female Option */}
                    <TouchableOpacity 
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}
                        onPress={() => setGender('Female')}
                    >
                        <View style={{
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: '#002147',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 8
                        }}>
                            {gender === 'Female' && (
                                <View style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: 6,
                                    backgroundColor: '#002147'
                                }} />
                            )}
                        </View>
                        <Text style={{ color: '#002147' }}>Female</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </View>

        {/* home address */}
        <Text style={{ color: "#002147", fontWeight: 'bold' }}>Home Address *</Text>

        {/* address Text Field */}
        <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            backgroundColor: '#fff', 
            borderRadius: 5, 
            paddingHorizontal: 10, 
            marginBottom: 20, 
            marginTop: 5, 
            borderWidth: 1, 
            borderColor: '#ccc' 
        }}>
    
            {/* Text Input */}
            <TextInput
                style={{ 
                    flex: 1, 
                    height: 40, 
                }}
                onChangeText={text => setAddress(text)}
                value={address}
                placeholder="eg. 1234 Main St"
                multiline={true}
            /> 
        </View>

        {/* country */}
        <Text style={{ color: "#002147", fontWeight: 'bold' }}>Country *</Text>
        
        {/* Country Dropdown Menu */}
        <DropDownPicker
                placeholder="Select country"
                padding={10}
                open={open}
                value={country}
                items={items}
                setOpen={setOpen}
                setValue={setCountry}
                setItems={setItems}
                dropDownDirection="BOTTOM" // Ensure dropdown opens downward
                listMode="SCROLLVIEW" 
                style={{ borderColor: '#ccc',  marginBottom: 20, marginTop: 5, }}  // show red border if error exist
                onChangeValue={(selectedValue) => {
                    setError('');
                    // Find the selected country object and update both state variables
                    const selectedCountry = items.find(item => item.value === selectedValue);
                    if (selectedCountry) {
                        setCountry(selectedValue);       // Set country
                        setCountryCode(selectedCountry.code); // Set country code
                    }} } 
        />

        {/* phone number */}
        <Text style={{ color: "#002147", fontWeight: 'bold' }}>Phone Number *</Text>

        {/* Phone Number Text Field */}
        <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            backgroundColor: '#fff', 
            borderRadius: 5, 
            paddingHorizontal: 10, 
            marginBottom: 20, 
            marginTop: 5, 
            borderWidth: 1, 
            borderColor: '#ccc' 
        }}>
    
            {/* Text Input */}
            <TextInput
                style={{ 
                    flex: 1, 
                    height: 40, 
                }}
                onChangeText={text => setPhoneNumber(text)}
                value={phoneNumber}
                placeholder={`eg. ${countryCode} XX-XXX-XXXX`}
                multiline={false}
            /> 
        </View>

        {/* body height and weight */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column' }}> 
                {/* height */}
                
                <Text style={{ color: "#002147", fontWeight: 'bold'}}>Body Height(cm) *</Text>

                {/* height Text Field */}
                    <View style={{ 
                        width: 100,
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        backgroundColor: '#fff', 
                        borderRadius: 5, 
                        paddingHorizontal: 10, 
                        marginBottom: 20, 
                        marginTop: 5, 
                        borderWidth: 1, 
                        borderColor: '#ccc'
                    }}>

                        {/* Text Input */}
                        <TextInput
                            style={{ 
                                flex: 1,
                                height: 40, 
                            }}
                            onChangeText={text => setHeight(text)}
                            value={height}
                            placeholder='eg. 170'
                            keyboardType="numeric"
                        /> 
                </View>
            </View>
                {/* weight */}

                <View style={{ flexDirection: 'column', marginLeft: 20 }}> 
                
                <Text style={{ color: "#002147", fontWeight: 'bold'}}>Body Weight(kg) *</Text>

                {/* weight Text Field */}
                    <View style={{ 
                        width: 100,
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        backgroundColor: '#fff', 
                        borderRadius: 5, 
                        paddingHorizontal: 10, 
                        marginBottom: 20, 
                        marginTop: 5, 
                        borderWidth: 1, 
                        borderColor: '#ccc'
                    }}>

                        {/* Text Input */}
                        <TextInput
                            style={{ 
                                flex: 1,
                                height: 40, 
                            }}
                            onChangeText={text => setWeight(text)}
                            value={weight}
                            placeholder='eg. 50'
                            keyboardType="numeric"
                        /> 

                    </View>
                </View>
        </View>

        {/* medical history */}
        <Text style={{ color: "#002147", fontWeight: 'bold' }}>Any Medical Conditions?</Text>

        {/* Medical History Text Field */}
        <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            backgroundColor: '#fff', 
            borderRadius: 5, 
            paddingHorizontal: 10, 
            marginBottom: 20, 
            marginTop: 5, 
            borderWidth: 1, 
            borderColor: '#ccc' 
        }}>
    
            {/* Text Input */}
            <TextInput
                style={{ 
                    flex: 1, 
                    height: 40, 
                }}
                onChangeText={text => setMedicalHistory(text)}
                value={medicalHistory}
                placeholder="eg. Diabetes, Hypertension"
                multiline={true}
            />
        </View>
            
        {/* permission */}
        <Text style={{ color: "#002147", fontWeight: 'bold' }}>Permission for Health Data Access **</Text>

        {/* Permission checkbox */}
        <View style={{ 
            width: '100%',  // Ensure the container takes full width
            flexDirection: 'row', 
            alignItems: 'flex-start', 
            paddingHorizontal: 10, 
            marginBottom: 20, 
            marginTop: 5
        }}>
            <TouchableOpacity 
                style={{ flexDirection: 'row', alignItems: 'flex-start' }}
                onPress={() => setPermission(prev => !prev)} // Toggle between true and false
            >
                {/* Checkbox */}
                <View style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: '#002147',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 8
                }}>
                    {permission && (
                        <View style={{
                            width: 12,
                            height: 12,
                            borderRadius: 6,
                            backgroundColor: '#002147'
                        }} />
                    )}
                </View>

                {/* agreement text */}
                <View style={{ flex: 1 }}> 
                    <Text style={{ color: '#002147', flexWrap: 'wrap' }}>
                        I agree to allow MediMind to access my health data, including steps, heart rate, sleep, 
                        and activity metrics. This data will be used to provide personalized insights and improve 
                        my experience. I can manage permissions anytime in settings.
                    </Text>
                </View>

            </TouchableOpacity>
            </View>

            {/* error message */}
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

            {/* proceed button */}
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
                        if (!fullName || !age || !gender || !address || !country || !phoneNumber || !height || !weight) {
                            setError("Please fill in all fields with '*' symbol.");
                        } else if (!permission) {
                            setError('Please read carefully the permission details and tick the box to proceed.');
                        }
                        else {
                            setError('');
                        navigation.navigate('Wearable Device');
                        }
                    }}
                    >
                    <Text style={{ color: "#fff", fontWeight: 'bold'}}>Proceed</Text>
                </TouchableOpacity>
                </View>
        </View>
    </ScrollView>
  )
}

export default PersonalDetails