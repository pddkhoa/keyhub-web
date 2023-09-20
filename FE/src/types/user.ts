interface Role {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  roles: Role[];
  phone: string;
  createDate: string;
  updateDate: string | null;
  avatar: string | null;
  second_name: string;
  status: boolean;
  gender: string;
  address: string | null;
  company: string | null;
  country: string | null;
  banner_url: string | null;
  descriptions: string | null;
  school: string | null;
}

export default User;
