import React from 'react';

interface BlogIconProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}

export const BlogIcon: React.FC<BlogIconProps> = ({ 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M16.9602 19L16.9602 1L3.96021 0.999999L3.9602 19L16.9602 19ZM17.9602 1C17.9602 0.447715 17.5125 -1.95703e-08 16.9602 -4.37114e-08L3.96021 -6.11959e-07C3.40792 -6.36101e-07 2.96021 0.447715 2.96021 1L2.9602 19C2.9602 19.5523 3.40792 20 3.9602 20L16.9602 20C17.5125 20 17.9602 19.5523 17.9602 19L17.9602 1Z" 
        fill={fill}
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M5.81958 3.44043C5.81958 3.16429 6.04344 2.94043 6.31958 2.94043H14.6008C14.877 2.94043 15.1008 3.16429 15.1008 3.44043C15.1008 3.71657 14.877 3.94043 14.6008 3.94043H6.31958C6.04344 3.94043 5.81958 3.71657 5.81958 3.44043Z" 
        fill={fill}
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M5.81958 5.68945C5.81958 5.41331 6.04344 5.18945 6.31958 5.18945H14.6008C14.877 5.18945 15.1008 5.41331 15.1008 5.68945C15.1008 5.9656 14.877 6.18945 14.6008 6.18945H6.31958C6.04344 6.18945 5.81958 5.9656 5.81958 5.68945Z" 
        fill={fill}
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M5.81958 7.93848C5.81958 7.66233 6.04344 7.43848 6.31958 7.43848H14.6008C14.877 7.43848 15.1008 7.66233 15.1008 7.93848C15.1008 8.21462 14.877 8.43848 14.6008 8.43848H6.31958C6.04344 8.43848 5.81958 8.21462 5.81958 7.93848Z" 
        fill={fill}
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M5.81958 10.1875C5.81958 9.91136 6.04344 9.6875 6.31958 9.6875H11.0433C11.3195 9.6875 11.5433 9.91136 11.5433 10.1875C11.5433 10.4636 11.3195 10.6875 11.0433 10.6875H6.31958C6.04344 10.6875 5.81958 10.4636 5.81958 10.1875Z" 
        fill={fill}
      />
    </svg>
  );
};

export default BlogIcon;

