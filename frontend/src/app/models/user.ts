export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  subscribe: boolean = false;
  role: string;
  token?: string;
}
