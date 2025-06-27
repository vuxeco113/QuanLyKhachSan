// src/navigation/types.ts (khuyến nghị)
// hoặc ở đầu tệp AppNavigator.js/tsx
import {Room} from '../type/room.ts'

export type RootStackParamList = {
  Main: undefined; // Màn hình 'Main' (BottomTabNavigator) không nhận tham số nào
  Login: undefined; // Màn hình 'Login' không nhận tham số nào
  Register: undefined; // Màn hình 'Register' không nhận tham số nào
  Booking:{ room: Room };
};

export type BottomTabParamList = {
  'Tổng quan': undefined;
  'Sơ đồ phòng': undefined;
  'Đặt phòng': undefined;
  'Nhiều hơn': undefined;
};