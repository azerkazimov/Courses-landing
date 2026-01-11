import React from 'react';

interface MailIconProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}

export const MailIcon: React.FC<MailIconProps> = ({ 
  width = 21, 
  height = 20, 
  className = '',
  fill = 'currentColor'
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 21 20" 
      fill={fill}
      className={className}
    >
      <g clipPath="url(#clip0_163_707)">
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M19.4602 4.18182H1.46021V15.8182L19.4602 15.8182V4.18182ZM1.46021 3.18182C0.90792 3.18182 0.460205 3.62954 0.460205 4.18182V15.8182C0.460205 16.3705 0.907921 16.8182 1.46021 16.8182H19.4602C20.0125 16.8182 20.4602 16.3705 20.4602 15.8182V4.18182C20.4602 3.62954 20.0125 3.18182 19.4602 3.18182H1.46021Z" 
          fill={fill}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M1.13825 4.15341C1.3222 3.94745 1.65044 3.91475 1.8714 4.08037L10.7933 10.7676C11.0142 10.9332 11.0442 11.2344 10.8603 11.4404C10.6763 11.6463 10.3481 11.679 10.1271 11.5134L1.20528 4.82621C0.984314 4.66059 0.954305 4.35936 1.13825 4.15341Z" 
          fill={fill}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M19.7823 4.15341C19.5983 3.94745 19.2701 3.91475 19.0491 4.08037L10.1273 10.7676C9.90631 10.9332 9.8763 11.2344 10.0602 11.4404C10.2442 11.6463 10.5724 11.679 10.7934 11.5134L19.7153 4.82621C19.9362 4.66059 19.9662 4.35936 19.7823 4.15341Z" 
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_163_707">
          <rect width="20" height="20" fill="white" transform="translate(0.460205)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MailIcon;

