import React, { createContext, useContext, useState, ReactNode } from 'react';
import ErrorNotification, { ErrorDetails } from '../components/ErrorNotification';

interface ErrorContextType {
  showError: (error: ErrorDetails) => void;
  clearError: () => void;
  currentError: ErrorDetails | null;
}

const ErrorContext = createContext<ErrorContextType | null>(null);

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentError, setCurrentError] = useState<ErrorDetails | null>(null);

  const showError = (error: ErrorDetails) => {
    setCurrentError(error);
  };

  const clearError = () => {
    setCurrentError(null);
  };

  return (
    <ErrorContext.Provider value={{ showError, clearError, currentError }}>
      {children}
      {currentError && (
        <ErrorNotification 
          error={currentError} 
          onDismiss={clearError} 
        />
      )}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};

// Helper functions for common error scenarios
export const createDatabaseError = (
  message: string, 
  code?: string, 
  action?: { label: string; onClick: () => void }
): ErrorDetails => ({
  message,
  severity: 'critical',
  category: 'database',
  code,
  action,
  autoHide: false
});

export const createNetworkError = (
  message: string, 
  code?: string, 
  action?: { label: string; onClick: () => void }
): ErrorDetails => ({
  message,
  severity: 'warning',
  category: 'network',
  code,
  action,
  autoHide: true,
  autoHideDelay: 8000
});

export const createAuthError = (
  message: string, 
  code?: string, 
  action?: { label: string; onClick: () => void }
): ErrorDetails => ({
  message,
  severity: 'warning',
  category: 'auth',
  code,
  action,
  autoHide: false
});

export const createInfoNotification = (
  message: string, 
  action?: { label: string; onClick: () => void }
): ErrorDetails => ({
  message,
  severity: 'info',
  category: 'general',
  action,
  autoHide: true,
  autoHideDelay: 5000
});
