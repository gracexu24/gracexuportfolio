import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Back to Projects</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{project.title}</Text>
        
        <Image 
          source={{ uri: project.image }} 
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tech Stack</Text>
          <View style={styles.techContainer}>
            {project.tech.map((tech, index) => (
              <View key={index} style={styles.techTag}>
                <Text style={styles.techText}>{tech}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Goal</Text>
          <Text style={styles.sectionText}>{project.goal}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Challenges</Text>
          {project.challenges.map((challenge, index) => (
            <View key={index} style={styles.challengeItem}>
              <Text style={styles.challengeBullet}>•</Text>
              <Text style={styles.challengeText}>{challenge}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Solution</Text>
          <Text style={styles.sectionText}>{project.solution}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
    padding: 30,
  },
  backButton: {
    marginBottom: 24,
    alignSelf: 'flex-start',
    backgroundColor: '#5A9BC4',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 12,
    marginBottom: 32,
    backgroundColor: '#e0e0e0',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 28,
    color: '#4a4a4a',
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  techTag: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    marginRight: 12,
    marginBottom: 12,
  },
  techText: {
    fontSize: 14,
    color: '#1976d2',
    fontWeight: '500',
  },
  challengeItem: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  challengeBullet: {
    fontSize: 20,
    color: '#4a90e2',
    marginRight: 12,
    marginTop: 2,
  },
  challengeText: {
    fontSize: 16,
    lineHeight: 28,
    color: '#4a4a4a',
    flex: 1,
  },
});

export default ProjectDetail;

