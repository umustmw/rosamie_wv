import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Linking } from 'react-native';
import Constants from 'expo-constants';

export default function App() {

  return (
    <WebView
      style={styles.container}
      source={require('./index.html')}
      // source={{ uri: '...com' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
