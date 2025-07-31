import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const servicesList = [
  'Web Designing',
  'E-commerce Solution',
  'SEO Optimization',
  'Mobile Apps',
  'Video Portals',
  'Payment Gateway',
  'Classified Website',
  'Google Adwords'
];

const services = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {servicesList.map((service, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{service}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default services;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 40,
  },
  card: {
    width: width * 0.9,
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});
