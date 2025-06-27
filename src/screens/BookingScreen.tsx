import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Màn hình Đặt phòng</Text>
    </View>
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
// Sử dụng cùng styles như OverviewScreen hoặc tạo styles riêng
export default BookingScreen;