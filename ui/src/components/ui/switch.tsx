import React from 'react';

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({ checked, onCheckedChange, className = '', disabled = false }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      onClick={() => {
        if (disabled) return;
        onCheckedChange(!checked);
      }}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 border
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${checked ? 'bg-green-500 border-green-500' : 'bg-gray-300 border-gray-400'} ${className}`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full border transition-transform duration-200
          ${checked ? 'translate-x-5 border-green-500 bg-white' : 'translate-x-0 border-gray-400 bg-gray-200'}`}
        style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
      />
    </button>
  );
};
  