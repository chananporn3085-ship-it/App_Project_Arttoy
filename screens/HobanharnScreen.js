import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function HobanharnScreen() {
  return (
    <View style={[styles.screen, styles.centerContent]}>
      <Text style={styles.title}>หอบรรหารแจ่มใส</Text>
      <Image 
        source={require('../assets/7.Hobanharn.png')} 
        style={{ width: 260, height: 260, resizeMode: 'contain', marginVertical: 20 }} 
      />
      <Text style={styles.subtitle}>หอบรรหารแจ่มใส จังหวัดสุพรรณบุรี</Text>
    </View>
  );
}