import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CostGrid from '../components/CostGrid'
import TreePortals from '../components/TreePortals'
import SolutionsHub from '../components/SolutionsHub'
import Pricing from '../components/Pricing'

const ForBusiness = () => {
  return (
    <div className="bg-white text-slate-800">
      <Header />
      <Hero />
      <CostGrid />
      <TreePortals />
      <SolutionsHub />
      <Pricing />
    </div>
  )
}

export default ForBusiness
