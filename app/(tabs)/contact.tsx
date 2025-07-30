import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
  TextInput,
  Alert,
  Button,
  useWindowDimensions,
} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [comment, setComment] = useState('');
  const { width } = useWindowDimensions();

  const handlePhoneCall = () => Linking.openURL('tel:+919994269695');
  const handleEmail = () => Linking.openURL('mailto:info@slnt2webdesign.com');
  const handleWebsite = () => Linking.openURL('https://slnt2webdesign.com/');
  const handleMap = () => {
    const address = encodeURIComponent(
      '152, Second Agraharam, Near Lakshmi Villas Bank, Salem - 636001, Tamil Nadu, India'
    );
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${address}`);
  };

  const handleSubmit = () => {
    if (!name || !email || !mobile || !comment) {
      Alert.alert('Please fill in all required fields.');
      return;
    }

    Alert.alert('Thank you!', 'Your message has been submitted.');
    setName('');
    setEmail('');
    setMobile('');
    setComment('');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.heading}>Contact Us</Text>
      <Text style={styles.subheading}>Sri Lakshmi Narasimhan Technology</Text>

      <View style={styles.infoSection}>
        <Ionicons name="location-outline" size={22} color="#333" />
        <TouchableOpacity onPress={handleMap}>
          <Text style={styles.infoText}>
            1st Floor, 152 Second Agraharam,{'\n'}
            Near Lakshmi Villas Bank,{'\n'}
            Salem – 636001, Tamil Nadu, India
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Ionicons name="call-outline" size={22} color="#333" />
        <TouchableOpacity onPress={handlePhoneCall}>
          <Text style={styles.infoText}>+91 99942 69695</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Ionicons name="mail-outline" size={22} color="#333" />
        <TouchableOpacity onPress={handleEmail}>
          <Text style={styles.infoText}>info@slnt2webdesign.com</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Ionicons name="globe-outline" size={22} color="#333" />
        <TouchableOpacity onPress={handleWebsite}>
          <Text style={styles.infoText}>www.slnt2webdesign.com</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Quick Contact</Text>

        <CustomInput label="Name" required value={name} onChangeText={setName} placeholder="Enter your name" />
        <CustomInput
          label="Email Address"
          required
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <CustomInput
          label="Mobile"
          required
          value={mobile}
          onChangeText={setMobile}
          placeholder="Enter your mobile number"
          keyboardType="phone-pad"
        />
        <CustomInput
          label="Comment"
          required
          value={comment}
          onChangeText={setComment}
          placeholder="Your message"
          multiline
          inputStyle={{ height: 100, textAlignVertical: 'top' }}
        />

        <View style={{ marginTop: 20 }}>
          <Button title="Submit" onPress={handleSubmit} color="#003366" />
        </View>
      </View>
    </ScrollView>
  );
};

// Reusable input component
const CustomInput = ({
  label,
  required,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  multiline = false,
  inputStyle = {},
}) => (
  <>
    <Text style={styles.label}>
      {label} {required && <Text style={styles.required}>*</Text>}
    </Text>
    <TextInput
      style={[styles.input, inputStyle]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      multiline={multiline}
    />
  </>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#003366',
  },
  subheading: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    flex: 1,
    flexWrap: 'wrap',
  },
  form: {
    marginTop: 30,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: '#003366',
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    marginTop: 10,
  },
  required: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});

export default ContactScreen;
