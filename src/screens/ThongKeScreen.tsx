import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation ,NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/type.ts'; // Điều chỉnh đường dẫn nếu cần

const ThongKeScreen = () => {
  // Sử dụng NavigationProp với RootStackParamList của bạn
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thống Kê</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
        <Text style={styles.loginText}>Đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity>
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
  loginLink: {
    marginTop: 25,
    alignSelf: 'center',
    padding: 10,
  },
  loginText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
// Sử dụng cùng styles như OverviewScreen hoặc tạo styles riêng
export default ThongKeScreen;