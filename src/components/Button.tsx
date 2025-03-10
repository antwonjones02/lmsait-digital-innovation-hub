
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none backdrop-blur-sm overflow-hidden group';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 border border-indigo-500/30 shadow-lg shadow-indigo-500/20',
    secondary: 'bg-slate-800/90 text-blue-100 hover:bg-slate-700 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 border border-slate-600/50',
    outline: 'border border-indigo-400 text-indigo-500 hover:bg-indigo-50/10 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2',
    ghost: 'bg-transparent hover:bg-slate-800/50 text-indigo-400 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2'
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
      {/* Subtle glow effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-400/10 to-indigo-400/0 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-in-out"></span>
      
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      
      <span className="relative z-10">{children}</span>
      
      {icon && iconPosition === 'right' && (
        <span className="ml-2 transition-transform group-hover:translate-x-1">{icon}</span>
      )}
    </button>
  );
};

export default Button;
