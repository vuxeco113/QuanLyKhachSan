import axios from 'axios';
import { user } from '../type/user';
import { Room } from '../type/room';


export async function loginUser(
  email: string,
  password: string
): Promise<user> {
  try {
    const response = await axios.post<user>(
      'http://192.168.2.175/api/login.php', // dùng 10.0.2.2 cho Android emulator
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('Lỗi khi gọi API đăng nhập:', error.message);

    return {
      success: false,
      message: 'Lỗi kết nối đến máy chủ',
    };
  }
}

export interface RegisterRequest {
  user_name: string;
  user_email: string;
  user_password: string;
  user_phone?: string;
  user_dateofbirth?: string;
  user_address?: string;
  user_pic?: string;
  user_status?: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user?: {
    user_id: string;
    user_name: string;
    user_email: string;
    user_phone: string;
    user_dateofbirth: string;
    user_address: string;
    user_pic: string;
    user_status: string;
  };
}

export async function registerUser(data: RegisterRequest): Promise<RegisterResponse> {
  try {
    const response = await axios.post<RegisterResponse>(
      'http://192.168.2.175/api/register.php', // <-- Địa chỉ IP máy chủ chạy XAMPP
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('Lỗi khi gọi API đăng ký:', error);

    return {
      success: false,
      message: error.response?.data?.message || 'Lỗi kết nối đến máy chủ',
    };
  }
}


// Lấy tất cả các phòng
export const fetchAllRooms = async (): Promise<Room[]> => {
  try {
    const response = await axios.get<Room[]>(`http://192.168.2.175/api/get_all_room.php`);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách phòng:', error);
    throw error;
  }
};

// Lấy phòng theo room_type
export const fetchRoomsByType = async (roomType: string): Promise<Room[]> => {
  try {
    const response = await axios.get<Room[]>(
      `http://192.168.2.175/api/get_room_by_roomtype.php`,
      {
        params: { room_type: roomType },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy phòng theo loại:', error);
    throw error;
  }
};

// roomApi.ts
export const fetchRoomTypes = async (): Promise<{ room_type_id: string, room_type_name: string }[]> => {
  const response = await axios.get(`http://192.168.2.175/api/get_all_room_types.php`);
  return response.data;
};


// roomApi.ts
export const fetchRoomStatus = async (): Promise<{ room_status_id: string, room_status_name: string }[]> => {
  const response = await axios.get(`http://192.168.2.175/api/get_all_room_status.php`);
  return response.data;
};
