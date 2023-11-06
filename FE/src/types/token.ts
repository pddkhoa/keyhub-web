export interface TokenType {
  token: string;
  type: string;
  refreshToken: string;
  statusCode: number;
}
export interface RootStateToken {
  auth: {
    login: {
      data: TokenType;
    };
  };
}
