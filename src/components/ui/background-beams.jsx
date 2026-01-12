import React from 'react'

export function BackgroundBeams() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-blue-900/20 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-purple-900/20 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute -top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full opacity-20 -translate-x-1/2"></div>
    </div>
  )
}