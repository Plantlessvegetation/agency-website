import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  company?: string;
  plan?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, company?: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('digitalforge-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock authentication - replace with real API
    if (email && password) {
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email,
        company: 'Acme Corp',
        plan: 'Pro'
      };
      setUser(mockUser);
      localStorage.setItem('digitalforge-user', JSON.stringify(mockUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const register = async (name: string, email: string, password: string, company?: string) => {
    // Mock registration - replace with real API
    if (name && email && password) {
      const mockUser: User = {
        id: Date.now().toString(),
        name,
        email,
        company,
        plan: 'Startup'
      };
      setUser(mockUser);
      localStorage.setItem('digitalforge-user', JSON.stringify(mockUser));
    } else {
      throw new Error('Invalid registration data');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('digitalforge-user');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        register, 
        logout, 
        isAuthenticated: !!user 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}