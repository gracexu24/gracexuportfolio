import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { projects } from '../data/projects';

const Projects = ({ onProjectSelect }) => {
  // Flatten all projects from all categories into a single array
  const allProjects = [
    ...projects.software,
    ...projects.robotics,
    ...projects.webApp,
  ];

  return (
    <View style={styles.container} id="projects">
      <View style={styles.content}>
        <Text style={styles.title}>My Projects</Text>
        <View style={styles.projectsGrid}>
          {allProjects.map((project) => (
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
    backgroundColor: '#5A9BC4',
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
