import { createContext, useState, ReactNode } from "react";

type AuthContextType = {
  auth: any;
  setAuth: (value: any) => void;
};

const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<any>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
