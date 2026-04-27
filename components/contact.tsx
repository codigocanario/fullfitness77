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
    <section id="contacto" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="motion-smooth text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">ENCUÉNTRANOS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Visítanos y comienza tu transformación hoy mismo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="motion-smooth space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.35, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="motion-smooth flex items-start gap-4 bg-card p-6 border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground mb-1 uppercase">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.35, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="motion-smooth flex gap-4 pt-4"
            >
              <a
                href="https://instagram.com/fullfitness77"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary group transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://facebook.com/fullfitness77"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary group transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.35, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="motion-smooth pt-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-none w-full sm:w-auto"
                asChild
              >
                <a href="tel:922782501">
                  <Phone className="w-5 h-5 mr-2" />
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
            className="motion-smooth h-[400px] lg:h-full min-h-[400px] border border-border"
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
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
