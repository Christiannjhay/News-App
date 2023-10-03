import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import News from './components/newsCard';


export default function App() {
  return (
    <View style={styles.container}>
      <News
      headline = 'this is a text'
      />
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
});
