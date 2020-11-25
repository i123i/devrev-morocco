import * as React from 'react';

function TwitchSvg(props) {
  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 256 268"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path
        d="M17.458 0L0 46.556v186.201h63.983v34.934h34.931l34.898-34.934h52.36L256 162.954V0H17.458zm23.259 23.263H232.73v128.029l-40.739 40.741H128L93.113 226.92v-34.886H40.717V23.263zm64.008 116.405H128V69.844h-23.275v69.824zm63.997 0h23.27V69.844h-23.27v69.824z"
        fill="#5A3E85"
      />
    </svg>
  );
}

export default TwitchSvg;
