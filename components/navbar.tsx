"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#instalaciones", label: "Instalaciones" },
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
            ? "border-b border-primary/20 bg-black/90 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-b border-white/10 bg-black/35 backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="FullFitness77"
              width={50}
              height={50}
              sizes="40px"
              className="h-10 w-10 object-contain"
            />
            <span className="hidden font-[family-name:var(--font-display)] text-lg font-black tracking-tight text-foreground sm:block">
              FULL<span className="text-primary">FITNESS</span>77
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:922782501"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">922 782 501</span>
            </a>
            <Button
              className="orange-glow rounded-none bg-primary px-5 font-black uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#precios">INSCRÍBETE</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="motion-smooth fixed inset-0 z-40 bg-black pt-20 md:hidden"
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
                  className="motion-smooth font-[family-name:var(--font-display)] text-2xl font-black uppercase tracking-wider text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:922782501"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="motion-smooth mt-4 flex items-center gap-2 text-xl text-primary"
              >
                <Phone className="h-5 w-5" />
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
                  className="rounded-none bg-primary px-8 font-black text-primary-foreground hover:bg-primary/90"
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
