import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/type'; // sửa đường dẫn nếu khác
import DateTimePicker from '@react-native-community/datetimepicker';

type BookingScreenRouteProp = RouteProp<RootStackParamList, 'Booking'>;
const BookingScreen = () => {
  const route = useRoute<BookingScreenRouteProp>();
  const { room } = route.params;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDatePicker1, setShowDatePicker1] = useState(false);
  
  const [ngaydat, setNgayDat]=useState(new Date());
  const [ngayNhanPhong, setNgayNhanPhong ]= useState(new Date());
  const [ngayTraPhong, setNgayTraPhong]=useState(new Date() )

  return (
    <View style={styles.container}>
      <Text>Tạo Phiếu Đặt Phòng</Text>
      <TextInput placeholder='Mã Phòng' value={room.room_id}/>
      <TextInput placeholder='Mã Khách Hàng'/>
      <TextInput placeholder='Mã Nhân Viên'/>
      <Text>Ngày đặt phòng :{ngaydat.toISOString().split('T')[0]}</Text>
      <TouchableOpacity 
        style={styles.datePickerButton} 
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.datePickerButtonText}>Chọn ngày nhận phòng</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={ngayNhanPhong}
          mode="date"
          display="default"
          onChange={(e, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setNgayNhanPhong(selectedDate);
          }}
        />
      )}
      <TouchableOpacity 
        style={styles.datePickerButton} 
        onPress={() => setShowDatePicker1(true)}
      >
        <Text style={styles.datePickerButtonText}>Chọn ngày trả phòng</Text>
      </TouchableOpacity>
      {showDatePicker1 && (
        <DateTimePicker
          value={ngayTraPhong}
          mode="date"
          display="default"
          onChange={(e, selectedDate) => {
            setShowDatePicker1(false);
            if (selectedDate) setNgayTraPhong(selectedDate);
          }}
        />
      )}
      <TextInput placeholder='Số người ở'/>
      <TextInput placeholder='Booking status'/>
      <TextInput placeholder='Mã Khách Hàng' value={room.room_price.toString()}/>
      

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
});

export default BookingScreen;