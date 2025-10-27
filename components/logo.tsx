interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 28, height = 28, className = "" }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="GLITCH Logo"
    >
      {/* Gornja linija (cyan - glitch-accent) */}
      <path
        d="M3 6h7l-1 3h6l-2 6h8"
        stroke="#00e5ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Donja linija (purple - glitch-primary) */}
      <path
        d="M2 18h8l2-6H6l2-6"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}