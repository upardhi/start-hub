export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  avatar: string;
  department: string;
  phone: string;
  location: string;
  bio: string;
  joinDate: string;
}
