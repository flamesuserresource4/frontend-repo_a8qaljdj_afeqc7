import React from 'react'

const ProPage = () => {
  return (
    <div className="min-h-screen brand-gradient text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-10">
          <h1 className="text-4xl sm:text-5xl font-semibold">Sinfonia Pro</h1>
          <p className="text-white/85 mt-4">Built for accountants, auditors, and consultants who demand precision and premium performance.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold mb-3">The Broken Data Hand-off</h3>
            <p className="text-white/80">Email chains and CSV attachments break context and integrity. Replace it with a secure, continuous data pipe directly from the client workspace to your practice tools.</p>
            <div className="mt-6">
              <button className="btn-gold">Join Early Adopter Program</button>
            </div>
          </div>
          <div className="relative h-72">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/20"></div>
              <div className="w-40 h-40 rounded-full bg-white/10 absolute"></div>
              <div className="w-56 h-56 rounded-full bg-white/5 absolute"></div>
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center text-white/80">Email chain → ✉️ ✉️ ✉️ ———— ✂️ ———— Direct Pipe → ⭕ Sinfonia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProPage
