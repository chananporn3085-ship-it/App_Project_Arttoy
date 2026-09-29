import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function ImageScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Image Screen</Text>
      <Image
        source={require('../assets/1.Dragon.png')}
        style={styles.mediaImage}
      />
    </View>
  );
}
