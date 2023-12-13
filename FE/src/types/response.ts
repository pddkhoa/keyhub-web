export type ResponseBase<T> = {
  body?: T;
  error: boolean;
  status: number;
  message: string;
  statusText: string;
  contentType: string | undefined;
};

interface UserDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  phone: string;
  createDate: number;
  updateDate: number;
  avatar: string;
  second_name: string;
  status: number;
  gender: string;
  address: string;
  company: string;
  country: string;
  banner_url: string;
  sumViolating: number;
  sumBlog: number;
  totalFollowers: number;
  totalFollowing: number;
  school: string;
  descriptions: string;
}

interface Authority {
  authority: string;
}

export interface UserDetailsResponse {
  sub: string;
  userDetails: {
    users: UserDetails;
    enabled: boolean;
    username: string;
    authorities: Authority[];
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    accountNonLocked: boolean;
    password: string;
  };
  iat: number;
  exp: number;
}
