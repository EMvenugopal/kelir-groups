export default function Logo({ width = 150, light = false }) {
  return (
    <svg
      width={width}
      height={width * 0.227}
      viewBox="0 0 150 34"
      role="img"
      aria-label="Kelir Groups"
    >
      <defs>
        <linearGradient id="kg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a66c2" />
          <stop offset="1" stopColor="#6aa9e9" />
        </linearGradient>
      </defs>
      <rect x="0" y="2" width="30" height="30" rx="8" fill="url(#kg)" />
      <path
        d="M11 8 V26 M11 17 L20 8 M11 17 L20 26"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="38" y="23" fontFamily="-apple-system, Segoe UI, Arial, sans-serif" fontSize="18" fontWeight="800" fill={light ? '#ffffff' : '#1d2226'}>
        Kelir<tspan fill={light ? '#7fb4ee' : '#0a66c2'}> Groups</tspan>
      </text>
    </svg>
  )
}
