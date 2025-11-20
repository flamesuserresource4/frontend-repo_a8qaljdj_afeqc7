import React from 'react'

const RippleBackground = ({ className = '' }) => {
  return (
    <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} viewBox="0 0 1200 800" aria-hidden>
      <defs>
        <radialGradient id="rg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(88,200,224,0.25)" />
          <stop offset="100%" stopColor="rgba(88,200,224,0)" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#rg)" />
      {/* Concentric animated circles */}
      {[...Array(6)].map((_, i) => (
        <circle key={i} cx="600" cy="400" r={40 + i * 40} fill="none" stroke="#58c8e0" strokeOpacity={0.25 - i * 0.03} strokeWidth="1.5">
          <animate attributeName="r" from={40 + i * 40} to={260 + i * 40} dur={`${6 + i}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.35" to="0" dur={`${6 + i}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  )
}

export default RippleBackground
