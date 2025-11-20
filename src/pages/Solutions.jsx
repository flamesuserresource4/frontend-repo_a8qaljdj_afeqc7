import React from 'react'
import Header from '../components/Header'
import SolutionsHub from '../components/SolutionsHub'

const Solutions = () => {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
      <Header />
      <div className="pt-10">
        <SolutionsHub />
      </div>
    </div>
  )
}

export default Solutions
