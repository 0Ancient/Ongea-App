import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeFeed = ({ navigation }) => { // Added navigation prop
  // Sample data
  const voiceNotes = [
    {
      id: '1',
      username: '@User1',
      time: '2h ago',
      content: 'Why audio social is the future',
      echoCount: 12,
      replyCount: 3,
    },
    {
      id: '2',
      username: '@You',
      time: '5m ago',
      content: 'Daily thoughts',
      echoCount: 1,
      replyCount: 0,
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.noteCard}>
      <View style={styles.noteHeader}>
        <Icon name="mic" size={24} color="#10B981" />
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>

      <View style={styles.waveformContainer}>
        <Text style={styles.waveformPlaceholder}>~~~~~~~~~~~~~~~~~</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="play-arrow" size={24} color="#10B981" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="repeat" size={24} color="#10B981" />
          <Text style={styles.actionText}>{item.echoCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="comment" size={24} color="#10B981" />
          <Text style={styles.actionText}>{item.replyCount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* TEST BUTTON - NEW CODE START */}
      <TouchableOpacity 
        style={styles.testButton}
        onPress={() => navigation.navigate('Recorder')}
      >
        <Text style={styles.testButtonText}>TEST RECORDER</Text>
      </TouchableOpacity>
      {/* TEST BUTTON - NEW CODE END */}

      <View style={styles.searchBar}>
        <Icon name="search" size={24} color="#9CA3AF" />
        <Text style={styles.searchText}>Search voice notes...</Text>
      </View>

      <FlatList
        data={voiceNotes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.recordButton}>
        <Icon name="mic" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... (keep all existing styles)

  // NEW STYLES FOR TEST BUTTON
  testButton: {
    backgroundColor: '#10B981',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 16,
  },
  testButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeFeed;