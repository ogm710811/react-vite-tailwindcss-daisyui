import React from 'react';
import { Toast } from '../types';

interface ToastContainerProps {
  toasts: Toast[];
  onClose: (id: number) => void;
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return (
    <div className="toast toast-top toast-end z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`alert ${
            toast.type === 'error'
              ? 'alert-error'
              : toast.type === 'success'
              ? 'alert-success'
              : 'alert-info'
          } shadow-lg animate-toast-in`}
        >
          <span className="text-2xl">
            {toast.type === 'error' ? '❌' : toast.type === 'success' ? '✅' : '⏳'}
          </span>
          <span className="text-sm">{toast.msg}</span>
          <button
            onClick={() => onClose(toast.id)}
            className="btn btn-ghost btn-sm btn-circle"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
