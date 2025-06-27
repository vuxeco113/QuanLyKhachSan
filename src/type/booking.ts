export interface Booking {
  booking_id: string;
  booking_cus_id: string;
  booking_room_id: string;
  booking_user_id: string;
  booking_date: string;       // "YYYY-MM-DD"
  booking_get_date: string;
  booking_pay_date: string;
  booking_ppl_num: number;
  booking_status: string;
  booking_price: number;
}