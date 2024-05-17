import React from 'react';
import './button.css';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant: Number
}

export function Button({ variant, ...props }: ButtonProps) {
  return (
    <div className="tero-button">
      <button {...props} />
    </div>
  );
}