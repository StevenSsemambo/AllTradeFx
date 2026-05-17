import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, keyof ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/20',
      secondary: 'bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 shadow-lg shadow-brand-secondary/20',
      outline: 'border-2 border-brand-primary bg-transparent text-brand-primary hover:bg-brand-primary hover:text-white',
      ghost: 'bg-transparent text-brand-primary hover:bg-brand-primary/10',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base font-medium',
      lg: 'px-8 py-4 text-lg font-bold',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...(props as any)}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
