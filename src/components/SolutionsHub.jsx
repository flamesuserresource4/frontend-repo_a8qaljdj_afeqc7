import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

const previews = {
  hr: '/previews/hr.png',
  finance: '/previews/finance.png',
  sales: '/previews/sales.png',
  ops: '/previews/ops.png',
}

const SolutionsHub = () => {
  const [tab, setTab] = useState('hr')

  return (
    <section id="solutions" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-semibold" style={{color:'#002c77'}}>Solutions Hub</h3>
        </div>

        <div className="glass rounded-2xl p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <button onClick={()=>setTab('hr')} className={`px-4 py-2 rounded-lg text-sm ${tab==='hr'?'bg-[#2848b7] text-white':'bg-white text-slate-700 border border-slate-200'}`}>Human Resources</button>
            <button onClick={()=>setTab('finance')} className={`px-4 py-2 rounded-lg text-sm ${tab==='finance'?'bg-[#2848b7] text-white':'bg-white text-slate-700 border border-slate-200'}`}>Finance & Tax</button>
            <button onClick={()=>setTab('sales')} className={`px-4 py-2 rounded-lg text-sm ${tab==='sales'?'bg-[#2848b7] text-white':'bg-white text-slate-700 border border-slate-200'}`}>Sales</button>
            <button onClick={()=>setTab('ops')} className={`px-4 py-2 rounded-lg text-sm ${tab==='ops'?'bg-[#2848b7] text-white':'bg-white text-slate-700 border border-slate-200'}`}>Ops</button>
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
            <div className="aspect-[16/9] w-full flex items-center justify-center text-slate-500">
              {/* Placeholder preview panes; would be replaced with real module screenshots */}
              <div className="text-center p-10">
                <div className="text-sm uppercase tracking-wide mb-2">Dashboard Preview</div>
                <div className="text-2xl font-semibold" style={{color:'#2848b7'}}>
                  {tab === 'hr' && 'Payroll & Time Tracking'}
                  {tab === 'finance' && 'Cash Flow & Taxes'}
                  {tab === 'sales' && 'Pipeline & Quotes'}
                  {tab === 'ops' && 'Projects & Inventory'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsHub
