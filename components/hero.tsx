"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Clock, Dumbbell, ShieldCheck, Users } from "lucide-react"

const heroHighlights = [
  { icon: Clock, label: "Abierto 7 días", value: "06:00 - 22:00" },
  { icon: Dumbbell, label: "Equipamiento", value: "Última generación" },
  { icon: Users, label: "Entrenadores", value: "Profesionales" },
  { icon: ShieldCheck, label: "Sin matrícula", value: "Sin permanencia" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-primary/20 bg-background">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,83,0,0.28),transparent_32%),linear-gradient(120deg,rgba(255,83,0,0.08),transparent_35%),linear-gradient(180deg,#050505_0%,#0b0b0b_58%,#050505_100%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-4 pb-28 pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="motion-smooth max-w-3xl"
          >
            <p className="mb-4 font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Más que un gimnasio, un estilo de vida
            </p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="motion-smooth font-[family-name:var(--font-display)] text-6xl font-black uppercase italic leading-[0.86] tracking-[-0.06em] text-foreground sm:text-7xl lg:text-8xl xl:text-9xl"
            >
              Destruye
              <br />
              lo que te
              <br />
              <span className="text-primary">destruye</span>
            </motion.h1>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="motion-smooth mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
            >
              Todo lo que necesitas para transformar tu cuerpo y mente en un solo lugar. Entrena fuerte en el corazón de Adeje.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="motion-smooth mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="rounded-none bg-primary px-8 py-6 text-sm font-black uppercase tracking-wider text-primary-foreground shadow-[0_0_28px_rgba(255,83,0,0.28)] hover:bg-primary/90"
                asChild
              >
                <a href="#precios">Inscríbete ahora</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none border border-white/25 bg-white/5 px-8 py-6 text-sm font-black uppercase tracking-wider text-foreground backdrop-blur hover:bg-foreground hover:text-background"
                asChild
              >
                <a href="#servicios">Conoce más</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="motion-smooth relative hidden min-h-[560px] lg:block"
          >
            <div className="absolute right-0 top-10 h-[520px] w-[78%] border border-primary/30 bg-primary/10 shadow-[0_0_80px_rgba(255,83,0,0.18)]" />
            <Image
              src="/images/mas-que-un-gimnasio.png"
              alt="Entrenamiento FullFitness77 en Adeje"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-contain object-bottom drop-shadow-[0_35px_65px_rgba(0,0,0,0.65)]"
              priority
            />
            <div className="absolute right-10 top-14 h-28 w-28 bg-primary/90 p-4 shadow-[0_0_50px_rgba(255,83,0,0.35)]">
              <Image src="/images/logo.png" alt="" width={96} height={96} className="h-full w-full object-contain" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="motion-smooth absolute bottom-0 left-0 right-0 border-y border-white/10 bg-black/55 backdrop-blur-xl"
        >
          <div className="container mx-auto grid grid-cols-2 divide-x divide-white/10 px-4 md:grid-cols-4">
            {heroHighlights.map((item) => (
              <div key={item.label} className="flex items-center gap-4 px-3 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-[family-name:var(--font-display)] text-sm font-black uppercase tracking-wider text-foreground">
                    {item.label}
                  </span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">{item.value}</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="motion-smooth absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="motion-smooth"
          >
            <ChevronDown className="h-7 w-7 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
