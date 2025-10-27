'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [barPositions, setBarPositions] = useState([
    { y: 0, speed: 0.5, baseHeight: 100 },
    { y: 10, speed: 0.7, baseHeight: 140 },
    { y: 20, speed: 0.6, baseHeight: 110 },
    { y: 30, speed: 0.8, baseHeight: 130 }
  ])

  // Continuous bar movement with boundary constraints
  useEffect(() => {
    const interval = setInterval(() => {
      setBarPositions(prev =>
        prev.map(bar => {
          let newY = bar.y + bar.speed
          // Keep bars within a safe range (between -30px and 30px)
          if (newY > 30) newY = -30
          return {
            ...bar,
            y: newY
          }
        })
      )
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-[#024038] to-[#033D34] flex flex-col items-center justify-center text-center overflow-hidden px-4"
    >
      {/* Bars (Logo Style) - matching the alternating height pattern */}
      <div className="flex items-end space-x-4 mb-16">
        {barPositions.map((bar, i) => (
          <div
            key={i}
            className="rounded-sm transition-all duration-100 ease-linear"
            style={{
              width: '26px',
              height: `${bar.baseHeight}px`,
              transform: `translateY(${bar.y}px)`,
              backgroundColor:
                i === 0
                  ? '#1E88E5'
                  : i === 1
                  ? '#42A5F5'
                  : i === 2
                  ? '#4FC3F7'
                  : '#81D4FA'
            }}
          />
        ))}
      </div>

      {/* UPVEXO Title */}
      <h1
        className="text-6xl md:text-8xl font-bold text-gray-100 mb-6"
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          letterSpacing: '0.35em',
          paddingLeft: '0.35em' // Compensate for letter-spacing
        }}
      >
        UPVEXO
      </h1>

      {/* Tagline */}
      <p
        className="text-base md:text-xl text-gray-300"
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          letterSpacing: '0.25em',
          paddingLeft: '0.25em' // Compensate for letter-spacing
        }}
      >
        ELEVATE BEYOND LIMITS
      </p>
    </section>
  )
}