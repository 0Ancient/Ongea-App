import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Recorder() {
  const [recording, setRecording] = useState(null);
  const [duration, setDuration] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      setIsRecording(true);
      setDuration(0);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    setIsRecording(false);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording saved to:', uri); // → Save to Firebase later
  };

  return (
    <View style={styles.container}>
      {/* Timer */}
      <Text style={styles.timer}>
        {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
      </Text>

      {/* Record Button */}
      <TouchableOpacity
        onPressIn={startRecording}
        onPressOut={stopRecording}
        style={styles.recordButton}
      >
        <Icon 
          name={isRecording ? "stop" : "mic"} 
          size={40} 
          color="white" 
        />
      </TouchableOpacity>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="delete" size={30} color="#ef4444" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="check-circle" size={30} color="#10B981" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    color: 'white',
    fontSize: 48,
    marginBottom: 40,
  },
  recordButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  actions: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
  actionButton: {
    padding: 20,
  },
});