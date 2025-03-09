
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none backdrop-blur-sm';
  
  const variantStyles = {
    primary: 'bg-blue-600/90 text-white hover:bg-blue-700 focus:ring-blue-500 border border-blue-500/30 shadow-lg shadow-blue-500/20',
    secondary: 'bg-slate-800/80 text-blue-100 hover:bg-slate-700 focus:ring-slate-500 border border-slate-600/50',
    outline: 'border border-blue-400 text-blue-500 hover:bg-blue-50/10 focus:ring-blue-400',
    ghost: 'bg-transparent hover:bg-slate-800/50 text-blue-400 focus:ring-blue-400'
  };
  
  const sizeStyles = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg'
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
