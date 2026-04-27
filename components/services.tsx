"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Dumbbell, Users, Zap, Clock, Heart, Target } from "lucide-react"

const services = [
  {
    icon: Dumbbell,
    title: "Musculación",
    description: "Equipamiento de última generación para trabajar todos los grupos musculares."
  },
  {
    icon: Zap,
    title: "Cardio",
    description: "Cintas, bicicletas y elípticas para mejorar tu resistencia cardiovascular."
  },
  {
    icon: Users,
    title: "Clases Grupales",
    description: "Spinning, funcional, HIIT y más. Entrena en grupo y motívate."
  },
  {
    icon: Target,
    title: "Entrenamiento Personal",
    description: "Planes personalizados con seguimiento profesional para alcanzar tus objetivos."
  },
  {
    icon: Heart,
    title: "Zona de Estiramientos",
    description: "Área dedicada para calentamiento, estiramientos y recuperación."
  },
  {
    icon: Clock,
    title: "Horario Amplio",
    description: "Abierto de lunes a viernes de 6:00 a 22:00 y fines de semana de 8:00 a 16:00."
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="servicios" className="border-b border-white/10 bg-secondary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="motion-smooth mb-12 text-center"
        >
          <p className="section-eyebrow mb-3">Servicios</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black uppercase italic tracking-[-0.04em] text-foreground md:text-6xl">
            Entrena a tu <span className="text-primary">manera</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Todo lo que necesitas para transformar tu cuerpo y mente en un solo lugar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="fitness-panel motion-smooth group relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/80 hover:bg-card"
            >
              <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_center,rgba(255,83,0,0.24),transparent_62%)] opacity-70" />
              <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_36px_rgba(255,83,0,0.28)] transition-transform duration-300 group-hover:scale-105">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="relative mb-3 font-[family-name:var(--font-display)] text-xl font-black uppercase tracking-wide text-foreground">
                {service.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
