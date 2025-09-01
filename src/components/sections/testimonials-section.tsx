"use client"

import { motion } from "framer-motion"
import { Star, Quote, Flame, Zap, Trophy } from "lucide-react"

const testimonials = [
  {
    name: "ALEX 'TITAN' MARTINEZ",
    testimonial: "This tracker unleashed the BEAST in me!",
    rating: 5,
    role: "FITNESS WARRIOR",
    image: "A",
    fullReview: "I've tried every fitness app out there, but BEASTTRACK is different. It doesn't just track progress - it IGNITES the warrior within. The aggressive design and beast-level analytics push me to DOMINATE every workout. This isn't just an app, it's a TRANSFORMATION ENGINE!",
    transformation: "Lost 15kg, gained UNSTOPPABLE MINDSET"
  },
  {
    name: "JAMIE 'CRUSHER' CHEN",
    testimonial: "BEAST MODE activated daily with this app!",
    rating: 5,
    role: "STRENGTH DEMON",
    image: "J",
    fullReview: "As someone who lives and breathes fitness, BEASTTRACK speaks my language. The aggressive metrics, the CRUSHING analytics, the pure BEAST energy - it's everything I need to maintain my elite performance. This app doesn't coddle you - it CHALLENGES you to be LEGENDARY!",
    transformation: "Bench pressed 120kg, CRUSHED all limits"
  },
  {
    name: "SARAH 'FURY' WILLIAMS",
    testimonial: "BMI calculator with BEAST POWER accuracy!",
    rating: 5,
    role: "TRANSFORMATION GURU",
    image: "S",
    fullReview: "The BMI calculator isn't just accurate - it's BEAST MODE accurate! I recommend BEASTTRACK to all my warrior clients because it doesn't just show numbers, it shows POTENTIAL. The aggressive terminology motivates my clients to OBLITERATE their limits and achieve LEGENDARY status!",
    transformation: "Transformed 200+ clients into BEASTS"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 text-gray-900 dark:text-white mb-8"
          >
            <Flame className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="font-bold uppercase tracking-wide">BEAST TESTIMONIALS</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="block">WARRIOR</span>
            <span className="block fitness-gradient-text">STORIES</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join the ranks of LEGENDARY BEASTS who have OBLITERATED their limits and achieved UNSTOPPABLE transformation!
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="h-full glass-card rounded-3xl p-8 hover:neon-glow transition-all duration-500 group border border-white/20 overflow-hidden relative">
                {/* Beast Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-12 w-12 text-red-500/50 group-hover:text-red-400 transition-colors rotate-180" />
                </div>

                {/* Beast Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-yellow-400 text-yellow-400 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Beast Testimonial */}
                <blockquote className="text-lg lg:text-xl font-bold mb-8 text-gray-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors leading-relaxed">
                  "{testimonial.fullReview}"
                </blockquote>

                {/* Transformation Result */}
                <div className="glass-card rounded-2xl p-4 mb-6 border border-green-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">TRANSFORMATION</span>
                  </div>
                  <p className="text-sm font-bold text-green-400 uppercase tracking-wide">
                    {testimonial.transformation}
                  </p>
                </div>

                {/* Beast User Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white font-black text-xl shadow-lg neon-glow">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-black text-lg text-gray-900 dark:text-white uppercase tracking-wider">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-red-400 font-bold uppercase tracking-wide">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beast Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20"
        >
          <div className="glass-card rounded-3xl p-8 lg:p-12 neon-glow">
            <h3 className="text-3xl lg:text-4xl font-black text-center mb-12 text-gray-900 dark:text-white uppercase tracking-wider">
              <span className="fitness-gradient-text">BEAST ARMY STATS</span>
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { number: "4.9", label: "BEAST RATING", suffix: "/5", icon: "⭐", color: "text-yellow-400" },
                { number: "25K+", label: "WARRIORS", suffix: "", icon: "�", color: "text-red-400" },
                { number: "98%", label: "DOMINATION RATE", suffix: "", icon: "📈", color: "text-green-400" },
                { number: "24/7", label: "BEAST SUPPORT", suffix: "", icon: "💬", color: "text-purple-400" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center p-6 lg:p-8 rounded-2xl glass-card border border-white/20 hover:neon-glow transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className={`text-3xl lg:text-4xl font-black mb-3 ${stat.color}`}>
                    {stat.number}
                    <span className="text-lg text-gray-400">{stat.suffix}</span>
                  </div>
                  <div className="font-black text-gray-900 dark:text-white mb-1 uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Beast Army Call */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-6 glass-card rounded-full px-8 py-6 border border-green-500/30 neon-glow">
            <div className="flex -space-x-3">
              {['A', 'J', 'S', 'M', 'T'].map((initial, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white text-lg font-black border-4 border-black shadow-lg neon-glow"
                >
                  {initial}
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-black text-gray-900 dark:text-white text-lg uppercase tracking-wider">
                JOIN 25,000+ BEASTS
              </div>
              <div className="text-sm text-green-400 font-bold uppercase tracking-wide">
                DOMINATING THEIR LIMITS
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-black text-sm uppercase tracking-wider">LEGENDARY STATUS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
