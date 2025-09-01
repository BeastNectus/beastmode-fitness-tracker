"use client"

import { motion } from "framer-motion"
import { Dumbbell, Target, TrendingUp, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Dumbbell,
      title: "TRACK EVERY REP",
      description: "Monitor every workout, set, and rep with precision tracking that helps you push your limits and break personal records.",
      color: "from-green-400 to-emerald-500",
      delay: 0.1
    },
    {
      icon: Target,
      title: "SMASH YOUR GOALS",
      description: "Set ambitious targets and crush them with our goal-setting system that keeps you accountable and motivated.",
      color: "from-blue-400 to-cyan-500",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: "VISUALIZE GAINS",
      description: "Watch your progress explode with detailed analytics and charts that show your incredible transformation journey.",
      color: "from-purple-400 to-violet-500",
      delay: 0.3
    },
    {
      icon: Zap,
      title: "INSTANT MOTIVATION",
      description: "Get real-time feedback and achievements that fuel your fire and keep you crushing it every single day.",
      color: "from-yellow-400 to-orange-500",
      delay: 0.4
    }
  ]

  return (
    <section id="features" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 text-gray-900 dark:text-white mb-8"
          >
            <Zap className="w-5 h-5 text-green-400 animate-pulse" />
            <span className="font-bold uppercase tracking-wide">GAME-CHANGING FEATURES</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="block">TRANSFORM</span>
            <span className="block fitness-gradient-text">YOUR POTENTIAL</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every feature designed to push you beyond your limits and unleash the beast within
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group glass-card rounded-3xl p-8 text-center cursor-pointer relative overflow-hidden"
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Icon container */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:shadow-2xl transition-all duration-300 neon-glow`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-wider group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>

                {/* Hover effect line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500`} />
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
              READY TO DOMINATE?
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the elite fitness warriors who refuse to settle for average. Your transformation story starts here.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="fitness-gradient font-black text-white px-12 py-6 rounded-2xl text-xl uppercase tracking-wider shadow-2xl neon-glow transition-all duration-300"
            >
              🔥 UNLEASH THE BEAST
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
