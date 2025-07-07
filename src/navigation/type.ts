export type User = {
  id: number;
  name: string;
  email: string;
  token: string;
};

export type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};