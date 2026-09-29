import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function LuangpotoScreen() {
  return (
    <View style={[styles.screen, styles.centerContent]}>
      <Text style={styles.title}>หลวงพ่อโต</Text>
      <Image 
        source={require('../assets/4.Luangpoto.png')} 
        style={{ width: 260, height: 260, resizeMode: 'contain', marginVertical: 20 }} 
      />
      <Text style={styles.subtitle}>วัดป่าเลไลยก์วรวิหาร จังหวัดสุพรรณบุรี</Text>
    </View>
  );
}