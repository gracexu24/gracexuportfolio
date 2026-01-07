import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.nav}>
        <Text style={styles.logo}>Grace Xu</Text>
        <View style={styles.navLinks}>
          <TouchableOpacity onPress={() => scrollToSection('about')}>
            <Text style={styles.navLink}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => scrollToSection('projects')}>
            <Text style={styles.navLink}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => scrollToSection('contact')}>
            <Text style={styles.navLink}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Hello, I'm Grace Xu</Text>
        <Text style={styles.heroSubtitle}>Full Stack Developer & Creative Problem Solver</Text>
        <TouchableOpacity 
          style={styles.ctaButton}
          onPress={() => scrollToSection('projects')}
        >
          <Text style={styles.ctaButtonText}>View My Work</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1a1a1a',
    paddingTop: 20,
    paddingBottom: 80,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 30,
  },
  navLink: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
  },
  hero: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#b0b0b0',
    marginBottom: 32,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Header;

