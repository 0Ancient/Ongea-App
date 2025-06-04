import { Audio } from 'expo-av';
import { Button, View } from 'react-native';

export default function RecordScreen() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);

  const startRecording = async () => {
    await Audio.requestPermissionsAsync();
    const { recording } = await Audio.Recording.createAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );
    setRecording(recording);
  };

  const stopRecording = async () => {
    await recording?.stopAndUnloadAsync();
    const uri = recording?.getURI(); 
    console.log("Voice note saved to:", uri); // → Save to Firebase later
  };

  return (
    <View>
      <Button 
        title={recording ? "Stop Recording" : "Start Recording"} 
        onPress={recording ? stopRecording : startRecording} 
      />
    </View>
  );
}