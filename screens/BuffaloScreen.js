import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function BuffaloScreen() {
  return (
    <View style={[styles.screen, styles.centerContent]}>
      <Text style={styles.title}>ควายไทย</Text>
      <Image 
        source={require('../assets/3.Buffalo.jpg')} 
        style={{ width: 260, height: 260, resizeMode: 'contain', marginVertical: 20 }} 
      />
      <Text style={styles.subtitle}>หมู่บ้านอนุรักษ์ควายไทย จังหวัดสุพรรณบุรี</Text>
    </View>
  );
}