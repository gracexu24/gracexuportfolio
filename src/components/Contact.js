import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Contact = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:gx2168@columbia.edu');
  };

  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/grace-xu28/');
  };

  return (
    <View style={styles.container} id="contact">
      <View style={styles.content}>
        <Text style={styles.contactInfo}>Contact Info</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.contactButton} onPress={handleEmailPress}>
            <Text style={styles.contactButtonText}>Email</Text>
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
    backgroundColor: '#75B2DD',
    paddingVertical: 80,
    paddingHorizontal: 30,
    fontFamily: "'Courier New', 'Courier', 'Monaco', 'Menlo', 'Consolas', 'Roboto Mono', monospace",
  },
  content: {
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  contactInfo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contactButton: {
    backgroundColor: '#5A9BC4',
    paddingHorizontal: 40,
    paddingVertical: 16,
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

