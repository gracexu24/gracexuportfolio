import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { projects } from '../data/projects';

const Projects = ({ onProjectSelect }) => {
  const categories = [
    { key: 'software', title: 'Software' },
    { key: 'robotics', title: 'Robotics' },
    { key: 'webApp', title: 'Web/App Dev' },
  ];

  return (
    <View style={styles.container} id="projects">
      <View style={styles.content}>
        <Text style={styles.title}>My Projects</Text>
        {categories.map((category) => (
          <View key={category.key} style={styles.categorySection}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <View style={styles.projectsGrid}>
              {projects[category.key].map((project) => (
                <View key={project.id} style={[styles.projectCard, styles.projectCardSpacing]}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                  <Text style={styles.projectDescription}>{project.description}</Text>
                  <View style={styles.techTags}>
                    {project.tech.map((tech, index) => (
                      <View key={index} style={styles.techTag}>
                        <Text style={styles.techText}>{tech}</Text>
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity 
                    style={styles.projectButton}
                    onPress={() => onProjectSelect(project)}
                  >
                    <Text style={styles.projectButtonText}>View Project</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 80,
    paddingHorizontal: 30,
  },
  content: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 48,
    textAlign: 'center',
  },
  categorySection: {
    marginBottom: 60,
  },
  categoryTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 24,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#0d2842',
  },
  projectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  projectCardSpacing: {
    marginRight: 24,
    marginBottom: 24,
  },
  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  projectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  projectDescription: {
    fontSize: 16,
    color: '#4a4a4a',
    lineHeight: 24,
    marginBottom: 20,
  },
  techTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  techTag: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  techText: {
    fontSize: 12,
    color: '#1976d2',
    fontWeight: '500',
  },
  projectButton: {
    backgroundColor: '#0d2842',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  projectButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Projects;
