import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import VideoEmbed from './VideoEmbed';

const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Back to Projects</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{project.title}</Text>
        
        {/* Display all videos */}
        {project.videos && project.videos.length > 0 && (
          <View style={styles.mediaSection}>
            {project.videos.map((videoUrl, index) => (
              <VideoEmbed key={index} videoUrl={videoUrl} style={styles.videoContainer} />
            ))}
          </View>
        )}
        
        {/* Display single video if no videos array */}
        {!project.videos && project.video && (
          <VideoEmbed videoUrl={project.video} style={styles.videoContainer} />
        )}
        
        {/* Display all images */}
        {project.images && project.images.length > 0 && (
          <View style={styles.mediaSection}>
            <View style={styles.imageGrid}>
              {project.images.map((imageUrl, index) => (
                <View key={index} style={styles.imageGridItem}>
                  {typeof document !== 'undefined' ? (
                    React.createElement('img', {
                      src: imageUrl,
                      alt: `${project.title} - Image ${index + 1}`,
                      style: {
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                      },
                    })
                  ) : (
                    <Image 
                      source={{ uri: imageUrl }} 
                      style={styles.gridImage}
                      resizeMode="contain"
                    />
                  )}
                </View>
              ))}
            </View>
          </View>
        )}
        
        {/* Display single image if no images array and no video */}
        {!project.images && !project.video && project.image && (
          <View style={styles.imageWrapper}>
            {typeof document !== 'undefined' ? (
              React.createElement('img', {
                src: project.image,
                alt: project.title,
                style: {
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                },
              })
            ) : (
              <Image 
                source={{ uri: project.image }} 
                style={styles.image}
                resizeMode="contain"
              />
            )}
          </View>
        )}

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
    fontFamily: "'Courier New', 'Courier', 'Monaco', 'Menlo', 'Consolas', 'Roboto Mono', monospace",
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
  imageWrapper: {
    width: '100%',
    marginBottom: 24,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
  },
  imageGridItem: {
    width: '25%',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  gridImage: {
    width: '100%',
  },
  videoContainer: {
    marginBottom: 24,
  },
  mediaSection: {
    marginBottom: 32,
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

