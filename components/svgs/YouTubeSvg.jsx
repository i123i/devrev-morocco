import * as React from 'react';

function YouTubeSvg(props) {
  return (
    <svg
      width={60}
      height={60}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 721"
      {...props}
    >
      <path className="yt-p" fill="#FFF" d="M407 493l276-143-276-144v287z" />
      <path
        opacity={0.12}
        fill="#420000"
        d="M407 206l242 161.6 34-17.6-276-144z"
      />
      <path
        fill="#d9264d"
        className="yt-b"
        d="M1013 156.3s-10-70.4-40.6-101.4C933.6 14.2 890 14 870.1 11.6 727.1 1.3 512.7 1.3 512.7 1.3h-.4s-214.4 0-357.4 10.3C135 14 91.4 14.2 52.6 54.9 22 85.9 12 156.3 12 156.3S1.8 238.9 1.8 321.6v77.5C1.8 481.8 12 564.4 12 564.4s10 70.4 40.6 101.4c38.9 40.7 89.9 39.4 112.6 43.7 81.7 7.8 347.3 10.3 347.3 10.3s214.6-.3 357.6-10.7c20-2.4 63.5-2.6 102.3-43.3 30.6-31 40.6-101.4 40.6-101.4s10.2-82.7 10.2-165.3v-77.5c0-82.7-10.2-165.3-10.2-165.3zM407 493V206l276 144-276 143z"
      />
    </svg>
  );
}

export default YouTubeSvg;
