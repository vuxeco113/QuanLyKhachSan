import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator,TouchableOpacity } from 'react-native';
import { fetchAllRooms ,fetchRoomsByType,fetchRoomTypes,fetchRoomStatus } from '../services/api.ts'; //  điều chỉnh đường dẫn nếu cần
import { Room } from '../type/room.ts';
import { Picker } from '@react-native-picker/picker';
import { useNavigation ,NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/type.ts'; // Điều chỉnh đường dẫn nếu cần

const OverviewScreen = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [roomTypes, setRoomTypes] = useState<{ room_type_id: string, room_type_name: string }[]>([]); // 👈 Khai báo ở đầu component hoặc ngoài useEffect
  const [roomStatuses, setRoomStatuses] = useState<{ room_status_id: string, room_status_name: string }[]>([]);
  
  // Load room types and statuses on first render
  useEffect(() => {
    const loadFilters = async () => {
      try {
        const [types, statuses] = await Promise.all([fetchRoomTypes(), fetchRoomStatus()]);
        setRoomTypes(types);
        setRoomStatuses(statuses);
        if (types.length > 0) setSelectedType(types[0].room_type_id);
        if (statuses.length > 0) setSelectedStatus(statuses[0].room_status_id);
      } catch (error) {
        console.error('Lỗi khi tải bộ lọc:', error);
      }
    };

    loadFilters();
  }, []);

  // Load rooms when selectedType changes
  useEffect(() => {
    if (!selectedType) return;

    const loadRooms = async () => {
      setLoading(true);
      try {
        const data = await fetchRoomsByType(selectedType); // API hiện tại chỉ lọc theo room_type
        const filtered = selectedStatus
          ? data.filter(room => room.room_status === selectedStatus)
          : data;
        setRooms(filtered);
      } catch (error) {
        console.error('Lỗi khi tải phòng:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRooms();
  }, [selectedType, selectedStatus]);


    // Sử dụng NavigationProp với RootStackParamList của bạn
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
     
      <View style={styles.row}>
  <View style={styles.pickerWrapper}>
    <Text style={styles.label}>Loại:</Text>
    <Picker
      selectedValue={selectedType}
      style={styles.picker}
      onValueChange={(value) => setSelectedType(value)}
    >
      {roomTypes.map((type) => (
        <Picker.Item
          label={type.room_type_name}
          value={type.room_type_id}
          key={type.room_type_id}
        />
      ))}
    </Picker>
  </View>

  <View style={styles.pickerWrapper}>
    <Text style={styles.label}>Trạng thái:</Text>
    <Picker
      selectedValue={selectedStatus}
      style={styles.picker}
      onValueChange={(value) => setSelectedStatus(value)}
    >
      {roomStatuses.map((status) => (
        <Picker.Item
          label={status.room_status_name}
          value={status.room_status_id}
          key={status.room_status_id}
        />
      ))}
    </Picker>
  </View>
</View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#00f" />
          <Text>Đang tải...</Text>
        </View>
      ) : rooms.length > 0 ? (
        <FlatList<Room> // 👈 ép kiểu rõ ràng tại đây
        data={rooms}
        keyExtractor={(item) => item.room_id}
        renderItem={({ item }) => {
          const room = item as Room; // 👈 ép kiểu item nếu cần dùng riêng
          return (
            <View style={styles.roomItem}>
              <Text style={styles.title}>{room.room_id} - {room.room_type}</Text>
              <Text>Giá: {room.room_price.toLocaleString()} VND</Text>
              <Text>Sức chứa: {room.room_capacity}</Text>
              <Text>Trạng thái: {room.room_status}</Text>
              <Text>Mô tả: {room.room_description}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Booking', { room })}
              >
                <Text style={styles.buttonText}>Tạo Phiếu Đặt</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      ) : (
        <View style={styles.center}>
          <Text>Không có phòng nào khớp bộ lọc.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 16,
    marginBottom: 8,
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roomItem: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap', // Cho phép xuống dòng nếu không đủ chỗ
  marginBottom: 16,
},

pickerWrapper: {
  flex: 1,
  marginHorizontal: 4,
  width: '100%',  // Hoặc dùng '50%' nếu không có marginHorizontal
  marginBottom: 1,
},

label: {
  fontSize: 14,
  marginBottom: 4,
},

picker: {
  height: 60,
  width: '100%',
},

button:{
            backgroundColor:'#007bff',
            paddingVertical:14,
            borderRadius:8
        },
        buttonText:{
            color:'#fff',
            textAlign:'center',
            fontSize:16,
            fontWeight:600
        }
});

export default OverviewScreen;