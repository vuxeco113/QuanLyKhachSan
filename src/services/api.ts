import axios from 'axios';
import { user } from '../type/user';


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
