import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    // Scroll to top when viewing project detail
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    // Scroll to projects section
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      setTimeout(() => {
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  if (selectedProject) {
    return (
      <View style={styles.container}>
        <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <Projects onProjectSelect={handleProjectSelect} />
        <Contact />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  scrollView: {
    flex: 1,
  },
});

export default App;

