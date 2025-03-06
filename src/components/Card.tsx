
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div className={cn(
      'group p-6 rounded-xl transition-all duration-300 bg-white border border-border hover:shadow-lg',
      className
    )}>
      {icon && (
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary mb-5">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default Card;
