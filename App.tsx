import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Modal } from 'react-native';

export default function App() {
  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Modal 
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modal}>
          <Text style={styles.text}>This is a modal.</Text>
          <Pressable onPress={() => setVisible(false)}>
            <Text style={styles.text}>Close</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable onPress={() => setVisible(true)}>
        <Text style={styles.text}>Show modal message</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: '#eeeeee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  text: {
    fontSize: 20,
  }
});
