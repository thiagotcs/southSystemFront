import React, { createContext, useCallback, useState, useContext } from 'react';

interface AuthState {
  email: string;
  password: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  email: string;
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const email = localStorage.getItem('@SouthSystem: email');
    const password = localStorage.getItem('@SouthSystem: password');

    if (email && password) {
      return { email: JSON.parse(email), password: JSON.parse(password) };
    }
    return {} as AuthState;
  });
  const signIn = useCallback(({ email, password }) => {
    localStorage.setItem('@SouthSystem: email', JSON.stringify(email));
    localStorage.setItem('@SouthSystem: password', JSON.stringify(password));

    setData({ email, password });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@SouthSystem: email');
    localStorage.removeItem('@SouthSystem: password');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ email: data.email, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
