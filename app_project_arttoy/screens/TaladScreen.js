import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function TaladScreen() {
  return (
    <View style={[styles.screen, styles.centerContent]}>
      <Text style={styles.title}>ตลาดสามชุก</Text>
      <Image 
        source={require('../assets/6.Talad.png')} 
        style={{ width: 260, height: 260, resizeMode: 'contain', marginVertical: 20 }} 
      />
      <Text style={styles.subtitle}>ตลาดสามชุก ตลาดร้อยปี จังหวัดสุพรรณบุรี</Text>
    </View>
  );
}