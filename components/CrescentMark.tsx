export default function CrescentMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Crescent */}
      <path
        d="M31 8C24 8 18.5 13.8 18.5 21C18.5 28.2 24 34 31 34C27.6 36.7 23.2 38 18.5 38C8.8 38 1 30.2 1 20.5C1 10.8 8.8 3 18.5 3C23.2 3 27.6 4.3 31 8Z"
        fill="currentColor"
      />
      {/* Palmetto trunk + fronds, simplified monoline */}
      <path
        d="M37 44V30"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M37 30C37 30 30 27 28 21M37 30C37 30 44 27 46 21M37 30C37 30 32 24 31 18M37 30C37 30 42 24 43 18M37 30C37 30 37 22 34 16M37 30C37 30 37 22 40 16M37 30C37 30 37 21 37 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
