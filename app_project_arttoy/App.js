import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import หน้า UI ต่างๆ
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';

// Import หน้าทั้ง 10 อาร์ตทอย
import DragonScreen from './screens/DragonScreen';
import KhunchangScreen from './screens/KhunchangScreen';
import BuffaloScreen from './screens/BuffaloScreen';
import LuangpotoScreen from './screens/LuangpotoScreen';
import SomwangScreen from './screens/SomwangScreen';
import TaladScreen from './screens/TaladScreen';
import HobanharnScreen from './screens/HobanharnScreen';
import SaleeScreen from './screens/SaleeScreen';
import ChangScreen from './screens/ChangScreen';
import PlaScreen from './screens/PlaScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigation สำหรับเมนู Image พร้อมปรับ Header โทนพาสเทล
function ImageStack() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#FDF4F8', // พื้นหลัง Header สีครีมชมพูพาสเทล
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: '#FFC5E3',
        },
        headerTintColor: '#8A5CF5', // สีปุ่มย้อนกลับและข้อความสีม่วงพาสเทล
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen 
        name="ImageMain" 
        component={ImageScreen} 
        options={{ headerTitle: '✨ 10 อาร์ตทอย สุพรรณบุรี ✨' }} 
      />
      <Stack.Screen name="DragonScreen" component={DragonScreen} options={{ headerTitle: 'มังกรสวรรค์' }} />
      <Stack.Screen name="KhunchangScreen" component={KhunchangScreen} options={{ headerTitle: 'ขุนช้าง' }} />
      <Stack.Screen name="BuffaloScreen" component={BuffaloScreen} options={{ headerTitle: 'ควายไทย' }} />
      <Stack.Screen name="LuangpotoScreen" component={LuangpotoScreen} options={{ headerTitle: 'หลวงพ่อโต' }} />
      <Stack.Screen name="SomwangScreen" component={SomwangScreen} options={{ headerTitle: 'สมหวัง' }} />
      <Stack.Screen name="TaladScreen" component={TaladScreen} options={{ headerTitle: 'ตลาดสามชุก' }} />
      <Stack.Screen name="HobanharnScreen" component={HobanharnScreen} options={{ headerTitle: 'หอบรรหารแจ่มใส' }} />
      <Stack.Screen name="SaleeScreen" component={SaleeScreen} options={{ headerTitle: 'สาลี่สุพรรณ' }} />
      <Stack.Screen name="ChangScreen" component={ChangScreen} options={{ headerTitle: 'ยุทธหัตถี' }} />
      <Stack.Screen name="PlaScreen" component={PlaScreen} options={{ headerTitle: 'ปลาม้า' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FDF4F8',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: '#FFC5E3',
          },
          headerTintColor: '#8A5CF5',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
          // ปรับแต่ง Tab Bar ด้านล่างให้เป็นสีพาสเทล
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopColor: '#FFC5E3',
            borderTopWidth: 1.5,
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Image') {
              iconName = focused ? 'image' : 'image-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#8A5CF5', // สีเมื่อเลือกแท็บ (ม่วงพาสเทล)
          tabBarInactiveTintColor: '#B0B7C3', // สีเมื่อไม่ได้เลือก (เทาอมฟ้าพาสเทล)
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerTitle: '🏠 หน้าแรก' }} 
        />
        <Tab.Screen 
          name="Image" 
          component={ImageStack} 
          options={{ headerShown: false, tabBarLabel: 'อาร์ตทอย' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}