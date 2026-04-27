"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const features = [
  "Acceso ilimitado a todas las instalaciones",
  "Uso de todo el equipamiento",
  "Clases grupales incluidas",
  "Vestuarios con taquillas",
  "Asesoramiento inicial gratuito",
  "Sin permanencia mínima"
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="precios" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <Image
          src="/images/logo.png"
          alt=""
          fill
          sizes="50vw"
          className="object-contain object-right"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="motion-smooth text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-foreground mb-4">
            NUESTRO <span className="text-primary">PRECIO</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Una cuota mensual que incluye todo lo que necesitas para entrenar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="motion-smooth max-w-lg mx-auto"
        >
          <div className="relative bg-card border-2 border-primary p-8 md:p-12">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-2 flex items-center gap-2">
              <Star className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
              <span className="font-[family-name:var(--font-display)] text-sm font-bold text-primary-foreground uppercase tracking-wider">
                Cuota Única
              </span>
            </div>

            <div className="text-center mb-8 pt-4">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground mb-4 uppercase">
                Acceso Total
              </h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-[family-name:var(--font-display)] text-6xl md:text-7xl font-bold text-primary">
                  38
                </span>
                <span className="text-3xl text-primary">€</span>
                <span className="text-muted-foreground text-lg ml-2">/mes</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, delay: 0.25 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="motion-smooth flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 rounded-none"
              asChild
            >
              <a href="#contacto">INSCRÍBETE AHORA</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
