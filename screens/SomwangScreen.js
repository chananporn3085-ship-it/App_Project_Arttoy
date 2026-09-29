import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function SomwangScreen() {
  return (
    <View style={[styles.screen, styles.centerContent]}>
      <Text style={styles.title}>สมหวัง</Text>
      <Image 
        source={require('../assets/5.Somwang.jpeg')} 
        style={{ width: 260, height: 260, resizeMode: 'contain', marginVertical: 20 }} 
      />
      <Text style={styles.subtitle}>แห้ว หรือ สมหวัง สินค้าขึ้นชื่อจังหวัดสุพรรณบุรี</Text>
    </View>
  );
}