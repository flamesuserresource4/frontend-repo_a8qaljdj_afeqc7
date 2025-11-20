import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const icons = [
  '📄','📑','📊','📁','📌','📎','✉️','🧾','📥','📤'
]

const Hero = () => {
  const controls = useAnimation()

  useEffect(() => {
    const run = async () => {
      await controls.start(i => ({
        x: (Math.random() - 0.5) * 280,
        y: (Math.random() - 0.5) * 160,
        rotate: Math.random() * 40 - 20,
        transition: { duration: 0.9, ease: 'easeOut' }
      }))
      controls.start(i => ({ x: 0, y: 0, rotate: 0, scale: 0.9 + Math.random()*0.2, transition: { duration: 1.2, ease: 'easeInOut' } }))
    }
    run()
  }, [controls])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 brand-gradient opacity-[.92]"></div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          {[...Array(8)].map((_,i)=> (
            <circle key={i} cx="600" cy="300" r={60 + i*50} fill="none" stroke="#58c8e0" strokeOpacity={0.18 - i*0.02} />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              <span className="serif-elegant">Sinfonia</span><br />
              Don't make things complicated! SME administration made easy.
            </h1>
            <p className="text-white/85 text-lg mb-8">One hub to orchestrate HR, Finance, Sales and Operations. A premium, fluid experience that turns chaos into elegant order.</p>
            <div className="flex items-center gap-3">
              <a href="#solutions" className="btn-primary ripple-pulse">Explore Solutions</a>
              <a href="#grid" className="btn-ghost">See why it matters</a>
            </div>
          </div>

          <div className="relative h-[360px] sm:h-[420px] lg:h-[460px]">
            {/* Chaos to Hub animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(10)].map((_,i)=> (
                <motion.div key={i} custom={i} animate={controls} className="absolute text-3xl select-none" style={{filter:'drop-shadow(0 6px 18px rgba(0,0,0,.25))'}}>
                  {icons[i % icons.length]}
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-56 h-56 rounded-3xl glass-dark border-white/20">
                <div className="absolute -inset-6 rounded-[28px]" style={{boxShadow:'0 0 0 1.5px rgba(88,200,224,.35) inset'}}></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 to-white/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,#58c8e0_0%,#2848b7_40%,#002c77_100%)] ripple-pulse"></div>
                </div>
                <div className="absolute -inset-12 opacity-50" aria-hidden>
                  <svg viewBox="0 0 300 300" className="w-full h-full">
                    {[...Array(6)].map((_,i)=> (
                      <circle key={i} cx="150" cy="150" r={40 + i*28} fill="none" stroke="#58c8e0" strokeOpacity={0.25 - i*0.03} />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
