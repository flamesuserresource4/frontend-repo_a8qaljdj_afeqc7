import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CostGrid from './components/CostGrid'
import TreePortals from './components/TreePortals'
import SolutionsHub from './components/SolutionsHub'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="bg-white text-slate-800">
      <Header />
      <Hero />
      <CostGrid />
      <TreePortals />
      <SolutionsHub />
      <Pricing />
      <footer className="py-12 bg-[#002c77] text-white mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white/80">© 2025 Sinfonia. All rights reserved.</div>
            <div className="flex items-center gap-6 text-white/80">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
