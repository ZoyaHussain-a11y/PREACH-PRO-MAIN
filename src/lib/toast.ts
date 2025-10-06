import { toast as sonnerToast } from 'sonner';

interface ToastOptions {
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
}

/**
 * Toast utility using Sonner for consistent notifications across the app
 *
 * Usage:
 * - toast.success('User created successfully')
 * - toast.error('Failed to save', { description: 'Please try again' })
 * - toast.promise(apiCall, { loading: 'Saving...', success: 'Saved!', error: 'Failed' })
 */
export const toast = {
  /**
   * Show a success toast message
   */
  success: (message: string, options?: ToastOptions) => {
    return sonnerToast.success(message, {
      description: options?.description,
      action: options?.action,
      duration: options?.duration || 4000,
    });
  },

  /**
   * Show an error toast message
   */
  error: (message: string, options?: ToastOptions) => {
    return sonnerToast.error(message, {
      description: options?.description,
      action: options?.action,
      duration: options?.duration || 6000, // Longer duration for errors
    });
  },

  /**
   * Show a warning toast message
   */
  warning: (message: string, options?: ToastOptions) => {
    return sonnerToast.warning(message, {
      description: options?.description,
      action: options?.action,
      duration: options?.duration || 5000,
    });
  },

  /**
   * Show an info toast message
   */
  info: (message: string, options?: ToastOptions) => {
    return sonnerToast.info(message, {
      description: options?.description,
      action: options?.action,
      duration: options?.duration || 4000,
    });
  },

  /**
   * Show a default toast message
   */
  message: (message: string, options?: ToastOptions) => {
    return sonnerToast(message, {
      description: options?.description,
      action: options?.action,
      duration: options?.duration || 4000,
    });
  },

  /**
   * Show a loading toast that can be updated
   */
  loading: (message: string, options?: Omit<ToastOptions, 'action'>) => {
    return sonnerToast.loading(message, {
      description: options?.description,
      duration: options?.duration || Infinity, // Loading toasts don't auto-dismiss
    });
  },

  /**
   * Handle promise-based operations with loading, success, and error states
   */
  promise: <T>(
    promise: Promise<T>,
    options: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: Error) => string);
      description?: string;
      duration?: number;
    }
  ) => {
    return sonnerToast.promise(promise, {
      loading: options.loading,
      success: options.success,
      error: options.error,
      description: options.description,
      duration: options.duration || 4000,
    });
  },

  /**
   * Dismiss a specific toast by ID
   */
  dismiss: (toastId?: string | number) => {
    return sonnerToast.dismiss(toastId);
  },

  /**
   * Dismiss all toasts
   */
  dismissAll: () => {
    return sonnerToast.dismiss();
  },

  /**
   * Show a custom toast with custom JSX content
   */
  custom: (
    jsx: (id: string | number) => React.ReactElement,
    options?: ToastOptions
  ) => {
    return sonnerToast.custom(jsx, {
      duration: options?.duration || 4000,
    });
  },
};

// Export individual methods for convenience
export const {
  success,
  error,
  warning,
  info,
  message,
  loading,
  promise,
  dismiss,
  dismissAll,
} = toast;
