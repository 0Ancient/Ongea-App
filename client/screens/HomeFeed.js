import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Waveform } from 'react-native-waveform';

const HomeFeed = () => {
  // Sample data - replace with your Firebase data later
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
      {/* Header */}
      <View style={styles.noteHeader}>
        <Icon name="mic" size={24} color="#10B981" />
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>

      {/* Waveform Placeholder - Replace with real audio later */}
      <View style={styles.waveformContainer}>
        <Waveform
          waveformStyle={styles.waveform}
          audioUrl={null} // Pass audio URL later
          waveColor="#10B981"
          scrubColor="#10B981"
          width={300}
          height={50}
        />
        <Text style={styles.waveformPlaceholder}>~~~~~~~~~~~~~~~~~</Text>
      </View>

      {/* Actions */}
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
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={24} color="#9CA3AF" />
        <Text style={styles.searchText}>Search voice notes...</Text>
      </View>

      {/* Voice Notes List */}
      <FlatList
        data={voiceNotes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Floating Record Button */}
      <TouchableOpacity style={styles.recordButton}>
        <Icon name="mic" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  searchText: {
    color: '#9CA3AF',
    marginLeft: 8,
  },
  noteCard: {
    backgroundColor: '#1F2937',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  noteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
    marginRight: 'auto',
  },
  time: {
    color: '#9CA3AF',
  },
  waveformContainer: {
    marginBottom: 12,
    alignItems: 'center',
  },
  waveform: {
    opacity: 0.5, // Placeholder until real audio loads
  },
  waveformPlaceholder: {
    color: '#10B981',
    letterSpacing: 2,
    position: 'absolute', // Overlays the (empty) waveform
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    marginLeft: 4,
  },
  recordButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#10B981',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default HomeFeed;