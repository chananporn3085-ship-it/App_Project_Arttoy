import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function PlaScreen() {
  return (
    <View style={[styles.screen, styles.centerContent]}>
      <Text style={styles.title}>ปลาม้า</Text>
      <Image 
        source={require('../assets/10.Pla.png')} 
        style={{ width: 260, height: 260, resizeMode: 'contain', marginVertical: 20 }} 
      />
      <Text style={styles.subtitle}>ปลาม้า ปลาขึ้นชื่อและสัญลักษณ์แม่น้ำสุพรรณบุรี</Text>
    </View>
  );
}