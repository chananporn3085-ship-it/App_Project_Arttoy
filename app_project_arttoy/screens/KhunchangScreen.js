import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function KhunchangScreen() {
  return (
    <View style={[styles.screen, styles.centerContent]}>
      <Text style={styles.title}>ขุนช้าง</Text>
      <Image 
        source={require('../assets/2.Khunchang.png')} 
        style={{ width: 260, height: 260, resizeMode: 'contain', marginVertical: 20 }} 
      />
      <Text style={styles.subtitle}>คุ้มขุนช้าง จังหวัดสุพรรณบุรี</Text>
    </View>
  );
}