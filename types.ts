export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'instructor';
  membership: 'free' | 'premium' | 'pro';
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  progress?: number;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string, name: string) => void;
  logout: () => void;
}