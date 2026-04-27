import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fullfitness77.com"

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "FullFitness77",
  url: siteUrl,
  slogan: "Destruye lo que te destruye",
  description: "Gimnasio profesional en Adeje, Tenerife, con musculación, cardio, clases grupales y entrenamiento personal.",
  telephone: "+34 922 782 501",
  image: `${siteUrl}/images/mas-que-un-gimnasio.png`,
  priceRange: "38€ / mes",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. de Ayyo, n10",
    postalCode: "38670",
    addressLocality: "Adeje",
    addressRegion: "Santa Cruz de Tenerife",
    addressCountry: "ES",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://instagram.com/fullfitness77",
    "https://facebook.com/fullfitness77",
  ],
}

export default function HomePage() {
  return (
    <main id="inicio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
