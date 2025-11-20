import React, { useState } from 'react'

const Branch = ({ active }) => (
  <div className={`h-1 rounded-full transition-all ${active? 'bg-[#58c8e0] shadow-[0_0_0_4px_rgba(88,200,224,0.15)]':'bg-slate-200'}`} />
)

const NodeCard = ({ title, subtitle, active, onMouseEnter, onMouseLeave }) => (
  <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`rounded-2xl p-5 border transition-all ${active? 'glass shadow-xl border-[#58c8e0]/40':'bg-white border-slate-200 hover:shadow-lg'}`}>
    <h4 className="font-semibold mb-1" style={{color:'#002c77'}}>{title}</h4>
    <p className="text-slate-600 text-sm">{subtitle}</p>
  </div>
)

const TreePortals = () => {
  const [active, setActive] = useState('owner')

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h3 className="text-3xl font-semibold mb-2" style={{color:'#002c77'}}>Three Portals. One Core.</h3>
          <p className="text-slate-600">A single source of truth connects leadership, advisors, and employees with the right controls.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] items-center gap-6">
          <div className="space-y-6">
            <NodeCard title="Business Owner" subtitle="Command Center" active={active==='owner'} onMouseEnter={()=>setActive('owner')} onMouseLeave={()=>setActive('')} />
            <Branch active={active==='owner'} />
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <div className="w-28 h-28 rounded-2xl ripple-pulse" style={{background:'radial-gradient(circle at 30% 30%, #58c8e0 0%, #2848b7 45%, #002c77 100%)'}}></div>
              <div className="mt-3 text-sm text-slate-600">Sinfonia Core</div>
            </div>
          </div>

          <div className="space-y-6">
            <Branch active={active==='pro'} />
            <NodeCard title="Professional Advisors" subtitle="The Bridge" active={active==='pro'} onMouseEnter={()=>setActive('pro')} onMouseLeave={()=>setActive('')} />
            <Branch active={active==='emp'} />
            <NodeCard title="Employees" subtitle="Self-Service" active={active==='emp'} onMouseEnter={()=>setActive('emp')} onMouseLeave={()=>setActive('')} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TreePortals
