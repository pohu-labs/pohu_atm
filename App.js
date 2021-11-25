import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './login/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import ViewTask from './task/ViewTask';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskScreen from './task/UpadteTask';
import MainScreen from './home/MainScreen';
import FooterComponent from './component/footer/FooterComponent';
import Sidebar from './component/headder/sidebar';
import ScannerComponent from './QrCode/qrCode';
import TakeAttendanceComponent from './attendance/TakeAttendance';
import StudentAttendanceComponent from './attendance/StudentAttendance';
import MeetingScreen from './Meetings/MeetingComponent';
import HomeWorkComponent from './task/homework';
import ParentScreen from './home/MainScreenParents';
import Calender from './component/calender/Calender';
import HomeWork from './task/homewrk';
import TaskProfile from './task/taskprofile';
import TaskCreated from './task/TaskCreated';
import StudentProfile from './Parent App/studentprofile';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="studentprofile" component={StudentProfile} options={{ headerShown: false }} />
        <Stack.Screen name="work" component={HomeWork} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="task" component={ViewTask} options={{ headerShown: false }} />
        <Stack.Screen name="task-update" component={TaskScreen} />
        <Stack.Screen name="footer" component={FooterComponent} options={{ headerShown: false }} />
        <Stack.Screen name="home_work" component={HomeWorkComponent} options={{ headerShown: false }} />
        <Stack.Screen name="sidebar" component={Sidebar} options={{ headerShown: false }} />
        <Stack.Screen name="qr-scanner" component={ScannerComponent} options={{ headerShown: false }} />
        <Stack.Screen name="attendance-t" component={TakeAttendanceComponent} options={{ headerShown: false }} />
        <Stack.Screen name="attendance-s" component={StudentAttendanceComponent} options={{ headerShown: false }} />
        <Stack.Screen name="meetings" component={Calender} options={{ headerShown: false }} />
        <Stack.Screen name="parent-home" component={ParentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="task-create" component={TaskCreated} options={{ headerShown: false }} />
        <Stack.Screen name="task-profile" component={TaskProfile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;