export interface TokenType {
  token: string;
  type: string;
  refreshToken: string;
}
export interface RootStateToken {
  auth: {
    login: {
      data: TokenType;
    };
  };
}
