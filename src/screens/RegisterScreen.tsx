import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Button
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {registerUser} from '../services/api.ts'
import DateTimePicker from '@react-native-community/datetimepicker';




 const RegisterScreen:React.FC=()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [address, setAddress] = useState('');
    const [pic, setPic] = useState('');
    const [status, setStatus] = useState('active');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleRegister = async ():Promise<void> =>{
        if(!email || !password || !name || !phone || !dateOfBirth || !address ){
            Alert.alert('Lỗi','Vui lòng nhập đầy đủ thông tin');
            return;
        }
        const newdate=dateOfBirth.toISOString().split('T')[0];
        // const res = await registerUser(name, email, password, phone, dateOfBirth, address, status, pic);
        
          const res = await registerUser({
          user_name: name,
          user_email: email,
          user_password: password,
          user_phone:phone,
          user_address: address,
          user_dateofbirth:  dateOfBirth.toISOString().split('T')[0],
          user_pic: pic || 'default.png',
          user_status: status || 'active',
        });

        if (res.success) {
        Alert.alert('Thành công', res.message);
        } else {
        Alert.alert('Thất bại', res.message);
        }
            
    }
    return(
       <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>

      <TextInput style={styles.input} placeholder="Tên" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Mật khẩu" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Số điện thoại" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
      <Text style={styles.dateText  }>Ngày sinh: {dateOfBirth.toISOString().split('T')[0]}</Text>
  
      <TouchableOpacity 
        style={styles.datePickerButton} 
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.datePickerButtonText}>Chọn ngày sinh</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          display="default"
          onChange={(e, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDateOfBirth(selectedDate);
          }}
        />
      )}
      <TextInput style={styles.input} placeholder="Địa chỉ" value={address} onChangeText={setAddress} />
      <TextInput style={styles.input} placeholder="Ảnh đại diện (URL)" value={pic} onChangeText={setPic} />
      <TextInput style={styles.input} placeholder="Trạng thái" value={status} onChangeText={setStatus} />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Đăng ký</Text>
      </TouchableOpacity>

       {/* <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
        <Text style={styles.loginText}>Đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    paddingBottom: 40,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 25,
    textAlign: 'center',
    color: '#2c3e50',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
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
  dateText: {
    marginTop: 15,
    fontSize: 16,
    color: '#2c3e50',
    paddingVertical: 10,
  },
  datePickerButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  datePickerButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  registerButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default RegisterScreen