"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const stats = [
  { value: "500+", label: "Miembros activos" },
  { value: "10+", label: "Años de experiencia" },
  { value: "1000m²", label: "De instalaciones" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="motion-smooth relative h-[400px] md:h-[500px]"
          >
            <Image
              src="/images/mas-que-un-gimnasio.png"
              alt="FullFitness77 Gym & Wellness en Adeje"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="motion-smooth absolute -bottom-6 -right-6 md:right-6 bg-primary p-6 md:p-8"
            >
              <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-primary-foreground">
                77
              </p>
              <p className="text-primary-foreground text-sm uppercase tracking-wider">
                % Dedicación
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="motion-smooth"
          >
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-foreground mb-6">
              MÁS QUE UN <span className="text-primary">GIMNASIO</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              En FullFitness77 creemos que el fitness es un estilo de vida. Nuestro lema{" "}
              <span className="text-primary font-semibold">&quot;Destruye lo que te destruye&quot;</span>{" "}
              representa nuestra filosofía: superar los límites mentales y físicos que te impiden alcanzar tu máximo potencial.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ubicados en el corazón de Adeje, contamos con instalaciones modernas y un equipo de profesionales comprometidos con tu transformación.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.45, delay: 0.25 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="motion-smooth text-center p-4 bg-card border border-border"
                >
                  <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
