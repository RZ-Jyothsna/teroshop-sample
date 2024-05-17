import React from 'react';
import './input.css';

export interface InputProps extends React.ComponentProps<'input'> {
  variant: Number
}

export function Input({ variant, ...props }: InputProps) {
  return (
    <div className='tero-input'>
      <input {...props} />
    </div>
  )
}