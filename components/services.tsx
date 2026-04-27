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
    <section id="servicios" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="motion-smooth text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-foreground mb-4">
            NUESTROS <span className="text-primary">SERVICIOS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Todo lo que necesitas para transformar tu cuerpo y mente en un solo lugar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="motion-smooth group bg-card p-8 border border-border hover:border-primary transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
