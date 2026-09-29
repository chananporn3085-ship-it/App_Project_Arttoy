import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={pastelStyles.container}>
      {/* หัวข้อหลัก */}
      <Text style={pastelStyles.title}>
        App_Project_Arttoy
      </Text>
      <Text style={pastelStyles.subtitle}>
        10 อัตลักษณ์อาร์ตทอยจังหวัดสุพรรณบุรี
      </Text>

      {/* กรอบการ์ดผู้จัดทำพาสเทลหวานๆ */}
      <View style={pastelStyles.cardContainer}>
        <Text style={pastelStyles.cardTitle}> ผู้จัดทำ </Text>

        <View style={pastelStyles.nameBox}>
          <Text style={pastelStyles.nameText}>004 น.ส.ชนันพร สุขโข</Text>
          <Text style={pastelStyles.nameText}>005 น.ส.ชยุตรา หงษ์ทอง</Text>
          <Text style={pastelStyles.nameText}>ISD 36821N </Text>
        </View>
      <Text style={pastelStyles.cardTitle}> เสนอ </Text>
         <View style={pastelStyles.nameBox}>
          <Text style={pastelStyles.nameText}>อาจารย์วัชรี เพ็ชรวงษ์</Text>
        </View>
      </View>
    </View>
  );
}

const pastelStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // จัดองค์ประกอบทั้งหมดให้อยู่ตรงกลางหน้าจอ
    backgroundColor: '#FFE4EC', // พื้นหลังสีครีมพาสเทล
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#8A5CF5', // สีม่วงพาสเทลสดใส
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#3B3C58', // สีเทาอมฟ้าพาสเทล
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center', // จัดข้อความภายในการ์ดให้อยู่ตรงกลางทั้งหมด
    borderWidth: 2,
    borderColor: '#FFC5E3', // กรอบสีชมพูพาสเทล
    // เงาสีม่วงอ่อนฟรุ้งฟริ้ง
    elevation: 4,
    shadowColor: '#B19FFB',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D8629B', // สีชมพูเข้มพาสเทล
    marginBottom: 16,
    textAlign: 'center', // จัดคำว่า "ผู้จัดทำ" อยู่ตรงกลาง
  },
  nameBox: {
    width: '100%',
    backgroundColor: '#F0F3FF', // พื้นหลังกล่องชื่อสีฟ้าพาสเทลอ่อนๆ
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 15,
    alignItems: 'center', // จัดรายชื่อให้อยู่ตรงกลาง
    borderColor: '#C7D2FE',
    borderWidth: 1,
  },
  nameText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#5B67A5', // สีม่วงอมฟ้าพาสเทล
    marginVertical: 3,
    textAlign: 'center', // จัดชื่อให้อยู่ตรงกลาง
  },
});