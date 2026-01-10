import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

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
        <View style={styles.heroContent}>
          {typeof document !== 'undefined' ? (
            React.createElement('img', {
              src: '/headshot/DSC_7335.JPG',
              alt: 'Grace Xu',
              style: {
                width: '200px',
                height: '280px',
                objectFit: 'cover',
                marginRight: '60px',
              },
            })
          ) : (
            <Image 
              source={{ uri: '/headshot/DSC_7335.JPG' }} 
              style={styles.headshot}
            />
          )}
          <View style={styles.heroText}>
            <Text style={styles.heroTitle}>Hello, I'm Grace Xu</Text>
            <Text style={styles.heroDescription}>
            I’m a sophomore at Columbia Engineering studying computer science and electrical engineering. I’m excited by the intersection of software, hardware, and human centered design and am interested in wearable tech, robotics, full-stack development and project management. My project experience is in AR development, mechatronics, and full-stack mobile and web development. I’m excited to continue to work in collaborative engineering teams to solve interdisciplinary real-world challenges.

            {'\n\n'}Check out my portfolio below! My email is gx2168@columbia.edu 
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#75B2DD',
    paddingTop: 20,
    paddingBottom: 80,
    fontFamily: "'Courier New', 'Courier', 'Monaco', 'Menlo', 'Consolas', 'Roboto Mono', monospace",
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
    paddingTop: 60,
    paddingBottom: 40,
    paddingLeft: 80,
    paddingRight: 80,
  },
  heroContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  headshot: {
    width: 200,
    height: 280,
    marginRight: 60,
  },
  heroText: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'left',
    marginBottom: 24,
  },
  heroDescription: {
    fontSize: 18,
    lineHeight: 28,
    color: '#ffffff',
    textAlign: 'left',
  },
});

export default Header;

