import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function DragonScreen() {
  return (
    <View style={[styles.screen, styles.centerContent]}>
      <Text style={styles.title}>มังกรสวรรค์</Text>
      <Image 
        source={require('../assets/1.Dragon.png')} 
        style={{ width: 260, height: 260, resizeMode: 'contain', marginVertical: 20 }} 
      />
      <Text style={styles.subtitle}>อุทยานมังกรสวรรค์ จังหวัดสุพรรณบุรี</Text>
    </View>
  );
}