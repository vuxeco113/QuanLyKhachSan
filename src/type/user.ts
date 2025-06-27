export type user = {
  success: boolean;
  message: string;
  user?: {
    id: string;
    name: string;
    email: string;
    password:string;
    phone: string;
    dateofBirth:Date;
    address: string;
    status: string;
    pic: string;
  };
};
