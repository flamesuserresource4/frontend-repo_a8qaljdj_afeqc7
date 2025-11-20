import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const nav = [
    { to: '/for-business', label: 'For-Business' },
    { to: '/for-professionals', label: 'For-Professionals' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/features', label: 'Features' },
    { to: '/pricing', label: 'Pricing' },
  ]

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-white/70 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl bg-[radial-gradient(circle_at_30%_30%,#58c8e0_0%,#2848b7_40%,#002c77_100%)] shadow-lg overflow-hidden">
              <div className="absolute inset-0 opacity-60">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {[...Array(4)].map((_,i)=> (
                    <circle key={i} cx="100" cy="100" r={30 + i*18} fill="none" stroke="#58c8e0" strokeOpacity={0.25 - i*0.05}>
                      <animate attributeName="r" values={`${30 + i*18}; ${40 + i*18}; ${30 + i*18}`} dur="4s" repeatCount="indefinite" />
                    </circle>
                  ))}
                </svg>
              </div>
            </div>
            <span className="text-xl font-semibold tracking-tight" style={{color:'#002c77'}}>Sinfonia</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map(item => (
              <NavLink key={item.to} to={item.to} className={({isActive})=>`text-sm transition-colors ${isActive? 'text-[#2848b7]':'text-slate-700 hover:text-slate-900'}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/demo" className="btn-primary ripple-pulse">Request a Demo</Link>
            <Link to="/login" className="btn-ghost">Login</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
