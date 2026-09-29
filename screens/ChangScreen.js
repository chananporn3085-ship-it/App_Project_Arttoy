import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function ChangScreen() {
  return (
    <View style={[styles.screen, styles.centerContent]}>
      <Text style={styles.title}>ยุทธหัตถี</Text>
      <Image 
        source={require('../assets/9.Chang.png')} 
        style={{ width: 260, height: 260, resizeMode: 'contain', marginVertical: 20 }} 
      />
      <Text style={styles.subtitle}>ดอนเจดีย์ และสงครามยุทธหัตถี จังหวัดสุพรรณบุรี</Text>
    </View>
  );
}