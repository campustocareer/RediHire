'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Clear all existing data
    localStorage.clear();
    
    // Initialize admin account
    const adminUser = {
      id: 'admin',
      name: 'Admin',
      email: 'admin@edupro.com',
      password: 'admin123', // In a real app, this should be properly hashed
      isAdmin: true
    };
    
    localStorage.setItem('users', JSON.stringify([adminUser]));
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin || email === 'admin@edupro.com',
      avatar: `https://api.dicebear.com/7.x/avatars/svg?seed=${user.name}`,
    };

    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const register = async (userData: any) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.some((user: any) => user.email === userData.email)) {
      throw new Error('Email already exists');
    }

    const newUser = {
      id: Date.now().toString(),
      ...userData,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};