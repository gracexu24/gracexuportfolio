import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Contact = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:your.email@example.com');
  };

  const handleLinkedInPress = () => {
    Linking.openURL('https://linkedin.com/in/yourprofile');
  };

  return (
    <View style={styles.container} id="contact">
      <View style={styles.content}>
        <Text style={styles.title}>Get In Touch</Text>
        <Text style={styles.subtitle}>
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.contactButton} onPress={handleEmailPress}>
            <Text style={styles.contactButtonText}>Email Me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.contactButton, styles.contactButtonSpacing]} onPress={handleLinkedInPress}>
            <Text style={styles.contactButtonText}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0a1929',
    paddingVertical: 80,
    paddingHorizontal: 30,
  },
  content: {
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#b0b0b0',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contactButton: {
    backgroundColor: '#0d2842',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 8,
    minWidth: 150,
    alignItems: 'center',
  },
  contactButtonSpacing: {
    marginLeft: 20,
  },
  contactButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Contact;

