import { ContactSection } from "@/components/sections/contact-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | KHEOPS Consulting",
  description: "Contactez KHEOPS Consulting pour discuter de vos projets et découvrir comment nous pouvons vous aider à les réussir.",
}

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="bg-[#f5f5f5] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1C1C1C] mb-4">
            Contactez-nous
          </h1>
          <p className="text-center text-[#5A5A5A] max-w-2xl mx-auto">
            Notre équipe d&apos;experts est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
          </p>
        </div>
      </div>
      <ContactSection />
    </main>
  )
} 