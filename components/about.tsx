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
    <section id="instalaciones" className="border-b border-white/10 bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="motion-smooth"
          >
            <p className="section-eyebrow mb-3">Más que un gimnasio</p>
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-5xl font-black uppercase italic leading-[0.9] tracking-[-0.05em] text-foreground md:text-7xl">
              Más que un <span className="text-primary">gimnasio</span>
            </h2>
            <p className="mb-5 text-base leading-relaxed text-muted-foreground">
              En FullFitness77 creemos que el fitness es un estilo de vida. Nuestro lema{" "}
              <span className="text-primary font-semibold">&quot;Destruye lo que te destruye&quot;</span>{" "}
              representa nuestra filosofía: superar los límites mentales y físicos que te impiden alcanzar tu máximo potencial.
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              Ubicados en el corazón de Adeje, contamos con instalaciones modernas y un equipo de profesionales comprometidos con tu transformación.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.45, delay: 0.25 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="fitness-panel motion-smooth p-4 text-center"
                >
                  <p className="font-[family-name:var(--font-display)] text-3xl font-black text-primary md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground md:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fitness-panel motion-smooth relative h-[420px] overflow-hidden md:h-[540px]"
          >
            <Image
              src="/images/mas-que-un-gimnasio.png"
              alt="FullFitness77 Gym & Wellness en Adeje"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/85 via-background/10 to-primary/25" />
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="motion-smooth absolute bottom-0 left-0 bg-primary p-6 md:p-8"
            >
              <p className="font-[family-name:var(--font-display)] text-5xl font-black text-primary-foreground md:text-6xl">
                77%
              </p>
              <p className="text-xs font-black uppercase tracking-widest text-primary-foreground">
                Dedicación a tu objetivo
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
