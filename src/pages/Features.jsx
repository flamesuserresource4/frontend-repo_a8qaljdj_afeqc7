import React from 'react'
import Header from '../components/Header'

const Features = () => {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold mb-6" style={{color:'#002c77'}}>Features</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_,i)=> (
            <div key={i} className="rounded-2xl p-6 glass">
              <div className="text-slate-600">Modern bento-style feature tile {i+1} with glassmorphism and ripple backdrop.</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
