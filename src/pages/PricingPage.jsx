import React from 'react'
import Header from '../components/Header'
import Pricing from '../components/Pricing'

const PricingPage = () => {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
      <Header />
      <div className="pt-10">
        <Pricing />
      </div>
    </div>
  )
}

export default PricingPage
