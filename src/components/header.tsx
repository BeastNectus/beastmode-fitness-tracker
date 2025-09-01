"use client"

// BeastTrack Fitness Progress Tracker
// Developed by: John Mamanao (Software Developer)
// GitHub: @BeastNectus

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Dumbbell, Zap, Target, Flame } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Features", id: "features", icon: Zap },
    { label: "BMI Calculator", id: "bmi-calculator", icon: Target },
    { label: "Progress", id: "progress", icon: Dumbbell },
    { label: "Testimonials", id: "testimonials", icon: Target },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "glass-card backdrop-blur-xl border-b border-gray-200 dark:border-green-500/20 shadow-lg bg-white/80 dark:bg-black/80"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 sm:h-20 items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <div className="relative">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center shadow-lg neon-glow">
              <Dumbbell className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
              BEAST<span className="fitness-gradient-text">MODE</span>
            </h1>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">UNLEASH YOUR POWER</p>
          </div>
        </motion.div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center gap-2 text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-green-400 font-bold transition-colors relative"
              >
                <Icon className="w-4 h-4 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors" />
                <span className="text-sm uppercase tracking-wide">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center space-x-3">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 hover:text-green-500 dark:hover:text-green-400"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          )}
          <Button 
            onClick={() => scrollToSection("cta")}
            className="fitness-gradient hover:scale-105 text-white font-black px-6 py-3 rounded-2xl shadow-lg neon-glow transform transition-all duration-300 uppercase tracking-wide text-sm"
          >
            🔥 GET BEAST MODE
          </Button>
        </div>

        <div className="flex lg:hidden items-center space-x-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-card mt-4 mx-4 rounded-3xl border border-green-500/20 overflow-hidden"
          >
            <nav className="px-6 py-8 space-y-6">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-4 w-full text-left text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-green-400 font-bold transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-lg uppercase tracking-wide">{item.label}</span>
                  </motion.button>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Button 
                  onClick={() => scrollToSection("cta")} 
                  className="w-full fitness-gradient hover:scale-105 text-white font-black py-4 rounded-2xl shadow-lg neon-glow transform transition-all duration-300 uppercase tracking-wide"
                >
                  🔥 START YOUR JOURNEY
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
