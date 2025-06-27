"use client"

import { useEffect, useState } from "react"

interface SimplePreloaderProps {
  isLoading: boolean
  onComplete?: () => void
}

export default function SimplePreloader({ isLoading, onComplete }: SimplePreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (!isLoading) return

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setFadeOut(true)
          if (onComplete) {
            setTimeout(onComplete, 500)
          }
          return 100
        }
        return prev + 3
      })
    }, 60)

    return () => clearInterval(timer)
  }, [isLoading, onComplete])

  if (!isLoading) return null

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(21, 145, 234) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo with subtle animation */}
        <div className="mb-12 transform transition-all duration-1000 ease-out">
          <div className="flex items-center justify-center space-x-2">
            {/* "100" */}
            <span 
              className="text-5xl md:text-6xl font-black text-black tracking-tight"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '-0.02em'
              }}
            >
              100
            </span>
            
            {/* "Networks" */}
            <span 
              className="text-5xl md:text-6xl font-light tracking-wide"
              style={{ 
                fontFamily: 'Lora, serif',
                color: 'rgb(21, 145, 234)',
                fontWeight: '300'
              }}
            >
              Networks
            </span>
          </div>
        </div>

        {/* Minimalist Loading Indicator */}
        <div className="w-80 mx-auto">
          {/* Subtle progress text */}
          <div className="mb-4">
            <span 
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: 'rgb(21, 145, 234)', opacity: 0.6 }}
            >
              Loading
            </span>
          </div>

          {/* Ultra-minimal progress bar */}
          <div className="relative">
            <div className="h-[1px] bg-gray-200 w-full">
              <div 
                className="h-full transition-all duration-300 ease-out"
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, rgb(21, 145, 234), rgba(21, 145, 234, 0.6))',
                  boxShadow: `0 0 10px rgba(21, 145, 234, 0.3)`
                }}
              />
            </div>
            
            {/* Subtle glow effect */}
            <div 
              className="absolute top-0 h-[1px] transition-all duration-300 ease-out opacity-50"
              style={{ 
                width: `${progress}%`,
                background: 'rgba(21, 145, 234, 0.2)',
                filter: 'blur(2px)'
              }}
            />
          </div>

          {/* Progress percentage - very subtle */}
          <div className="mt-6">
            <span 
              className="text-xs font-light tabular-nums"
              style={{ color: 'rgb(21, 145, 234)', opacity: 0.4 }}
            >
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Breathing animation dot */}
        <div className="mt-8 flex justify-center">
          <div 
            className="w-1 h-1 rounded-full"
            style={{
              backgroundColor: 'rgb(21, 145, 234)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              opacity: 0.6
            }}
          />
        </div>
      </div>
    </div>
  )
} 