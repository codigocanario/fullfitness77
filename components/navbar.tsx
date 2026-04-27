"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    let frameId = 0

    const handleScroll = () => {
      if (ticking) return

      ticking = true
      frameId = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50)
        ticking = false
      })
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`motion-smooth fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="FullFitness77"
              width={50}
              height={50}
              sizes="40px"
              className="w-10 h-10 object-contain"
            />
            <span className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground hidden sm:block">
              FULL<span className="text-primary">FITNESS</span>77
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-display)] text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:922782501"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">922 782 501</span>
            </a>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-none"
              asChild
            >
              <a href="#precios">INSCRÍBETE</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="motion-smooth fixed inset-0 z-40 bg-background pt-20 md:hidden"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="motion-smooth font-[family-name:var(--font-display)] text-2xl tracking-wider text-foreground hover:text-primary transition-colors uppercase"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:922782501"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="motion-smooth flex items-center gap-2 text-primary text-xl mt-4"
              >
                <Phone className="w-5 h-5" />
                <span>922 782 501</span>
              </motion.a>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="motion-smooth"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-none px-8"
                  asChild
                >
                  <a href="#precios" onClick={() => setIsMobileMenuOpen(false)}>
                    INSCRÍBETE
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
