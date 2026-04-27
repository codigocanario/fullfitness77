"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/20 bg-black">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="motion-smooth flex items-center gap-4"
          >
            <Image
              src="/images/logo.png"
              alt="FullFitness77"
              width={60}
              height={60}
              sizes="48px"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl font-black tracking-tight text-foreground">
                FULL<span className="text-primary">FITNESS</span>77
              </p>
              <p className="text-sm italic text-muted-foreground">
                &quot;Destruye lo que te destruye&quot;
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="motion-smooth flex flex-wrap justify-center gap-6"
          >
            <a href="#inicio" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">
              Inicio
            </a>
            <a href="#servicios" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">
              Servicios
            </a>
            <a href="#instalaciones" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">
              Instalaciones
            </a>
            <a href="#precios" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">
              Precios
            </a>
            <a href="#contacto" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">
              Contacto
            </a>
          </motion.nav>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="motion-smooth text-center md:text-right"
          >
            <a
              href="tel:922782501"
              className="font-[family-name:var(--font-display)] text-2xl font-black text-primary transition-colors hover:text-primary/80"
            >
              922 782 501
            </a>
            <p className="text-sm text-muted-foreground">
              Adeje, Tenerife
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          viewport={{ once: true }}
          className="motion-smooth mt-8 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            © {currentYear} FullFitness77. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
