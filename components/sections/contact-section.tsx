import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
            Discutons de vos projets et de la façon dont nous pouvons vous aider à les réussir
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Nom complet"
                  className="w-full"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full"
                />
                <Input
                  type="text"
                  placeholder="Entreprise"
                  className="w-full"
                />
                <Textarea
                  placeholder="Votre message"
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-[#8B0000] hover:bg-[#700000] text-white"
              >
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-6">
                Nos coordonnées
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#8B0000] mt-1" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-[#5A5A5A]">19 Sicap Rue dix<br />DAKAR SENEGAL</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#8B0000] mt-1" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-[#5A5A5A]">Tél mob SENEGAL: +221 78.193.59.69<br />Tél mob France: +33 07 86 02 51 97</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#8B0000] mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-[#5A5A5A]">pierredieng.kheops@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                Horaires d'ouverture
              </h3>
              <p className="text-[#5A5A5A]">
                Du lundi au vendredi<br />
                9h00 - 18h00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 