"use client"

// BeastTrack Fitness Progress Tracker
// Developed by: John Mamanao (Software Developer)
// GitHub: @BeastNectus

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Trophy, Target, Zap, Flame, Star } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      if (scrollY > windowHeight * 0.5) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const stats = [
    { icon: Dumbbell, value: "50K+", label: "BEAST MODE USERS", color: "from-green-400 to-green-600" },
    { icon: Trophy, value: "1M+", label: "GOALS CRUSHED", color: "from-yellow-400 to-orange-500" },
    { icon: Target, value: "98%", label: "SUCCESS RATE", color: "from-blue-400 to-cyan-500" },
    { icon: Flame, value: "24/7", label: "GRIND TIME", color: "from-red-400 to-pink-500" }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-slate-900 dark:via-gray-900 dark:to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/15 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/12 dark:bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/8 dark:bg-purple-500/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        
        <div className="absolute inset-0 opacity-8 dark:opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.3)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,197,94,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/50 dark:from-black/20 dark:via-transparent dark:to-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card text-gray-900 dark:text-white border border-green-500/40 dark:border-green-500/30 hover:border-green-500/60 dark:hover:border-green-500/40 transition-all duration-300 shadow-lg">
              <Star className="w-4 h-4 text-green-500 dark:text-green-400" />
              <span className="text-sm font-semibold tracking-wide">UNLEASH THE BEAST WITHIN</span>
              <Zap className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 leading-[0.9]"
          >
            <span className="block text-gray-900 dark:text-white mb-2 drop-shadow-lg">DOMINATE</span>
            <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              YOUR LIMITS
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Stop making excuses. Track every rep, smash every goal, and become the 
            <span className="text-green-600 dark:text-green-400 font-bold"> strongest version</span> of yourself. 
            Your transformation starts <span className="text-blue-600 dark:text-blue-400 font-bold">NOW</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection("features")}
              className="group fitness-gradient hover:scale-105 text-white font-bold text-lg px-12 py-6 rounded-2xl shadow-xl transform transition-all duration-300 tracking-wide"
            >
              🚀 START CRUSHING IT
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("progress")}
              className="glass-card border-gray-400 dark:border-white/20 text-gray-900 dark:text-white hover:text-black hover:bg-white/95 dark:hover:text-black dark:hover:bg-white/90 font-semibold text-lg px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 tracking-wide shadow-lg"
            >
              💪 SEE THE POWER
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20 shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-gray-700 dark:text-gray-400 font-medium text-xs uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showScrollIndicator ? 1 : 0,
          y: showScrollIndicator ? [0, -8, 0] : 20,
          scale: showScrollIndicator ? 1 : 0.8
        }}
        transition={{ 
          opacity: { duration: 0.3 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.3 }
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-green-600 dark:border-green-400/60 rounded-full flex justify-center backdrop-blur-sm shadow-lg shadow-green-400/20 bg-white/30 dark:bg-black/20">
            <motion.div 
              className="w-1 h-3 bg-green-600 dark:bg-green-400 rounded-full mt-2 shadow-sm shadow-green-400/50"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider backdrop-blur-sm bg-white/20 dark:bg-black/20 px-2 py-1 rounded-full border border-green-500/30">
            Scroll Down
          </div>
        </div>
      </motion.div>
    </section>
  )
}
