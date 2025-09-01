"use client"

import { motion } from "framer-motion"
import { TrendingDown, Target, Award, Zap, Trophy, BarChart3 } from "lucide-react"

// Mock data for progress demonstration
const mockData = [
  { week: 1, weight: 78, strength: 85, endurance: 72 },
  { week: 2, weight: 77, strength: 88, endurance: 75 },
  { week: 3, weight: 76, strength: 92, endurance: 78 },
  { week: 4, weight: 75.5, strength: 95, endurance: 82 },
  { week: 5, weight: 74.8, strength: 98, endurance: 85 }
]

export function ProgressChart() {
  const totalWeightLoss = mockData[0].weight - mockData[mockData.length - 1].weight
  const strengthGain = mockData[mockData.length - 1].strength - mockData[0].strength
  const enduranceGain = mockData[mockData.length - 1].endurance - mockData[0].endurance

  return (
    <section id="progress" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-green-500/20 backdrop-blur-sm border border-purple-500/30 text-gray-900 dark:text-white mb-8"
          >
            <BarChart3 className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="font-bold uppercase tracking-wide">BEAST ANALYTICS</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="block">TRACK YOUR</span>
            <span className="block fitness-gradient-text">DOMINANCE</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Visualize your fitness journey with aggressive analytics. Watch your transformation unfold and dominate every metric!
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Progress Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="xl:col-span-2"
          >
            <div className="glass-card rounded-3xl p-8 lg:p-12 neon-glow">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-green-500 rounded-2xl flex items-center justify-center neon-glow">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-wider">BEAST PROGRESSION</h3>
                  <p className="text-gray-400 font-medium">Your transformation data over time</p>
                </div>
              </div>

              {/* Custom Beast Chart Visualization */}
              <div className="space-y-8">
                <div className="space-y-6">
                  {mockData.map((data, index) => (
                    <motion.div
                      key={data.week}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-card rounded-2xl p-6 border border-white/20"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-900 dark:text-white font-black text-lg uppercase tracking-wider">WEEK {data.week}</span>
                        <div className="flex items-center gap-4">
                          <div className="text-green-400 font-bold">{data.weight}kg</div>
                          <div className="text-purple-400 font-bold">{data.strength}%</div>
                          <div className="text-yellow-400 font-bold">{data.endurance}%</div>
                        </div>
                      </div>
                      
                      {/* Progress bars */}
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-green-400 font-bold uppercase tracking-wide">WEIGHT</span>
                            <span className="text-green-400">{data.weight} KG</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${100 - ((data.weight - 70) / 10) * 100}%` }}
                              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                              viewport={{ once: true }}
                              className="h-full bg-gradient-to-r from-green-400 to-green-600"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-purple-400 font-bold uppercase tracking-wide">STRENGTH</span>
                            <span className="text-purple-400">{data.strength}%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${data.strength}%` }}
                              transition={{ duration: 1, delay: index * 0.1 + 0.7 }}
                              viewport={{ once: true }}
                              className="h-full bg-gradient-to-r from-purple-400 to-purple-600"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-yellow-400 font-bold uppercase tracking-wide">ENDURANCE</span>
                            <span className="text-yellow-400">{data.endurance}%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${data.endurance}%` }}
                              transition={{ duration: 1, delay: index * 0.1 + 0.9 }}
                              viewport={{ once: true }}
                              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart Legend */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-400" />
                    <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">WEIGHT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-purple-400" />
                    <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">STRENGTH</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-yellow-400" />
                    <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">ENDURANCE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Total Weight Loss */}
            <div className="glass-card rounded-3xl p-6 neon-glow border border-green-500/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white text-sm uppercase tracking-wider">WEIGHT CRUSHED</h4>
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-black text-green-400 mb-2">
                -{totalWeightLoss.toFixed(1)} KG
              </div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                TOTAL DOMINATION
              </div>
            </div>

            {/* Strength Gain */}
            <div className="glass-card rounded-3xl p-6 neon-glow border border-purple-500/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white text-sm uppercase tracking-wider">STRENGTH SURGE</h4>
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-black text-purple-400 mb-2">
                +{strengthGain}%
              </div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                POWER INCREASE
              </div>
            </div>

            {/* Endurance Boost */}
            <div className="glass-card rounded-3xl p-6 neon-glow border border-yellow-500/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white text-sm uppercase tracking-wider">ENDURANCE BEAST</h4>
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-black text-yellow-400 mb-2">
                +{enduranceGain}%
              </div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                STAMINA BOOST
              </div>
            </div>

            {/* Achievement */}
            <div className="glass-card rounded-3xl p-6 neon-glow border border-blue-500/30 pulse-glow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white text-sm uppercase tracking-wider">BEAST STATUS</h4>
                </div>
              </div>
              <div className="text-2xl lg:text-3xl font-black text-blue-400 mb-2">
                🔥 LEGEND
              </div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                ELITE PERFORMANCE
              </div>
            </div>

            {/* Quick Beast Stats */}
            <div className="glass-card rounded-3xl p-6">
              <h4 className="font-black text-gray-900 dark:text-white text-lg uppercase tracking-wider mb-6">BEAST METRICS</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-sm text-gray-400 uppercase tracking-wide">START WEIGHT</span>
                  <span className="font-black text-lg text-gray-900 dark:text-white">{mockData[0].weight} KG</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-sm text-gray-400 uppercase tracking-wide">CURRENT WEIGHT</span>
                  <span className="font-black text-lg text-green-400">{mockData[mockData.length - 1].weight} KG</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-sm text-gray-400 uppercase tracking-wide">BEAST WEEKS</span>
                  <span className="font-black text-lg text-gray-900 dark:text-white">{mockData.length} WEEKS</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-400 uppercase tracking-wide">BEAST RATE</span>
                  <span className="font-black text-lg text-yellow-400">UNSTOPPABLE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Beast Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20"
        >
          <div className="glass-card rounded-3xl p-8 lg:p-12 neon-glow">
            <h3 className="text-3xl lg:text-4xl font-black text-center mb-12 text-gray-900 dark:text-white uppercase tracking-wider">
              <span className="fitness-gradient-text">BEAST MODE METRICS</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { 
                  label: "CONSISTENCY BEAST", 
                  value: "95%", 
                  description: "Weekly check-ins crushed",
                  color: "text-green-400",
                  bg: "border-green-500/30",
                  icon: "📊"
                },
                { 
                  label: "TREND DOMINATION", 
                  value: "↓ CRUSHING", 
                  description: "Weight annihilation mode",
                  color: "text-blue-400",
                  bg: "border-blue-500/30",
                  icon: "📈"
                },
                { 
                  label: "GOAL DESTROYER", 
                  value: "64%", 
                  description: "Target weight obliterated",
                  color: "text-purple-400",
                  bg: "border-purple-500/30",
                  icon: "🎯"
                },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`text-center p-6 lg:p-8 rounded-2xl glass-card border ${metric.bg} hover:neon-glow transition-all duration-300 cursor-pointer`}
                >
                  <div className="text-4xl mb-4">{metric.icon}</div>
                  <div className={`text-3xl lg:text-4xl font-black mb-3 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="font-black text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">
                    {metric.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
