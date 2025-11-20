import React from 'react'
import { Timer, Wallet } from 'lucide-react'

const Card = ({ title, color, icon: Icon, children }) => (
  <div className="relative rounded-2xl p-6 glass group overflow-hidden">
    <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full" style={{background: `radial-gradient(circle, ${color}55, transparent 60%)`}}/>
    <div className="flex items-center gap-3 mb-2">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background: `linear-gradient(135deg, ${color}, ${color}aa)`}}>
        <Icon className="text-white w-5 h-5" />
      </div>
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="text-slate-600">{children}</p>
  </div>
)

const CostGrid = () => {
  return (
    <section id="grid" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <h3 className="text-2xl font-semibold" style={{color:'#002c77'}}>The Real Cost of Using Too Many Tools</h3>
          <p className="text-slate-600">Fragmented systems create hidden costs. Consolidate with Sinfonia and reclaim clarity.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card title="Lost Time" color="#e54d9b" icon={Timer}>
            Context switching drains efficiency. Teams spend hours moving data across tools.
          </Card>
          <Card title="Wasted Money" color="#F9a84f" icon={Wallet}>
            Overlapping licenses and manual rework inflate operational spend.
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CostGrid
