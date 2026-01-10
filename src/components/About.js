import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container} id="about">
      <View style={styles.content}>
        <Text style={styles.description}>
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
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 80,
    paddingHorizontal: 30,
    fontFamily: "'Courier New', 'Courier', 'Monaco', 'Menlo', 'Consolas', 'Roboto Mono', monospace",
  },
  content: {
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  description: {
    fontSize: 18,
    lineHeight: 28,
    color: '#4a4a4a',
    textAlign: 'left',
  },
});

export default About;

