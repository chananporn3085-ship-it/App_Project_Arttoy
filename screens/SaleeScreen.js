import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function SaleeScreen() {
  return (
    <View style={[styles.screen, styles.centerContent]}>
      <Text style={styles.title}>สาลี่สุพรรณ</Text>
      <Image 
        source={require('../assets/8.Salee.png')} 
        style={{ width: 260, height: 260, resizeMode: 'contain', marginVertical: 20 }} 
      />
      <Text style={styles.subtitle}>ขนมสาลี่ ของฝากขึ้นชื่อจังหวัดสุพรรณบุรี</Text>
    </View>
  );
}