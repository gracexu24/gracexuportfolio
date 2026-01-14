import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
              {project.image && (
                <View style={[
                  styles.projectImageContainer,
                  project.imageRotation && styles.rotatedImageContainer,
                  project.image === '/autonomousclaw.png' && styles.noPaddingImageContainer
                ]}>
                  {typeof document !== 'undefined' ? (
                    React.createElement('img', {
                      src: project.image,
                      alt: project.title,
                      style: {
                        width: project.imageRotation ? 'auto' : '100%',
                        height: project.imageSize === 'large' && project.imageRotation ? '300px' : (project.imageRotation ? '200px' : '200px'),
                        maxWidth: project.imageSize === 'large' && project.imageRotation ? '300px' : (project.imageRotation ? '200px' : '100%'),
                        objectFit: project.imageRotation ? 'contain' : (project.imageCrop === 'top' ? 'cover' : 'cover'),
                        objectPosition: project.imageCrop === 'top' ? '50% 25%' : 'center',
                        transform: project.imageRotation ? `rotate(${project.imageRotation}deg)` : 'none',
                        display: 'block',
                      },
                    })
                  ) : (
                    <Image 
                      source={{ uri: project.image }} 
                      style={[
                        styles.projectImage,
                        project.imageRotation && { 
                          transform: [{ rotate: `${project.imageRotation}deg` }],
                          height: 'auto',
                        }
                      ]}
                      resizeMode={project.imageRotation ? 'contain' : (project.imageCrop === 'top' ? 'cover' : 'cover')}
                    />
                  )}
                </View>
              )}
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
    fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
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
    padding: 24,
    width: '100%',
    maxWidth: 350,
  },
  projectImageContainer: {
    width: '100%',
    marginTop: 12,
    marginBottom: 16,
    overflow: 'visible',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rotatedImageContainer: {
    minHeight: 200,
  },
  noPaddingImageContainer: {
    marginTop: 0,
    marginBottom: 0,
  },
  projectImage: {
    width: '100%',
    height: 200,
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
    alignItems: 'center',
  },
  projectButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Projects;
