"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
              className="w-12 h-12 object-contain"
            />
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                FULL<span className="text-primary">FITNESS</span>77
              </p>
              <p className="text-muted-foreground text-sm italic">
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
            <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Inicio
            </a>
            <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Servicios
            </a>
            <a href="#precios" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Precios
            </a>
            <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors text-sm">
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
              className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              922 782 501
            </a>
            <p className="text-muted-foreground text-sm">
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
          className="motion-smooth mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} FullFitness77. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
