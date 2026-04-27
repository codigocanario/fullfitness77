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
    <section id="precios" className="relative overflow-hidden border-b border-white/10 bg-secondary py-20">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
        <Image
          src="/images/logo.png"
          alt=""
          fill
          sizes="50vw"
          className="object-contain object-right"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="motion-smooth mb-12 text-center"
        >
          <p className="section-eyebrow mb-3">Cuota única</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black uppercase italic tracking-[-0.04em] text-foreground md:text-6xl">
            Acceso <span className="text-primary">total</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            Una cuota mensual que incluye todo lo que necesitas para entrenar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="motion-smooth mx-auto grid max-w-5xl items-stretch gap-6 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div className="fitness-panel relative border-primary/60 p-8 md:p-10">
            {/* Popular badge */}
            <div className="orange-glow absolute -top-4 left-8 flex items-center gap-2 bg-primary px-5 py-2">
              <Star className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
              <span className="font-[family-name:var(--font-display)] text-xs font-black uppercase tracking-wider text-primary-foreground">
                Cuota Única
              </span>
            </div>

            <div className="mb-8 pt-8">
              <h3 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-black uppercase text-foreground">
                Acceso Total
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-display)] text-7xl font-black text-primary md:text-8xl">
                  38
                </span>
                <span className="text-4xl font-black text-primary">€</span>
                <span className="ml-2 text-lg text-muted-foreground">/mes</span>
              </div>
            </div>

            <ul className="mb-8 space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, delay: 0.25 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="motion-smooth flex items-center gap-3 text-sm"
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center bg-primary/15">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              size="lg"
              className="orange-glow w-full rounded-none bg-primary py-6 text-sm font-black uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#contacto">INSCRÍBETE AHORA</a>
            </Button>
          </div>

          <div className="fitness-panel relative min-h-[420px] overflow-hidden border-primary/25">
            <Image
              src="/images/mas-que-un-gimnasio.png"
              alt="Entrenamiento en FullFitness77"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
            <div className="absolute right-6 top-1/2 max-w-[190px] -translate-y-1/2 border border-primary/60 bg-black/70 p-6 backdrop-blur">
              <p className="font-[family-name:var(--font-display)] text-lg font-black uppercase text-primary">
                Sin matrícula
                <br />
                sin permanencia
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
