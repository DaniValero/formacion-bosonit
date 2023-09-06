export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  hasNotifications?: boolean;
  country: string;
  city: string;
}