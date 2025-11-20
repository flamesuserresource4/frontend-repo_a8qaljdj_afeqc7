import React, { useState } from 'react'
import { Check } from 'lucide-react'

const plansSME = [
  { name: 'Startup', price: '€0', features: ['Up to 3 users','Invoicing','Basic HR'] },
  { name: 'Starter', price: '€39', features: ['Up to 10 users','Payroll Lite','Bank feeds'] },
  { name: 'Growth', price: '€99', features: ['Unlimited users','Advanced HR','Cash flow'] },
  { name: 'Enterprise', price: 'Custom', features: ['SSO','Dedicated support','Custom SLAs'] },
]

const Plan = ({ name, price, features, highlight }) => (
  <div className={`rounded-2xl p-6 border bg-white ${highlight? 'shadow-xl': 'shadow-sm'} relative`} style={{borderColor: highlight? '#2848b7' : 'rgba(226,232,240,1)'}}>
    {highlight && <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full" style={{background:'#2848b7', color:'#fff'}}>Most Popular</div>}
    <div className="text-slate-900 font-semibold text-lg">{name}</div>
    <div className="text-3xl font-semibold mt-1" style={{color:'#2848b7'}}>{price}<span className="text-sm text-slate-500 font-normal">/mo</span></div>
    <ul className="mt-4 space-y-2">
      {features.map(f=> (
        <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
          <Check className="w-4 h-4 mt-0.5" color="#58c8e0" /> {f}
        </li>
      ))}
    </ul>
    <div className="mt-6">
      <button className="btn-primary w-full">Choose</button>
    </div>
  </div>
)

const Pricing = () => {
  const [mode, setMode] = useState('sme')

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-semibold" style={{color:'#002c77'}}>Pricing</h3>
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full p-1">
            <button onClick={()=>setMode('sme')} className={`px-4 py-1.5 rounded-full text-sm ${mode==='sme'?'bg-[#2848b7] text-white':'text-slate-700'}`}>SME</button>
            <button onClick={()=>setMode('pro')} className={`px-4 py-1.5 rounded-full text-sm ${mode==='pro'?'bg-[#2848b7] text-white':'text-slate-700'}`}>Professional</button>
          </div>
        </div>

        {mode==='sme' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plansSME.map(p => (
              <Plan key={p.name} {...p} highlight={p.name==='Growth'} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Plan name="Pro Team" price="€149" features={['Unlimited clients','Consolidation tools','Priority support']} />
            <Plan name="Pro Enterprise" price="Custom" features={['SSO','Onboarding','Dedicated manager']} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Pricing
