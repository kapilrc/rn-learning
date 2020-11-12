import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Launching screen. Welcome...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  }
});
