"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    content: "922 782 501",
    href: "tel:922782501"
  },
  {
    icon: MapPin,
    title: "Dirección",
    content: "Av. de Ayyo, n10, 38670 Adeje, Santa Cruz de Tenerife, Spain",
    href: "https://www.google.com/maps/search/?api=1&query=FullFitness77%2C%20Av.%20de%20Ayyo%2C%20n10%2C%2038670%20Adeje%2C%20Santa%20Cruz%20de%20Tenerife%2C%20Spain"
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 6:00 - 22:00 | Sáb - Dom: 8:00 - 16:00",
    href: null
  }
]

const mapEmbedUrl = "https://www.google.com/maps?q=FullFitness77%2C%20Av.%20de%20Ayyo%2C%20n10%2C%2038670%20Adeje%2C%20Santa%20Cruz%20de%20Tenerife%2C%20Spain&output=embed"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contacto" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="motion-smooth mb-10 text-center"
        >
          <p className="section-eyebrow mb-3">Contacto</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black uppercase italic tracking-[-0.04em] text-foreground md:text-6xl">
            <span className="text-primary">Encuéntranos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            Visítanos y comienza tu transformación hoy mismo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.4fr]">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="fitness-panel motion-smooth space-y-5 p-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.35, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="motion-smooth flex items-start gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-primary/15">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-[family-name:var(--font-display)] text-sm font-black uppercase tracking-wider text-foreground">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.35, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="motion-smooth flex items-center gap-4 pt-2"
            >
              <span className="font-[family-name:var(--font-display)] text-sm font-black uppercase tracking-wider text-foreground">
                Redes sociales
              </span>
              <a
                href="https://instagram.com/fullfitness77"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 hover:border-primary hover:bg-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://facebook.com/fullfitness77"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 hover:border-primary hover:bg-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary-foreground" />
              </a>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.35, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="motion-smooth pt-1"
            >
              <Button
                size="lg"
                className="orange-glow w-full rounded-none bg-primary px-8 py-6 text-sm font-black uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="tel:922782501">
                  <Phone className="mr-2 h-5 w-5" />
                  LLÁMANOS AHORA
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fitness-panel motion-smooth h-[420px] min-h-[420px] overflow-hidden border-primary/20 lg:h-full"
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de FullFitness77"
              className="grayscale transition-all duration-500 hover:grayscale-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
