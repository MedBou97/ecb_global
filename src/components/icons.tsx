import { type SVGProps } from 'react';

export function EcbLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="250"
      height="100"
      viewBox="0 0 250 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        {/* Symbol */}
        <path
          d="M54.4,94.8h-9.2V5.2h9.2V94.8z M31.5,5.2v89.6H22.3V5.2H31.5z M45.2,52.8h-4.6v-5.5h4.6V52.8z M45.2,50h-4.6V44.5h4.6V50z M40.6,47.2h-1.5v-1.5h1.5V47.2z M43,49.6h-1.9v-1.9h1.9V49.6z M43,47.2h-1.9v-1.9h1.9V47.2z M43,44.7h-1.9v-1.9h1.9V44.7z M40.6,49.6h-1.5v-1.9h1.5V49.6z M38.2,47.2h-1.5v-1.5h1.5V47.2z M38.2,44.7h-1.5v-1.9h1.5V44.7z M40.6,44.7h-1.5v-1.9h1.5V44.7z M38.2,49.6h-1.5v-1.9h1.5V49.6z M35.8,47.2h-1.9v-1.5h1.9V47.2z M35.8,49.6h-1.9v-1.9h1.9V49.6z M35.8,44.7h-1.9v-1.9h1.9V44.7z M33.4,47.2h-1.9v-1.5h1.9V47.2z M33.4,44.7h-1.9v-1.9h1.9V44.7z M33.4,49.6h-1.9v-1.9h1.9V49.6z M45.2,41.7h-4.6v-5.5h4.6V41.7z M45.2,33.4h-4.6V28h4.6V33.4z M45.2,25.2h-4.6V19.7h4.6V25.2z M45.2,16.9h-4.6V11.4h46V16.9z M22.3,11.4v5.5H18.2V11.4H22.3z M18.2,19.7v5.5H13.6v-5.5H18.2z M13.6,28v5.5H9v-5.5H13.6z M9,36.2v5.5H4.4v-5.5H9z M4.4,44.5v5.5H0v-5.5H4.4z M0,52.8v5.5H4.4v-5.5H0z M4.4,61.1v5.5H9v-5.5H4.4z M9,69.4v5.5h13.6v-5.5H9z M13.6,77.7v5.5h18.2v-5.5H13.6z M18.2,85.9v5.5H22.3v-5.5H18.2z M22.3,89.3v5.5h22.9v-5.5H22.3z M22.3,85.9h22.9v-5.5H22.3V85.9z M22.3,77.7h9.2v-5.5h-9.2V77.7z M22.3,69.4h9.2v-5.5h-9.2V69.4z M22.3,61.1h9.2v-5.5h-9.2V61.1z M31.5,52.8V44.5H22.3v8.3H31.5z"
          fill="hsl(var(--primary))"
        />
        {/* Text */}
        <text
          x="75"
          y="60"
          fontFamily="serif"
          fontSize="50"
          fill="hsl(var(--accent))"
          fontWeight="normal"
        >
          ECB
        </text>
        <text
          x="75"
          y="85"
          fontFamily="serif"
          fontSize="20"
          fill="hsl(var(--accent))"
          letterSpacing="10"
        >
          GLOBAL
        </text>
      </g>
    </svg>
  );
}
