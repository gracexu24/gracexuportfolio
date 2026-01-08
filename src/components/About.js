import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container} id="about">
      <View style={styles.content}>
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.description}>
          I'm a passionate developer with a love for creating beautiful and functional applications.
          With expertise in modern web technologies, I bring ideas to life through clean code and
          thoughtful design. I enjoy solving complex problems and continuously learning new
          technologies to stay at the forefront of development.
        </Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skillsTitle}>Skills & Technologies</Text>
          <View style={styles.skillsGrid}>
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>React</Text>
            </View>
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>React Native</Text>
            </View>
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>JavaScript</Text>
            </View>
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>TypeScript</Text>
            </View>
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>Node.js</Text>
            </View>
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>Python</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 80,
    paddingHorizontal: 30,
  },
  content: {
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 24,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    lineHeight: 28,
    color: '#4a4a4a',
    marginBottom: 40,
    textAlign: 'center',
  },
  skillsContainer: {
    marginTop: 20,
  },
  skillsTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 20,
    textAlign: 'center',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skillTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
    marginBottom: 12,
  },
  skillText: {
    fontSize: 14,
    color: '#4a4a4a',
    fontWeight: '500',
  },
});

export default About;

