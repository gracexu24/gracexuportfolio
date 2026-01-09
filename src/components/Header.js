import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  const scrollToSection = (sectionId) => {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
          <TouchableOpacity style={styles.navLinkContainer} onPress={() => scrollToSection('projects')}>
            <Text style={styles.navLink}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLinkContainer} onPress={() => scrollToSection('contact')}>
            <Text style={styles.navLink}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Hello, I'm Grace Xu</Text>
        <Text style={styles.heroDescription}>
          I'm a passionate developer with a love for creating beautiful and functional applications.
          With expertise in modern web technologies, I bring ideas to life through clean code and
          thoughtful design. I enjoy solving complex problems and continuously learning new
          technologies to stay at the forefront of development.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#75B2DD',
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
  },
  navLinkContainer: {
    marginLeft: 30,
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
    textAlign: 'center',
    marginBottom: 24,
  },
  heroDescription: {
    fontSize: 18,
    lineHeight: 28,
    color: '#ffffff',
    textAlign: 'center',
    maxWidth: 800,
    paddingHorizontal: 20,
  },
});

export default Header;

