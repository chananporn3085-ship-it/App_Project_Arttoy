import React from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ImageScreen({ navigation }) {
  const artToyList = [
    { id: '1', name: 'มังกรสวรรค์', screen: 'DragonScreen' },
    { id: '2', name: 'ขุนช้าง', screen: 'KhunchangScreen' },
    { id: '3', name: 'ควายไทย', screen: 'BuffaloScreen' },
    { id: '4', name: 'หลวงพ่อโต', screen: 'LuangpotoScreen' },
    { id: '5', name: 'สมหวัง', screen: 'SomwangScreen' },
    { id: '6', name: 'ตลาดสามชุก', screen: 'TaladScreen' },
    { id: '7', name: 'หอบรรหารแจ่มใส', screen: 'HobanharnScreen' },
    { id: '8', name: 'สาลี่สุพรรณ', screen: 'SaleeScreen' },
    { id: '9', name: 'ยุทธหัตถี', screen: 'ChangScreen' },
    { id: '10', name: 'ปลาม้า', screen: 'PlaScreen' },
  ];

  return (
    <ScrollView contentContainerStyle={pastelStyles.container}>
      <Text style={pastelStyles.headerText}>เลือกดู 10 อาร์ตทอย</Text>

      {artToyList.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={pastelStyles.button}
          onPress={() => navigation.navigate(item.screen)}
          activeOpacity={0.8}
        >
          <Text style={pastelStyles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const pastelStyles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#FDF4F8', // พื้นหลังพาสเทลครีมอมชมพู
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8A5CF5', // สีม่วงพาสเทล
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFB6C1', // ปุ่มสีชมพูพาสเทล (Light Pink)
    width: '100%',
    paddingVertical: 11,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1.5,
    borderColor: '#FFA0B4', // ขอบปุ่มสีชมพูพาสเทลเข้มขึ้นเล็กน้อย
    elevation: 2,
    shadowColor: '#FFB6C1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#5C2C3B', // ตัวอักษรสีน้ำตาลเข้มอมชมพู อ่านง่ายและเข้ากับสีชมพูพาสเทล
    fontSize: 16,
    fontWeight: 'bold',
  },
});