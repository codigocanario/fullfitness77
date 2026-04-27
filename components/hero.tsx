"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-gym.jpg"
          alt="FullFitness77 Gimnasio"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="motion-smooth flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="motion-smooth mb-6"
          >
            <Image
              src="/images/logo.png"
              alt="FullFitness77 Logo"
              width={200}
              height={200}
              sizes="(min-width: 768px) 192px, 128px"
              className="w-32 h-32 md:w-48 md:h-48 object-contain"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="motion-smooth font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-4"
          >
            FULL<span className="text-primary">FITNESS</span>77
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="motion-smooth font-[family-name:var(--font-display)] text-xl md:text-2xl lg:text-3xl text-muted-foreground tracking-widest uppercase mb-8"
          >
            Destruye lo que te destruye
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
            className="motion-smooth flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-none"
              asChild
            >
              <a href="#precios">ÚNETE AHORA</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold text-lg px-8 py-6 rounded-none"
              asChild
            >
              <a href="#contacto">CONTÁCTANOS</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="motion-smooth absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="motion-smooth"
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
