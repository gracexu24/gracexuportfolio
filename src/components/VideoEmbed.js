import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const VideoEmbed = ({ videoUrl, style }) => {
  const containerRef = useRef(null);
  const isYouTube = videoUrl && (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be'));

  useEffect(() => {
    if (typeof document !== 'undefined' && containerRef.current) {
      const container = containerRef.current;
      
      // Clear any existing content
      container.innerHTML = '';
      
      if (isYouTube) {
        // Create iframe element for YouTube with muted parameter
        const iframe = document.createElement('iframe');
        const mutedUrl = videoUrl.includes('?') 
          ? `${videoUrl}&mute=1` 
          : `${videoUrl}?mute=1`;
        iframe.src = mutedUrl;
        iframe.width = '100%';
        iframe.height = '500';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullScreen = true;
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        
        container.appendChild(iframe);
      } else {
        // Create video element for local files with muted attribute
        const video = document.createElement('video');
        // URL encode the video path to handle spaces and special characters
        const encodedUrl = encodeURI(videoUrl);
        video.src = encodedUrl;
        video.controls = true;
        video.muted = true;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'contain';
        
        container.appendChild(video);
      }
    }
  }, [videoUrl, isYouTube]);

  if (typeof document !== 'undefined') {
    // Use React.createElement to create a div element for web
    const divElement = React.createElement('div', {
      ref: containerRef,
      style: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      },
    });

    return (
      <View style={[styles.container, style]}>
        {divElement}
      </View>
    );
  }
  
  // Non-web platform fallback
  return (
    <View style={[styles.container, styles.placeholder, style]}>
      <Text style={styles.placeholderText}>Video not available</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    overflow: 'hidden',
  },
  webContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  placeholder: {
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#4a4a4a',
    fontSize: 16,
  },
});

export default VideoEmbed;
