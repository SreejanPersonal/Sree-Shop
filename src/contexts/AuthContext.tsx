import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, AuthError } from 'firebase/auth';
import { firebaseService } from '../services/firebase';
import { AuthErrorType } from '../components/AuthErrorHandler';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  lastError: AuthErrorType | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastError, setLastError] = useState<AuthErrorType | null>(null);

  useEffect(() => {
    const unsubscribe = firebaseService.onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      setLastError(null);
      const result = await firebaseService.signInWithGoogle();
      setUser(result.user);
    } catch (error) {
      console.error('Error signing in:', error);
      let errorType: AuthErrorType = 'general_error';
      
      if (error instanceof Error) {
        const authError = error as AuthError;
        
        // Map Firebase error codes to our custom error types
        switch(authError.code) {
          case 'auth/popup-blocked':
            errorType = 'popup_blocked';
            break;
          case 'auth/network-request-failed':
            errorType = 'network_error';
            break;
          case 'auth/popup-closed-by-user':
            errorType = 'user_cancelled';
            break;
          case 'auth/credential-already-in-use':
            errorType = 'already_signed_in';
            break;
          default:
            errorType = 'general_error';
        }
      }
      
      setLastError(errorType);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseService.signOut();
      // Clear user data
      setUser(null);
      // No need to clear API key from localStorage as we're now using Supabase
      // You could add more cleanup here if needed
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signOut,
    lastError,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
