import React from 'react';
import { AlertCircle, WifiOff, XCircle, AlertTriangle, RefreshCw, Ban } from 'lucide-react';

export type AuthErrorType = 
  | 'popup_blocked'
  | 'network_error'
  | 'user_cancelled'
  | 'already_signed_in'
  | 'general_error';

interface ErrorConfig {
  message: string;
  icon: React.ReactNode;
  action?: string;
}

const errorConfigs: Record<AuthErrorType, ErrorConfig> = {
  popup_blocked: {
    message: 'Pop-up was blocked. Please allow pop-ups and try again.',
    icon: <Ban className="w-5 h-5" />,
    action: 'Enable Pop-ups'
  },
  network_error: {
    message: 'Unable to connect. Please check your internet connection.',
    icon: <WifiOff className="w-5 h-5" />,
    action: 'Retry'
  },
  user_cancelled: {
    message: 'Sign in was cancelled. Ready when you are!',
    icon: <XCircle className="w-5 h-5" />,
    action: 'Try Again'
  },
  already_signed_in: {
    message: 'You\'re already signed in with a different account.',
    icon: <AlertTriangle className="w-5 h-5" />,
    action: 'Switch Account'
  },
  general_error: {
    message: 'Something went wrong. Please try again.',
    icon: <AlertCircle className="w-5 h-5" />,
    action: 'Retry'
  }
};

interface AuthErrorHandlerProps {
  error: AuthErrorType | null;
  onRetry: () => void;
  onClose: () => void;
}

const AuthErrorHandler: React.FC<AuthErrorHandlerProps> = ({
  error,
  onRetry,
  onClose
}) => {
  if (!error) return null;

  const config = errorConfigs[error];

  return (
    <div className="animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="bg-light-bg-secondary/50 dark:bg-dark-bg/50 rounded-xl p-4 border border-red-200 dark:border-red-900/50">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
            {config.icon}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-red-600 dark:text-red-400 font-medium mb-1">
              {config.message}
            </p>
            
            {config.action && (
              <button
                onClick={onRetry}
                className="inline-flex items-center gap-2 text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                {config.action}
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-light-bg/50 dark:hover:bg-dark-bg/50 transition-colors group"
          >
            <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthErrorHandler;
