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
            <View style={styles.videoGrid}>
              {project.videos.map((videoUrl, index) => (
                <View key={index} style={styles.videoGridItem}>
                  <VideoEmbed videoUrl={videoUrl} style={styles.videoContainer} />
                </View>
              ))}
            </View>
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

        {project.links && project.links.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Links</Text>
            <View style={styles.linksContainer}>
              {project.links.map((link, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.linkButton}
                  onPress={() => {
                    if (typeof window !== 'undefined' && link.url) {
                      window.open(link.url, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <Text style={styles.linkText}>{link.label || link.url}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Goal</Text>
          <Text style={styles.sectionText}>{project.goal}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
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
    fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
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
    width: '100%',
    height: '100%',
  },
  videoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
  },
  videoGridItem: {
    width: '48%',
    paddingHorizontal: 8,
    marginBottom: 16,
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
  linksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  linkButton: {
    backgroundColor: '#5A9BC4',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 12,
    marginBottom: 12,
  },
  linkText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default ProjectDetail;

