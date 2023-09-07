interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  roles: Role[];
  phone: string;
  createDate: number;
  updateDate: number;
  avatar: string | null;
  second_name: string;
  status: boolean;
  gender: string;
  descriptions: string | null;
}

interface Role {
  id: number;
  name: string;
}

interface UserDetails {
  users: User;
  enabled: boolean;
  password: string;
  username: string;
  authorities: Authority[];
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
}

interface Authority {
  authority: string;
}

interface TokenPayload {
  sub: string;
  userDetails: UserDetails;
  iat: number;
  exp: number;
}

export default TokenPayload;
