import React from 'react';

interface BootcampIconProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}

export const BootcampIcon: React.FC<BootcampIconProps> = ({ 
  width = 20, 
  height = 20, 
  className = '',
  fill = '#e60a5a'
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 20 20" 
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_163_639)">
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M19 3.03125L1 3.03125V13.3333L19 13.3333V3.03125ZM1 2.03125C0.447715 2.03125 0 2.47896 0 3.03125V13.3333C0 13.8856 0.447716 14.3333 1 14.3333H19C19.5523 14.3333 20 13.8856 20 13.3333V3.03125C20 2.47897 19.5523 2.03125 19 2.03125H1Z" 
          fill={fill}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M11.7988 13.3685V17.9938L13.2068 16.66C13.5925 16.2947 14.1966 16.2947 14.5823 16.66L15.9902 17.9938V13.3685H16.9902V17.9938C16.9902 18.8718 15.9398 19.3236 15.3025 18.7198L13.8945 17.386L12.4866 18.7198C11.8492 19.3236 10.7988 18.8718 10.7988 17.9938V13.3685H11.7988Z" 
          fill={fill}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M2.80859 6.78711C2.80859 6.51097 3.03245 6.28711 3.30859 6.28711H16.6914C16.9675 6.28711 17.1914 6.51097 17.1914 6.78711C17.1914 7.06325 16.9675 7.28711 16.6914 7.28711H3.30859C3.03245 7.28711 2.80859 7.06325 2.80859 6.78711Z" 
          fill={fill}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M6.10547 9.5C6.10547 9.22386 6.32933 9 6.60547 9H13.3945C13.6707 9 13.8945 9.22386 13.8945 9.5C13.8945 9.77614 13.6707 10 13.3945 10H6.60547C6.32933 10 6.10547 9.77614 6.10547 9.5Z" 
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_163_639">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BootcampIcon;

