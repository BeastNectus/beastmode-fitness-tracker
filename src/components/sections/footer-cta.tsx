"use client"

// BeastTrack Fitness Progress Tracker
// Developed by: John Mamanao (Software Developer)
// GitHub: @BeastNectus

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Crown, Flame, Dumbbell, Github } from "lucide-react"
import { useState, useEffect } from "react"

export function FooterCTA() {
  const [particles, setParticles] = useState<Array<{
    id: number
    left: number
    top: number
    width: number
    height: number
    duration: number
    delay: number
  }>>([])

  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const generatedParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: Math.random() * 120 + 60,
      height: Math.random() * 120 + 60,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <section id="cta" className="relative pt-20 sm:pt-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 text-gray-900 dark:text-white mb-8 neon-glow"
          >
            <Crown className="h-6 w-6 text-yellow-400 animate-pulse" />
            <span className="font-black text-xl uppercase tracking-wider">
              LIMITED TIME: BECOME LEGENDARY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
          >
            <span className="block text-gray-900 dark:text-white">UNLEASH THE</span>
            <span className="block fitness-gradient-text">BEAST WITHIN</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Join 25,000+ WARRIORS who have OBLITERATED their limits and achieved LEGENDARY status. 
            Your transformation starts NOW!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              className="group fitness-gradient hover:scale-110 text-white px-12 py-8 text-2xl font-black rounded-full shadow-2xl neon-glow transform transition-all duration-300 w-full sm:w-auto uppercase tracking-wider"
            >
              🔥 DOMINATE NOW
              <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-8 text-2xl font-black rounded-full border-4 border-white/30 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 hover:border-green-400 hover:text-green-500 dark:hover:text-green-400 hover:neon-glow transition-all duration-300 w-full sm:w-auto uppercase tracking-wider backdrop-blur-sm"
            >
              WITNESS THE POWER
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16"
          >
            {[
              { feature: "FREE BEAST MODE", description: "No limits, no excuses", icon: "💎" },
              { feature: "INSTANT DOMINATION", description: "Transform in seconds", icon: "⚡" },
              { feature: "WARRIOR SUPPORT", description: "24/7 Beast assistance", icon: "🤖" },
            ].map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="text-center p-8 rounded-3xl glass-card border border-white/20 hover:neon-glow transition-all duration-300 cursor-pointer"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <div className="text-xl font-black mb-3 text-gray-900 dark:text-white uppercase tracking-wider">
                  {item.feature}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide font-bold">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-gray-200 dark:border-white/20 glass-card backdrop-blur-md bg-white/10 dark:bg-black/10 mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col space-y-12">
            
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
              <div className="flex items-center space-x-6 group">
                <div className="relative">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center shadow-xl neon-glow group-hover:scale-110 transition-transform duration-300">
                    <Dumbbell className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full animate-pulse" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-3xl lg:text-4xl font-black fitness-gradient-text uppercase tracking-wider leading-tight">
                    BEASTMODE
                  </span>
                  <div className="text-sm lg:text-base text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest opacity-80">
                    DOMINATE YOUR LIMITS
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-8 lg:gap-12 text-base text-gray-600 dark:text-gray-400">
                <a href="#" className="hover:text-green-500 dark:hover:text-green-400 transition-colors font-bold uppercase tracking-wider hover:neon-glow py-2 hover:scale-105 transform duration-300">PRIVACY</a>
                <a href="#" className="hover:text-green-500 dark:hover:text-green-400 transition-colors font-bold uppercase tracking-wider hover:neon-glow py-2 hover:scale-105 transform duration-300">TERMS</a>
                <a href="#" className="hover:text-green-500 dark:hover:text-green-400 transition-colors font-bold uppercase tracking-wider hover:neon-glow py-2 hover:scale-105 transform duration-300">CONTACT</a>
                <a href="#" className="hover:text-green-500 dark:hover:text-green-400 transition-colors font-bold uppercase tracking-wider hover:neon-glow py-2 hover:scale-105 transform duration-300">SUPPORT</a>
              </div>
            </div>

            <div className="border-t border-gray-300 dark:border-white/20 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                <div className="text-center lg:text-left">
                  <div className="text-base text-gray-600 dark:text-gray-400 font-bold uppercase tracking-wider mb-2">
                    © {currentYear} BEASTMODE. DEVELOPED BY JOHN MAMANAO
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500 dark:text-gray-500 font-medium">
                    <Github className="w-4 h-4" />
                    <span>@BeastNectus</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-red-500 dark:text-red-400 animate-pulse" />
                  <span className="text-lg text-red-500 dark:text-red-400 font-black uppercase tracking-wider">
                    FORGED FOR LEGENDS
                  </span>
                  <Flame className="w-5 h-5 text-red-500 dark:text-red-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  )
}
