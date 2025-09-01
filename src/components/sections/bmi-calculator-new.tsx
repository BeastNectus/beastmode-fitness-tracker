"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calculator, Target, Zap, Trophy } from "lucide-react"

export function BMICalculator() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState("")

  const calculateBMI = () => {
    const heightInM = parseFloat(height) / 100
    const weightInKg = parseFloat(weight)
    
    if (heightInM > 0 && weightInKg > 0) {
      const calculatedBMI = weightInKg / (heightInM * heightInM)
      setBmi(parseFloat(calculatedBMI.toFixed(1)))
      
      // Determine BMI category with BEAST MODE language
      if (calculatedBMI < 18.5) {
        setCategory("BULK PHASE READY")
      } else if (calculatedBMI < 25) {
        setCategory("BEAST MODE ACTIVATED")
      } else if (calculatedBMI < 30) {
        setCategory("CUT PHASE TARGET")
      } else {
        setCategory("TRANSFORMATION TIME")
      }
    }
  }

  const getBMIColor = () => {
    if (!bmi) return "text-gray-400"
    if (bmi < 18.5) return "text-blue-400"
    if (bmi < 25) return "text-green-400"
    if (bmi < 30) return "text-yellow-400"
    return "text-red-400"
  }

  return (
    <section id="bmi-calculator" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 text-white mb-8"
          >
            <Calculator className="w-5 h-5 text-green-400 animate-pulse" />
            <span className="font-bold uppercase tracking-wide">BODY ANALYSIS ENGINE</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="block">CALCULATE</span>
            <span className="block fitness-gradient-text">YOUR POWER</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover your current body stats and unlock your transformation potential with our BEAST MODE BMI calculator
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-3xl p-8 lg:p-12 neon-glow">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center neon-glow">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wider">BEAST CALCULATOR</h3>
                  <p className="text-gray-400 font-medium">Enter your stats to dominate</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-400" />
                      HEIGHT (CM)
                    </label>
                    <Input
                      type="number"
                      placeholder="180"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="glass-card border-green-500/30 text-white text-xl py-6 rounded-2xl placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400 bg-transparent"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-400" />
                      WEIGHT (KG)
                    </label>
                    <Input
                      type="number"
                      placeholder="80"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="glass-card border-blue-500/30 text-white text-xl py-6 rounded-2xl placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-400 bg-transparent"
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={calculateBMI} 
                  className="w-full fitness-gradient hover:scale-105 text-white font-black py-8 text-xl rounded-3xl shadow-2xl neon-glow transform transition-all duration-300 uppercase tracking-wider"
                  disabled={!height || !weight}
                >
                  🔥 CALCULATE BEAST STATS
                </Button>

                {bmi && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card rounded-3xl p-8 text-center border border-green-500/30 neon-glow pulse-glow"
                  >
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Trophy className="w-6 h-6 text-yellow-400" />
                      <span className="text-sm font-bold text-yellow-400 uppercase tracking-wider">YOUR RESULT</span>
                    </div>
                    
                    <div className={`text-6xl lg:text-7xl font-black mb-4 fitness-gradient-text`}>
                      {bmi}
                    </div>
                    <div className={`text-2xl lg:text-3xl font-black mb-2 ${getBMIColor()} uppercase tracking-wider`}>
                      {category}
                    </div>
                    <div className="text-gray-400 font-medium uppercase tracking-wide">
                      BMI CLASSIFICATION
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* BMI Categories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-3xl p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center neon-glow">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wider">BEAST LEVELS</h3>
                  <p className="text-gray-400 font-medium">Find your warrior class</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { range: "Below 18.5", category: "BULK PHASE READY", desc: "Time to build mass", color: "from-blue-400 to-blue-600", icon: "💪" },
                  { range: "18.5 - 24.9", category: "BEAST MODE ACTIVATED", desc: "Perfect warrior zone", color: "from-green-400 to-green-600", icon: "🔥" },
                  { range: "25.0 - 29.9", category: "CUT PHASE TARGET", desc: "Shredding season", color: "from-yellow-400 to-orange-500", icon: "⚡" },
                  { range: "30.0+", category: "TRANSFORMATION TIME", desc: "Your journey starts", color: "from-red-400 to-red-600", icon: "🚀" },
                ].map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`glass-card rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                      category === item.category ? 'border-green-400 neon-glow scale-105' : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-xl`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-black text-white text-lg uppercase tracking-wider">
                            {item.category}
                          </div>
                          <div className="text-gray-400 text-sm font-medium">
                            BMI {item.range} • {item.desc}
                          </div>
                        </div>
                      </div>
                      {category === item.category && (
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-sm font-bold text-green-400 uppercase">ACTIVE</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                <div className="glass-card rounded-2xl p-6 border border-yellow-500/30 mt-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center text-sm">⚠️</div>
                    <div>
                      <p className="text-yellow-400 font-bold text-sm uppercase tracking-wide mb-2">BEAST MODE DISCLAIMER</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        BMI is just one metric in your fitness arsenal. True beasts know that muscle mass, body composition, 
                        and performance matter more than numbers. Consult your fitness coach for the complete picture!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
