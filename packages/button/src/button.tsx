import React from 'react';
import './button.css';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant: Number;
  text: string;
}

export function Button({ variant, text, ...props }: ButtonProps) {
  return (
    <div className="tero-button">
      <button {...props}>{text}</button>
    </div>
  );
}