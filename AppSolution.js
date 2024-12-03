import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>You have pushed the button this many times: </Text>
        <Text style={styles.text}>{typeof count === 'number' ? count.toString() : '0'}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text onPress={() => setCount(count + 1)} style={styles.buttonText}>Increment Count</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  text:{
    fontSize: 20,
    textAlign: 'center'
  }
});